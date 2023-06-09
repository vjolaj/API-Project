"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Spots";
    return queryInterface.bulkInsert(
      options,
      [
        {
          ownerId: 1,
          address: "123 Alpine Drive",
          city: "Los Angeles",
          state: "California",
          country: "United States of America",
          lat: 34.069839,
          lng: -118.403659,
          name: "Quaint LA apartment",
          description: "Quaint LA apartment close to Rodeo Drive",
          price: 123
        },
        {
          ownerId: 1,
          address: "13 Sumner Street",
          city: "Boston",
          state: "Massachusetts",
          country: "United States of America",
          lat: 42.3604,
          lng: -71.0548,
          name: "Bright Boston apartment",
          description: "Close to lively neighborhoods of Boston",
          price: 140
        },
        {
          ownerId: 2,
          address: "33 Ocean Blvd",
          city: "Miami",
          state: "Florida",
          country: "United States of America",
          lat: 25.7355,
          lng: -80.2377,
          name: "Beachside Miami condo",
          description: "Steps away from clear blue waters and white sands",
          price: 220
        },
        {
          ownerId: 3,
          address: "537 Sullivan Street",
          city: "New York",
          state: "New York",
          country: "United States of America",
          lat: 40.7309,
          lng: -73.9973,
          name: "Spacious Washington Square apartment",
          description: "Spacious apartment in a convenient location",
          price: 350
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      address: { [Op.in]: ["123 Alpine Drive", "13 Sumner Street", "33 Ocean Blvd", "537 Sullivan Street"] }
    }, {});
  }
};
