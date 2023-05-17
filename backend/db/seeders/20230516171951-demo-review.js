"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Reviews';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 2,
        review: 'Had a great stay here!',
        stars: 5
      },
      {
        spotId: 1,
        userId: 3,
        review: 'Had a great stay here!',
        stars: 3
      },
      {
        spotId: 2,
        userId: 3,
        review: 'Clean place, pictures made it seem bigger.',
        stars: 4
      },
      {
        spotId: 3,
        userId: 1,
        review: 'So close to the beach, the kids loved it!',
        stars: 5
      },
      {
        spotId: 4,
        userId: 2,
        review: 'Convenient location but old building, had a weird smell.',
        stars: 3
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      review: { [Op.eq]: ['Had a great stay here!', 'Clean place, pictures made it seem bigger.', 'So close to the beach, the kids loved it!', 'Convenient location but old building, had a weird smell.'] }
    }, {});
  }
};

