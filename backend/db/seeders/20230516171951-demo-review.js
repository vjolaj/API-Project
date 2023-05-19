"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Reviews";
    return queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1, //reviewId: 1
          userId: 2,
          review: "Had a great stay here!",
          stars: 5,
        },
        {
          spotId: 1, //reviewId: 2
          userId: 3,
          review: "Had a great stay here!",
          stars: 4,
        },
        {
          spotId: 2, //reviewId: 3
          userId: 3,
          review: "Clean place, pictures made it seem bigger.",
          stars: 4,
        },
        {
          spotId: 3, //reviewId: 4
          userId: 1,
          review: "So close to the beach, the kids loved it!",
          stars: 5,
        },
        {
          spotId: 4, //reviewId: 5
          userId: 2,
          review: "Convenient location but old building, had a weird smell.",
          stars: 3,
        },
        {
          spotId: 4,  //reviewId: 6
          userId: 1,
          review: "Wish it had another bathroom.",
          stars: 4,
        },
        {
          spotId: 3, //reviewId: 7
          userId: 4,
          review: "Nice place, neighborhood was a little noisy.",
          stars: 4,
        },
        {
          spotId: 2, //reviewId: 8
          userId: 4,
          review: "Had a lovely stay here!",
          stars: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Reviews";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        review: {
          [Op.in]: [
            "Had a great stay here!",
            "Clean place, pictures made it seem bigger.",
            "So close to the beach, the kids loved it!",
            "Convenient location but old building, had a weird smell.",
            "Wish it had another bathroom.",
            "Nice place, neighborhood was a little noisy.",
            "Had a lovely stay here!"
          ],
        },
      },
      {}
    );
  },
};
