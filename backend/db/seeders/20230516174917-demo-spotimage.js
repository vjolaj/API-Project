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
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116696966764699688/la-apt-1.jpeg",
        preview: true
      },
      {
        spotId: 1,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116696967729397871/rodeo_drive.jpg",
        preview: false
      },
      {
        spotId: 1,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116698404433698826/la-apt-2.jpeg",
        preview: true
      },
      {
        spotId: 1,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116698050530906202/la-apt-3.jpeg",
        preview: false
      },
      {
        spotId: 1,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116699247983738900/la-apt-4.jpeg",
        preview: false
      },
      {
        spotId: 2,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116700648302448740/boston-apt-1.jpeg",
        preview: false
      },
      {
        spotId: 2,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116700648763830282/boston-apt-2.jpeg",
        preview: true
      },
      {
        spotId: 2,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116700650944860291/boston-apt-3.jpg",
        preview: false
      },
      {
        spotId: 2,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116700652043776112/boston-apt-4.jpeg",
        preview: true
      },
      {
        spotId: 2,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116700652308013106/boston-apt-5.jpeg",
        preview: true
      },
      {
        spotId: 3,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116701963745235034/miami-apt-1.jpeg",
        preview: true
      },
      {
        spotId: 3,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116701964156289074/miami-apt-2.jpeg",
        preview: false
      },
      {
        spotId: 3,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116701964496015481/miami-apt-3.webp",
        preview: true
      },
      {
        spotId: 3,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116701965179699350/miami-apt-4.jpeg",
        preview: false
      },
      {
        spotId: 3,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116701965850775675/miami-apt-5.jpeg",
        preview: false
      },
      {
        spotId: 4,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116702872365699192/nyc-apt-1.jpeg",
        preview: true
      },
      {
        spotId: 4,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116702872613179416/nyc-apt-2.jpeg",
        preview: false
      },
      {
        spotId: 4,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116702872877412443/nyc-apt-3.jpeg",
        preview: false
      },
      {
        spotId: 4,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116702873082925117/nyc-apt-4.jpeg",
        preview: false
      },
      {
        spotId: 4,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116702873326211122/nyc-apt-5.jpeg",
        preview: false
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3, 4] }
    }, {});
  }
};
