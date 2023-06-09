"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "ReviewImages";
    return queryInterface.bulkInsert(
      options,
      [
        {
          reviewId: 1,
          url: "reviewImageOne_url",
        },
        {
          reviewId: 2,
          url: "reviewImageTwo_url",
        },
        {
          reviewId: 3,
          url: "reviewImageThree_url",
        },
        {
          reviewId: 4,
          url: "reviewImageFour_url",
        },
        {
          reviewId: 5,
          url: "reviewImageFive_url",
        },
        {
          reviewId: 6,
          url: "reviewImageSix_url",
        },
        {
          reviewId: 7,
          url: "reviewImageSeven_url",
        },
        {
          reviewId: 8,
          url: "reviewImageEight_url",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "ReviewImages";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        reviewId: {
          [Op.in]: [
            1, 2, 3, 4, 5, 6, 7, 8
          ],
        },
      },
      {}
    );
  },
};
