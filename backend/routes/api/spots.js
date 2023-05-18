const express = require("express");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const {
  User,
  Spot,
  sequelize,
  Review,
  SpotImage,
  ReviewImage,
  Booking,
} = require("../../db/models");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

//GET all spots, returns all spots
router.get("/", async (req, res) => {
  const spots = await Spot.findAll();

  const completeSpots = [];

  for (let spot of spots) {
    const reviews = await spot.getReviews();

    let sum = 0;
    for (let review of reviews) {
      sum += review.dataValues.stars;
    }
    const avg = sum / reviews.length;
    spot.dataValues.avgRating = avg;

    const previewImage = await SpotImage.findOne({
      where: { spotId: spot.id, preview: true },
    });
    spot.dataValues.previewImage = previewImage ? previewImage.url : "";
    //find preview image where spot preview = true. Otherwise, set to null?
    completeSpots.push(spot.toJSON());
  }
  res.json({ Spots: completeSpots });
});

//GET all spots owned by the current user
router.get("/current", requireAuth, async (req, res) => {
  const userId = req.user.id;
  const spots = await Spot.findAll({
    where: {
      ownerId: userId,
    },
  });

  const completeSpots = [];

  for (let spot of spots) {
    const reviews = await spot.getReviews();

    let sum = 0;
    for (let review of reviews) {
      sum += review.dataValues.stars;
    }
    const avg = sum / reviews.length;
    spot.dataValues.avgRating = avg;

    const previewImage = await SpotImage.findOne({
      where: { spotId: spot.id, preview: true },
    });
    spot.dataValues.previewImage = previewImage ? previewImage.url : "";
    completeSpots.push(spot.toJSON());
  }
  res.json({ Spots: completeSpots });
});

//GET all reviews by a spot's id
router.get("/:spotId/reviews", async (req, res) => {
  const spotId = parseInt(req.params.spotId);
  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({ message: "Spot couldn't be found" });
  }

  const reviews = await Review.findAll({
    where: {
      spotId: spotId,
    },
    include: [
      { model: User, attributes: ["id", "firstName", "lastName"] },
      { model: ReviewImage, attributes: ["id", "url"] },
    ],
  });
  res.json({ Reviews: reviews });
});

//GET all the bookings for a spot based on the spot's id
router.get("/:spotId/bookings", requireAuth, async (req, res) => {
  const userId = req.user.id;
  const spotId = parseInt(req.params.spotId);
  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({ message: "Spot couldn't be found" });
  }

  if (userId !== spot.ownerId) {
    const bookings = await Booking.findAll({
      where: {
        spotId: spotId,
      },
      attributes: ["spotId", "startDate", "endDate"],
    });
    res.json({ Bookings: bookings });
  } else {
    const bookings = await Booking.findAll({
      where: {
        spotId: spotId,
      },
      include: [
        {
          model: User,
          attributes: ["id", "firstName", "lastName"],
        },
      ],
    });
    res.json({ Bookings: bookings });
  }
});

//Create a new booking from a spot based on the spot's id
router.post("/:spotId/bookings", requireAuth, async (req, res) => {
  let { startDate, endDate } = req.body;

  startDate = new Date(new Date(startDate).toUTCString());
  endDate = new Date(new Date(endDate).toUTCString());

  if (endDate.getTime() <= startDate.getTime()) {
    return res.status(400).json({
      message: "Bad Request",
      errors: { endDate: "endDate cannot be on or before startDate" },
    });
  }
  const userId = req.user.id;
  const spotId = parseInt(req.params.spotId);
  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({ message: "Spot couldn't be found" });
  }


  const existingBooking = await Booking.findAll({
    where: {
      spotId: spot.id,
      [Op.or]: [
        {
          startDate: {
            [Op.between]: [startDate, endDate],
          },
        },
        {
          endDate: {
            [Op.between]: [startDate, endDate],
          },
        },
      ],
    },
  });

  if (existingBooking) {
    return res.status(403).json({
      message: "Sorry, this spot is already booked for the specified dates",
      errors: {
        startDate: "Start date conflicts with an existing booking",
        endDate: "End date conflicts with an existing booking",
      },
    });
  }
//   for (let booking of currentBookings) {
//     if (
//       startDate.getTime() >= bookingStartDate.getTime() &&
//       startDate.getTime() <= bookingEndDate.getTime()
//     ) {
//       return res.status(400).json({
//         message: "Sorry, this spot is already booked for the specified dates",
//         errors: { startDate: "Start date conflicts with an existing booking" },
//       });
//     }
//     if (
//       endDate.getTime() >= bookingEndDate.getTime() &&
//       endDate.getTime() <= bookingEndDate.getTime()
//     ) {
//       return res.status(400).json({
//         message: "Sorry, this spot is already booked for the specified dates",
//         errors: { endDate: "End date conflicts with an existing booking" },
//       });
//     }
//   }

  if (userId !== spot.ownerId) {
    const newBooking = await Booking.create({
      userId,
      spotId,
      startDate,
      endDate,
    });
    const safeBooking = {
      id: newBooking.id,
      userId: newBooking.userId,
      spotId: newBooking.spotId,
      startDate: newBooking.startDate,
      endDate: newBooking.endDate,
      createdAt: newBooking.createdAt,
      updatedAt: newBooking.updatedAt,
    };
    return res.json(safeBooking);
  }
});

