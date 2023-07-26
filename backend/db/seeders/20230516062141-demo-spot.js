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
          ownerId: 1, //spotId 1
          address: "123 Alpine Drive",
          city: "Los Angeles",
          state: "California",
          country: "United States of America",
          lat: 34.069839,
          lng: -118.403659,
          name: "Quaint LA apartment",
          description: "Quaint LA apartment close to Rodeo Drive",
          price: 123,
        },
        {
          ownerId: 1,  //spotId 2
          address: "13 Sumner Street",
          city: "Boston",
          state: "Massachusetts",
          country: "United States of America",
          lat: 42.3604,
          lng: -71.0548,
          name: "Bright Boston apartment",
          description: "Close to lively neighborhoods of Boston",
          price: 140,
        },
        {
          ownerId: 2, //spotId 3
          address: "33 Ocean Blvd",
          city: "Miami",
          state: "Florida",
          country: "United States of America",
          lat: 25.7355,
          lng: -80.2377,
          name: "Beachside Miami condo",
          description: "Steps away from clear blue waters and white sands",
          price: 220,
        },
        {
          ownerId: 3, //spotId 4
          address: "537 Sullivan Street",
          city: "New York",
          state: "New York",
          country: "United States of America",
          lat: 40.7309,
          lng: -73.9973,
          name: "Spacious Washington Square apartment",
          description: "Spacious apartment in a convenient location",
          price: 350,
        },
        {
          ownerId: 2, //spotId 5
          address: "789 Palm Avenue",
          city: "Miami",
          state: "Florida",
          country: "United States of America",
          lat: 25.7312,
          lng: -80.2395,
          name: "Tropical Miami Villa",
          description: "Relax in this luxurious villa with a private pool",
          price: 450,
        },
        {
          ownerId: 4, //spotId 6
          address: "225 Main Street",
          city: "San Francisco",
          state: "California",
          country: "United States of America",
          lat: 37.7925,
          lng: -122.3975,
          name: "Charming SF Loft",
          description: "Cozy loft with stunning city views",
          price: 180,
        },
        {
          ownerId: 3, //spotId 7
          address: "99 Canal Road",
          city: "New Orleans",
          state: "Louisiana",
          country: "United States of America",
          lat: 29.9511,
          lng: -90.0715,
          name: "French Quarter Gem",
          description: "Immerse yourself in the vibrant culture of New Orleans",
          price: 200,
        },
        {
          ownerId: 2, //spotId 8
          address: "432 Mountain View",
          city: "Denver",
          state: "Colorado",
          country: "United States of America",
          lat: 39.7392,
          lng: -104.9903,
          name: "Rocky Mountain Retreat",
          description: "Escape to the Rockies in this cozy cabin",
          price: 280,
        },
        {
          ownerId: 1, //spotId 9
          address: "55 Maple Lane",
          city: "Seattle",
          state: "Washington",
          country: "United States of America",
          lat: 47.6062,
          lng: -122.3321,
          name: "Modern Seattle Loft",
          description: "Stylish loft in the heart of Seattle",
          price: 160,
        },
        {
          ownerId: 3, //spotId 10
          address: "777 Broadway Ave",
          city: "Chicago",
          state: "Illinois",
          country: "United States of America",
          lat: 41.8781,
          lng: -87.6298,
          name: "Downtown Chicago Studio",
          description: "Explore the Windy City from this central studio",
          price: 120,
        },
        {
          ownerId: 4, //spotId 11
          address: "30 Sunset Boulevard",
          city: "Los Angeles",
          state: "California",
          country: "United States of America",
          lat: 34.0522,
          lng: -118.2437,
          name: "Hollywood Hills Retreat",
          description: "Enjoy stunning views in this private hillside home",
          price: 500,
        },
        {
          ownerId: 2, //spotId 12
          address: "10 Beachfront Avenue",
          city: "Santa Barbara",
          state: "California",
          country: "United States of America",
          lat: 34.4208,
          lng: -119.6982,
          name: "Seaside Cottage",
          description: "Wake up to the sound of waves in this charming cottage",
          price: 300,
        },
        {
          ownerId: 1, //spotId 13
          address: "1295 Lakeside Drive",
          city: "Orlando",
          state: "Florida",
          country: "United States of America",
          lat: 28.6139,
          lng: -81.622,
          name: "Magical Disney Villa",
          description: "Stay close to Disney World in this themed villa",
          price: 350,
        },
        {
          ownerId: 3, //spotId 14
          address: "45 Vineyard Lane",
          city: "Napa Valley",
          state: "California",
          country: "United States of America",
          lat: 38.2975,
          lng: -122.2869,
          name: "Napa Vineyard Retreat",
          description:
            "Indulge in wine country luxury at this vineyard retreat",
          price: 600,
        },
        {
          ownerId: 4, //spotId 15
          address: "6 Rainbow Road",
          city: "Honolulu",
          state: "Hawaii",
          country: "United States of America",
          lat: 21.3069,
          lng: -157.8583,
          name: "Tropical Island Bungalow",
          description: "Experience paradise in this Hawaiian bungalow",
          price: 380,
        },
        {
          ownerId: 1, //spotId 16
          address: "812 Peak View",
          city: "Aspen",
          state: "Colorado",
          country: "United States of America",
          lat: 39.1911,
          lng: -106.8175,
          name: "Luxury Ski Chalet",
          description: "Hit the slopes from this elegant ski chalet",
          price: 800,
        },
        {
          ownerId: 2, //spotId 17
          address: "25 Desert Oasis",
          city: "Phoenix",
          state: "Arizona",
          country: "United States of America",
          lat: 33.4484,
          lng: -112.074,
          name: "Desert Retreat",
          description: "Relax in the Arizona sun at this desert oasis",
          price: 180,
        },
        {
          ownerId: 4, //spotId 18
          address: "50 Harbor Drive",
          city: "San Diego",
          state: "California",
          country: "United States of America",
          lat: 32.7157,
          lng: -117.1611,
          name: "Sunny San Diego Condo",
          description: "Enjoy the beach life at this San Diego condo",
          price: 250,
        },
        {
          ownerId: 1, //spotId 19
          address: "75 Mountain Retreat",
          city: "Lake Tahoe",
          state: "California",
          country: "United States of America",
          lat: 39.0968,
          lng: -120.0324,
          name: "Lakefront Cabin",
          description: "Escape to nature in this cozy Lake Tahoe cabin",
          price: 320,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Spots";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        address: {
          [Op.in]: [
            "123 Alpine Drive",
            "13 Sumner Street",
            "33 Ocean Blvd",
            "537 Sullivan Street",
            "789 Palm Avenue",
            "225 Main Street",
            "99 Canal Road",
            "432 Mountain View",
            "55 Maple Lane",
            "777 Broadway Ave",
            "30 Sunset Boulevard",
            "10 Beachfront Avenue",
            "1295 Lakeside Drive",
            "45 Vineyard Lane",
            "6 Rainbow Road",
            "812 Peak View",
            "25 Desert Oasis",
            "50 Harbor Drive",
            "75 Mountain Retreat"
          ],
        },
      },
      {}
    );
  },
};
