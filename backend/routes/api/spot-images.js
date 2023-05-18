const express = require("express");
const {
  Spot,
  SpotImage,
} = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

const router = express.Router();

//Deletes a spot image
router.delete("/:imageId", requireAuth, async (req, res) => {
  const userId = req.user.id;
  const spotImageId = parseInt(req.params.imageId);

  const spotImage = await SpotImage.findOne({
    where: { id: spotImageId },
    include: [
      {
        model: Spot,
        where: { ownerId: userId }, 
      },
    ],
  });

  if (!spotImage) {
    return res.status(404).json({ message: "Spot Image couldn't be found" });
  }
  
  await spotImage.destroy();
  res.json({ message: "Successfully deleted"})

});

module.exports = router;