const validateReview = [
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Review text is required"),
  check("stars")
    .exists({ checkFalsy: true })
    .isInt({ min: 1, max: 5 })
    .withMessage("Stars must be an integer from 1 to 5"),
  handleValidationErrors,
];

//Create a review for a spot based on the spot's id
router.post(
  "/:spotId/reviews",
  validateReview,
  requireAuth,
  async (req, res) => {
    const { review, stars } = req.body;
    const userId = req.user.id;
    const spotId = parseInt(req.params.spotId);
    const spot = await Spot.findByPk(spotId);

    if (!spot) {
      return res.status(404).json({ message: "Spot couldn't be found" });
    }

    const existingReview = await Review.findOne({ where: { userId, spotId } });

    if (existingReview) {
      return res
        .status(500)
        .json({ message: "User already has a review for this spot" });
    }

    const newReview = await Review.create({
      userId,
      spotId,
      review,
      stars,
    });
    const safeReview = {
      id: newReview.id,
      userId: newReview.userId,
      spotId: newReview.spotId,
      review: newReview.review,
      stars: newReview.stars,
      createdAt: newReview.createdAt,
      updatedAt: newReview.updatedAt,
    };
    return res.json(safeReview);
  }
);

//GET details of a spot from an Id
router.get("/:spotId", async (req, res) => {
  const spotId = parseInt(req.params.spotId);
  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({ message: "Spot couldn't be found" });
  }

  const reviews = await spot.getReviews();

  let sum = 0;
  for (let review of reviews) {
    sum += review.dataValues.stars;
  }
  const avg = sum / reviews.length;
  spot.dataValues.avgRating = avg;

  const spotImages = await SpotImage.findAll({
    where: { spotId: spot.id },
    attributes: {
      exclude: ["spotId", "createdAt", "updatedAt"],
    },
  });
  spot.dataValues.spotImages = spotImages;

  res.json(spot);
});

const validateSpot = [
  check("address")
    .exists({ checkFalsy: true })
    .withMessage("Street address is required"),
  check("city").exists({ checkFalsy: true }).withMessage("City is required"),
  check("state").exists({ checkFalsy: true }).withMessage("State is required"),
  check("country")
    .exists({ checkFalsy: true })
    .withMessage("Country is required"),
  check("lat")
    .exists({ checkFalsy: true })
    .withMessage("Latitude is not valid"),
  check("lng")
    .exists({ checkFalsy: true })
    .withMessage("Longitude is not valid"),
  check("name")
    .exists({ checkFalsy: true })
    .isLength({ max: 50 })
    .withMessage("Name must be less than 50 characters"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Description is required"),
  check("price")
    .exists({ checkFalsy: true })
    .withMessage("Price per day is required"),
  handleValidationErrors,
];

// Create a Spot
router.post("/", validateSpot, requireAuth, async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } =
    req.body;
  const ownerId = req.user.id;

  const spot = await Spot.create({
    ownerId,
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
  });

  const safeSpot = {
    id: spot.id,
    ownerId: spot.ownerId,
    address: spot.address,
    city: spot.city,
    state: spot.state,
    country: spot.country,
    lat: spot.lat,
    lng: spot.lng,
    name: spot.name,
    description: spot.description,
    price: spot.price,
    createdAt: spot.createdAt,
    updatedAt: spot.updatedAt,
  };

  return res.json(safeSpot);
});

//Edit a Spot
router.put("/:spotId", validateSpot, requireAuth, async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } =
    req.body;
  const userId = req.user.id;
  const spotId = parseInt(req.params.spotId);
  let spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({ message: "Spot couldn't be found" });
  }

  if (userId === spot.ownerId) {
    spot.address = address;
    spot.city = city;
    spot.state = state;
    spot.country = country;
    spot.lat = lat;
    spot.lng = lng;
    spot.name = name;
    spot.description = description;
    spot.price = price;

    await spot.save();

    res.json(spot);
  } else {
    res.status(403).json({ message: "Unauthorized access" });
  }
});

//Add an image to a spot based on the spot's id
router.post("/:spotId/images", requireAuth, async (req, res) => {
  const { url, preview } = req.body;
  const userId = req.user.id;
  const spotId = parseInt(req.params.spotId);
  let spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({ message: "Spot couldn't be found" });
  }

  if (userId === spot.ownerId) {
    const image = await spot.createSpotImage({ spotId, url, preview });
    const newImage = {
      id: image.id,
      url: image.url,
      preview: image.preview,
    };
    res.json(newImage);
  } else {
    res.status(403).json({ message: "Unauthorized access" });
  }
});

//DELETE a spot
router.delete("/:spotId", requireAuth, async (req, res) => {
  const userId = req.user.id;
  const spotId = parseInt(req.params.spotId);
  let spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({ message: "Spot couldn't be found" });
  }

  if (userId === spot.ownerId) {
    await spot.destroy();
    res.json({ message: "Successfully deleted" });
  } else {
    res.status(403).json({ message: "Unauthorized access" });
  }
});

module.exports = router;
