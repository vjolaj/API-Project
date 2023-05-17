const express = require("express");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const { Spot, sequelize, Review, SpotImage } = require("../../db/models");
const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth");
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
  const spotId  = parseInt(req.params.spotId);
  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({message: "Spot couldn't be found"})
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
    where: { spotId: spot.id},
    attributes: {
        exclude: ['spotId','createdAt', 'updatedAt']
    }
  });
  spot.dataValues.spotImages = spotImages 
  completeSpot.push(spot.toJSON());

  res.json({ Spots: completeSpot });
});





module.exports = router;
