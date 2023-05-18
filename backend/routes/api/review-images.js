const express = require("express");
const { Op } = require("sequelize");
const {
  User,
  Spot,
  Review,
  SpotImage,
  ReviewImage,
  Booking,
} = require("../../db/models");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

//Delete a review image
router.delete("/:imageId", requireAuth, async (req, res) => {
  const userId = req.user.id;
  const reviewImageId = parseInt(req.params.imageId);

  const reviewImage = await ReviewImage.findOne({
    where: { id: reviewImageId },
    include: [
      {
        model: Review,
        where: { userId: userId },
      },
    ],
  });

  if (!reviewImage) {
    return res.status(404).json({ message: "Review Image couldn't be found" });
  }

  await reviewImage.destroy();
  res.json({ message: "Successfully deleted" });
});

module.exports = router;
