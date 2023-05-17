const express = require("express");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const { Spot, sequelize, Review, SpotImage } = require("../../db/models");
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
  console.log(userId);
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

//GET details of a spot from an Id
router.get("/:spotId", async (req, res) => {
  const spotId = parseInt(req.params.spotId);
  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({ message: "Spot couldn't be found" });
  }
  const completeSpot = [];

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
  completeSpot.push(spot.toJSON());

  res.json({ Spots: completeSpot });
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
    res.json({message: "Successfully deleted"})
  } else {
    res.status(403).json({ message: "Unauthorized access" });
  }
});

module.exports = router;
