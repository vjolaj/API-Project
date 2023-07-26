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
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133588966881378394/spot_8_1.webp",
        preview: true
      },
      {
        spotId: 8,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133588967187550308/spot_8_2.webp",
        preview: false
      },
      {
        spotId: 8,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133588967430836404/spot_8_3.webp",
        preview: false
      },
      {
        spotId: 8,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133588967862845480/spot_8_4.webp",
        preview: false
      },
      {
        spotId: 8,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133588968290668584/spot_8_5.webp",
        preview: false
      },
      {
        spotId: 9,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133589981651284038/spot_9_1.webp",
        preview: true
      },
      {
        spotId: 9,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133589982272032799/spot_9_2.webp",
        preview: false
      },
      {
        spotId: 9,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133589982678888508/spot_9_3.webp",
        preview: false
      },
      {
        spotId: 9,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133589983148642384/spot_9_4.webp",
        preview: false
      },
      {
        spotId: 9,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133589983580663898/spot_9_5.webp",
        preview: false
      },
      {
        spotId: 10,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133590978578632756/spot_10_1.webp",
        preview: true
      },
      {
        spotId: 10,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133590978943524944/spot_10_2.webp",
        preview: false
      },
      {
        spotId: 10,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133590979304239194/spot_10_3.webp",
        preview: false
      },
      {
        spotId: 10,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133590979681734786/spot_10_4.webp",
        preview: false
      },
      {
        spotId: 10,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133590980004683788/spot_10_5.webp",
        preview: false
      },
      {
        spotId: 11,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133617294128447538/spot_11_1.webp",
        preview: true
      },
      {
        spotId: 11,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133617294547877938/spot_11_2.webp",
        preview: false
      },
      {
        spotId: 11,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133617294803738676/spot_11_3.webp",
        preview: false
      },
      {
        spotId: 11,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133617295260925992/spot_11_4.webp",
        preview: false
      },
      {
        spotId: 11,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133617295898443807/spot_11_5.webp",
        preview: false
      },
      {
        spotId: 12,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133618134541140048/spot_12_1.webp",
        preview: true
      },
      {
        spotId: 12,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133618134725709854/spot_12_2.webp",
        preview: false
      },
      {
        spotId: 12,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133618135086407753/spot_12_3.webp",
        preview: false
      },
      {
        spotId: 12,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133618135325474858/spot_12_4.webp",
        preview: false
      },
      {
        spotId: 12,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133618135564570634/spot_12_5.webp",
        preview: false
      },
      {
        spotId: 13,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133619313778114631/spot_13_1.webp",
        preview: true
      },
      {
        spotId: 13,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133619314214309908/spot_13_2.webp",
        preview: false
      },
      {
        spotId: 13,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133619314642137198/spot_13_3.webp",
        preview: false
      },
      {
        spotId: 13,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133619315082543224/spot_13_4.webp",
        preview: false
      },
      {
        spotId: 13,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133619315434852372/spot_13_5.webp",
        preview: false
      },
      {
        spotId: 14,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133620285313134632/spot_14_1.webp",
        preview: true
      },
      {
        spotId: 14,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133620285816442981/spot_14_2.webp",
        preview: false
      },
      {
        spotId: 14,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133620286290395187/spot_14_3.webp",
        preview: false
      },
      {
        spotId: 14,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133620286877601822/spot_14_4.webp",
        preview: false
      },
      {
        spotId: 14,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133620287238307870/spot_14_5.webp",
        preview: false
      },
      {
        spotId: 15,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133621258148393000/spot_15_1.webp",
        preview: true
      },
      {
        spotId: 15,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133621258559422506/spot_15_2.webp",
        preview: false
      },
      {
        spotId: 15,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133621259092099092/spot_15_3.webp",
        preview: false
      },
      {
        spotId: 15,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133621259482181732/spot_15_4.webp",
        preview: false
      },
      {
        spotId: 15,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133621259826102302/spot_15_5.webp",
        preview: false
      },
      {
        spotId: 16,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133622843964399769/spot_16_1.webp",
        preview: true
      },
      {
        spotId: 16,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133622844237041714/spot_16_2.webp",
        preview: false
      },
      {
        spotId: 16,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133622844488679455/spot_16_3.webp",
        preview: false
      },
      {
        spotId: 16,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133622844824231977/spot_16_4.webp",
        preview: false
      },
      {
        spotId: 16,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133622845084270603/spot_16_5.webp",
        preview: false
      },
      {
        spotId: 17,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133623827398656010/spot_17_2.webp",
        preview: true
      },
      {
        spotId: 17,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133623826991824956/spot_17_1.webp",
        preview: false
      },
      {
        spotId: 17,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133623827755192401/spot_17_3.webp",
        preview: false
      },
      {
        spotId: 17,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133623828233322536/spot_17_4.webp",
        preview: false
      },
      {
        spotId: 17,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133623828577275975/spot_17_5.webp",
        preview: false
      },
      {
        spotId: 18,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133625639732256859/spot_18_1.webp",
        preview: true
      },
      {
        spotId: 18,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133625639992307712/spot_18_2.webp",
        preview: false
      },
      {
        spotId: 18,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133625640449478656/spot_18_3.webp",
        preview: false
      },
      {
        spotId: 18,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133625640650809426/spot_18_4.webp",
        preview: false
      },
      {
        spotId: 18,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133625640898277547/spot_18_5.webp",
        preview: false
      },
      {
        spotId: 19,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133626463581646878/spot_19_1.webp",
        preview: true
      },
      {
        spotId: 19,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133626464051400735/spot_19_2.webp",
        preview: false
      },
      {
        spotId: 19,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133626464349192272/spot_19_3.webp",
        preview: false
      },
      {
        spotId: 19,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133626464764440616/spot_19_4.webp",
        preview: false
      },
      {
        spotId: 19,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133626465175474187/spot_19_5.webp",
        preview: false
      },
      {
        spotId: 20,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133627939318136864/spot_20_1.webp",
        preview: true
      },
      {
        spotId: 20,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133627939725004872/spot_20_2.webp",
        preview: false
      },
      {
        spotId: 20,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133627940169592943/spot_20_3.webp",
        preview: false
      },
      {
        spotId: 20,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133627940740005979/spot_20_4.webp",
        preview: false
      },
      {
        spotId: 20,
        url: "https://cdn.discordapp.com/attachments/1116216556800716822/1133627941218168903/spot_20_5.webp",
        preview: false
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] }
    }, {});
  }
};
