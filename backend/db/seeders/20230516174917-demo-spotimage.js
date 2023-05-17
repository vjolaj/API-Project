"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: "image_spot1 url",
        preview: true
      },
      {
        spotId: 2,
        url: "image_spot2 url",
        preview: true
      },
      {
        spotId: 3,
        url: "image_spot3 url",
        preview: false
      },
      {
        spotId: 4,
        url: "image_spot4 url",
        preview: true
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      url: { [Op.in]: ['image_spot1 url', 'image_spot2 url', 'image_spot3 url', 'image_spot4 url'] }
    }, {});
  }
};
