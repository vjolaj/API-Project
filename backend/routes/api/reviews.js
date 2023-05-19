const express = require("express");
const {
  User,
  Spot,
  Review,
  ReviewImage,
} = require("../../db/models");
const {
  requireAuth,
} = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();



//GET all reviews of current user
router.get("/current", requireAuth, async (req, res) => {
  const userId = req.user.id;
  const reviews = await Review.findAll({
    where: {
      userId: userId,
    },
    include: [
      { model: User, attributes: ["id", "firstName", "lastName"] },
      {
        model: Spot,
        attributes: {
          exclude: ["description", "createdAt", "updatedAt"],
        },
      },
      { model: ReviewImage, attributes: ["id", "url"] },
    ],
  });

  res.json({ Reviews: reviews });
});

//Add an image to a review based on the review's id
router.post('/:reviewId/images', requireAuth, async (req, res) => {
    const { url } = req.body;
    const userId = req.user.id;
    const reviewId = parseInt(req.params.reviewId)
    const review = await Review.findByPk(reviewId)

    if (!review) {
        return res.status(404).json({message: "Review couldn't be found"})
    }
    console.log(Object.getOwnPropertyNames(Review.prototype));

    //add error handling: cannot add any more images because there is a maximum of 10 images per source
    const existingImagesCount = await review.countReviewImages();

    if (existingImagesCount >= 10) {
        return res.status(403).json({ message: "Maximum number of images for this resource was reached" });
    }

    if (userId === review.userId) {
        const image = await review.createReviewImage({ reviewId, url})
        const newImage = {
            id: image.id,
            url: image.url
        }
        res.json(newImage)
    } else {
        res.status(403).json({ message: "Forbidden" });
    }
})

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
  
//Edit a review
router.put('/:reviewId', validateReview, requireAuth, async (req, res) => {
    const { review, stars } = req.body;
    const userId = req.user.id;
    const reviewId = parseInt(req.params.reviewId)
    let foundReview = await Review.findByPk(reviewId)

    if (!foundReview) {
        return res.status(404).json({message: "Review couldn't be found"})
    }

    if (userId === foundReview.userId) {
        foundReview.review = review;
        foundReview.stars = stars;
        await foundReview.save();
        res.json(foundReview)
    } else {
        res.status(403).json({ message: "Forbidden" });
    }
})


//DELETE a review
router.delete("/:reviewId", requireAuth, async(req,res) => {
    const userId = req.user.id;
    const reviewId = parseInt(req.params.reviewId)
    let review = await Review.findByPk(reviewId)

    if (!review) {
        return res.status(404).json({message: "Review couldn't be found"})
    }

    if (userId === review.userId) {
        await review.destroy();
        res.json({ message: "Successfully deleted"})
    } else {
        res.status(403).json({ message: "Forbidden" })
    }
})
module.exports = router;


