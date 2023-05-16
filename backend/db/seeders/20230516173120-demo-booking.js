"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Bookings";
    return queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1,
          userId: 2,
          startDate: "2021-10-10",
          endDate: "2021-10-13",
        },
        {
          spotId: 2,
          userId: 3,
          startDate: "2022-11-10",
          endDate: "2022-11-17",
        },
        {
          spotId: 3,
          userId: 1,
          startDate: "2022-04-15",
          endDate: "2022-04-23",
        },
        {
          spotId: 4,
          userId: 2,
          startDate: "2023-01-02",
          endDate: "2023-01-06",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Bookings";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        startDate: {
          [Op.eq]: ["2021-10-10", "2022-11-10", "2022-04-15", "2023-01-02"],
        },
      },
      {}
    );
  },
};
