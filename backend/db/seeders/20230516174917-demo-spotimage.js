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
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116770085630136470/la-apt-useThis.jpeg",
        preview: false
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
        preview: false
      },
      {
        spotId: 2,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1116700652308013106/boston-apt-5.jpeg",
        preview: false
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
        preview: false
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
      },
      {
        spotId: 5,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133583329699049502/spot_5_1.webp",
        preview: true
      },
      {
        spotId: 5,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133583954335760425/spot_5_2.webp",
        preview: false
      },
      {
        spotId: 5,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133583954558062672/spot_5_3.webp",
        preview: false
      },
      {
        spotId: 5,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133583954776170577/spot_5_4.webp",
        preview: false
      },
      {
        spotId: 5,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133583955027820554/spot_5_5.webp",
        preview: false
      },
      {
        spotId: 6,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133586168882139159/spot_6_1.webp",
        preview: true
      },
      {
        spotId: 6,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133586169205113014/spot_6_5.webp",
        preview: false
      },
      {
        spotId: 6,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133586169523867749/spot_6_2.webp",
        preview: false
      },
      {
        spotId: 6,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133586169817464832/loft_6_3.webp",
        preview: false
      },
      {
        spotId: 6,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133586170115276821/loft_6_4.webp",
        preview: false
      },
      {
        spotId: 7,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133587537043136573/spot_7_1.webp",
        preview: true
      },
      {
        spotId: 7,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133587537261248632/spot_7_2.webp",
        preview: false
      },
      {
        spotId: 7,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133587537475141752/spot_7_3.webp",
        preview: false
      },
      {
        spotId: 7,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133587537697448056/spot_7_4.webp",
        preview: false
      },
      {
        spotId: 7,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133587537957503078/spot_7_5.webp",
        preview: false
      },
      {
        spotId: 8,
        url: "",
        preview: true
      },
      {
        spotId: 8,
        url: "",
        preview: false
      },
      {
        spotId: 8,
        url: "",
        preview: false
      },
      {
        spotId: 8,
        url: "",
        preview: false
      },
      {
        spotId: 8,
        url: "",
        preview: false
      },

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
