const express = require("express");
const { Spot, Booking } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

const router = express.Router();

//GET all of the current user's bookings
router.get("/current", requireAuth, async (req, res) => {
  const userId = req.user.id;
  const bookings = await Booking.findAll({
    where: {
      userId: userId,
    },
    include: [
      {
        model: Spot,
        attributes: {
          exclude: ["description", "createdAt", "updatedAt"],
        },
      },
    ],
  });
  res.json({ Bookings: bookings });
});

//UPDATE AND RETURN AN EXISTING BOOKING
router.put("/:bookingId", requireAuth, async (req, res) => {
  let { startDate, endDate } = req.body;
  const userId = req.user.id;
  const bookingId = parseInt(req.params.bookingId);
  let foundBooking = await Booking.findByPk(bookingId);

  if (!foundBooking) {
    return res.status(404).json({ message: "Booking couldn't be found" });
  }

  startDate = new Date(new Date(startDate).toUTCString());
  endDate = new Date(new Date(endDate).toUTCString());
  const currentDate = new Date();

  if (endDate.getTime() <= startDate.getTime()) {
    return res.status(400).json({
      message: "Bad Request",
      errors: { endDate: "endDate cannot be on or before startDate" },
    });
  }
  const currentBookings = await Booking.findAll({
    where: {
      spotId: foundBooking.spotId,
    },
  });

  for (let booking of currentBookings) {
    let bookingStartDate = new Date(
      new Date(booking.dataValues.startDate).toUTCString()
    );
    let bookingEndDate = new Date(
      new Date(booking.dataValues.endDate).toUTCString()
    );
    if (
      startDate.getTime() >= bookingStartDate.getTime() &&
      startDate.getTime() <= bookingEndDate.getTime()
    ) {
      return res.status(400).json({
        message: "Sorry, this spot is already booked for the specified dates",
        errors: { startDate: "Start date conflicts with an existing booking" },
      });
    }
    if (
      endDate.getTime() >= bookingEndDate.getTime() &&
      endDate.getTime() <= bookingEndDate.getTime()
    ) {
      return res.status(400).json({
        message: "Sorry, this spot is already booked for the specified dates",
        errors: { endDate: "End date conflicts with an existing booking" },
      });
    }
  }

  if (userId === foundBooking.userId) {
    let bookingEndDate = new Date(
      new Date(foundBooking.dataValues.endDate).toUTCString()
    );

    if (bookingEndDate.getTime() < currentDate.getTime()) {
      return res
        .status(403)
        .json({ message: "Past bookings can't be modified" });
    }
    foundBooking.startDate = startDate;
    foundBooking.endDate = endDate;
    await foundBooking.save();
    res.json(foundBooking);
  } else {
    res.status(403).json({ message: "Forbidden Access" });
  }
});

//DELETE an existing booking
router.delete("/:bookingId", requireAuth, async (req, res) => {
  const userId = req.user.id;
  const bookingId = parseInt(req.params.bookingId);
  let booking = await Booking.findByPk(bookingId);

  if (!booking) {
    return res.status(404).json({ message: "Booking couldn't be found" });
  }

  const currentDate = new Date();

  if (userId === booking.userId) {
    let bookingStartDate = new Date(
      new Date(booking.dataValues.startDate).toUTCString()
    );

    if (bookingStartDate.getTime() < currentDate.getTime()) {
      return res
        .status(403)
        .json({ message: "Bookings that have been started can't be deleted" });
    }
    await booking.destroy();
    res.json({ message: "Successfully deleted" });
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
});
module.exports = router;
