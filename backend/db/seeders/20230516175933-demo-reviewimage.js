"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'ReviewImages';
    return queryInterface.bulkInsert(options, [
      {
        reviewId: 1,
        url: "reviewImageOne_url"
      },
      {
        reviewId: 2,
        url: "reviewImageTwo_url"
      },
      {
        reviewId: 3,
        url: "reviewImageThree_url"
      },
      {
        reviewId: 4,
        url: "reviewImageFour_url"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      url: { [Op.in]: ['reviewImageOne_url', 'reviewImageTwo_url', 'reviewImageThree_url', 'reviewImageFour_url'] }
    }, {});
  }
};
