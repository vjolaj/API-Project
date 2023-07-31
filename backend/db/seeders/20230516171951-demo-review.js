"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Reviews";
    return queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1, //reviewId: 1
          userId: 2,
          review: "Had a great stay here!",
          stars: 5,
        },
        {
          spotId: 1, //reviewId: 2
          userId: 3,
          review: "This is such a nice little spot!",
          stars: 4,
        },
        {
          spotId: 2, //reviewId: 3
          userId: 3,
          review: "Clean place, pictures made it seem bigger.",
          stars: 4,
        },
        {
          spotId: 3, //reviewId: 4
          userId: 1,
          review: "So close to the beach, the kids loved it!",
          stars: 5,
        },
        {
          spotId: 4, //reviewId: 5
          userId: 2,
          review: "Convenient location but old building, had a weird smell.",
          stars: 3,
        },
        {
          spotId: 4,  //reviewId: 6
          userId: 1,
          review: "Wish it had another bathroom.",
          stars: 4,
        },
        {
          spotId: 3, //reviewId: 7
          userId: 4,
          review: "Nice place, neighborhood was a little noisy.",
          stars: 4,
        },
        {
          spotId: 2, //reviewId: 8
          userId: 4,
          review: "Great place, lots of amenities!",
          stars: 5,
        },
        {
          spotId: 1, //reviewId: 1
          userId: 6,
          review: "Enjoyed our stay. The location was perfect and central to all attractions.",
          stars: 5,
        },
        {
          spotId: 1, //reviewId: 1
          userId: 10,
          review: "Good communication. The host was responsive and answered all our questions.",
          stars: 4,
        },
        {
          spotId: 1, //reviewId: 1
          userId: 5,
          review: "Friendly host. They gave us great local tips and made us feel right at home.",
          stars: 4,
        },
        {
          spotId: 2, //reviewId: 1
          userId: 5,
          review: "Nice and cozy. We enjoyed our time here, and the neighborhood is charming.",
          stars: 4,
        },
        {
          spotId: 2, //reviewId: 1
          userId: 8,
          review: "Super clean. The place was spotless and well-maintained. Highly impressed.",
          stars: 5,
        },
        {
          spotId: 2, 
          userId: 6,
          review: "Uncomfortable bed. The bed was too firm, and we had trouble sleeping.",
          stars: 3,
        },
        {
          spotId: 3, 
          userId: 7,
          review: "Poor cleanliness. The place was not properly cleaned before our arrival.",
          stars: 3,
        },
        {
          spotId: 3, 
          userId: 8,
          review: "Convenient location. Many great restaurants and shops within walking distance.",
          stars: 5,
        },
        {
          spotId: 3, 
          userId: 10,
          review: "Lovely decor. Every corner of the place had a personal touch and felt cozy.",
          stars: 5,
        },
        {
          spotId: 4, 
          userId: 8,
          review: "Beautiful home. The interior design and decor were stylish and inviting.",
          stars: 5,
        },
        {
          spotId: 4, 
          userId: 7,
          review: "Excellent stay! The host was very welcoming and the place was immaculate.",
          stars: 4,
        },
        {
          spotId: 4, 
          userId: 6,
          review: "Enjoyed our stay. The location was perfect and central to all attractions.",
          stars: 4,
        },
        {
          spotId: 5, 
          userId: 5,
          review: "Disappointing stay. The place did not live up to the expectations from the listing.",
          stars: 1,
        },
        {
          spotId: 5, 
          userId: 7,
          review: "Overpriced rental. The cost did not match the quality and amenities provided.",
          stars: 3,
        },
        {
          spotId: 5, 
          userId: 8,
          review: "Unresponsive host. We had trouble getting in touch with the host during our stay.",
          stars: 3,
        },
        {
          spotId: 6, 
          userId: 5,
          review: "Fantastic host. They made sure we had everything we needed for a perfect stay.",
          stars: 4,
        },
        {
          spotId: 6, 
          userId: 6,
          review: "Amazing view! We couldn't get enough of the breathtaking scenery.",
          stars: 4,
        },
        {
          spotId: 6, 
          userId: 7,
          review: "Awesome experience. We had a blast exploring the city and coming home to relax.",
          stars: 5,
        },
        {
          spotId: 6, 
          userId: 7,
          review: "Perfect getaway. A peaceful retreat with all the amenities we needed.",
          stars: 5,
        },
        {
          spotId: 6, 
          userId: 5,
          review: "Rude host. The host was not welcoming and seemed uninterested in our concerns.",
          stars: 2,
        },
        {
          spotId: 6, 
          userId: 10,
          review: "Convenient location. Many great restaurants and shops within walking distance.",
          stars: 4,
        },
        {
          spotId: 7, 
          userId: 10,
          review: "Perfect getaway. A peaceful retreat with all the amenities we needed.",
          stars: 4,
        },
        {
          spotId: 7, 
          userId: 8,
          review: "Super clean. The place was spotless and well-maintained. Highly impressed.",
          stars: 4,
        },
        {
          spotId: 7, 
          userId: 7,
          review: "Excellent stay! The host was very welcoming and the place was immaculate.",
          stars: 5,
        },
        {
          spotId: 8, 
          userId: 5,
          review: "Wonderful time. Our vacation was full of unforgettable memories.",
          stars: 5,
        },
        {
          spotId: 8, 
          userId: 7,
          review: "No privacy. The place lacked curtains or blinds, and we felt exposed.",
          stars: 3,
        },
        {
          spotId: 8, 
          userId: 9,
          review: "Charming place. The vintage charm and character of the place were delightful.",
          stars: 5,
        },
        {
          spotId: 8, 
          userId: 6,
          review: "Unreliable Wi-Fi. The internet connection was slow and frequently disconnected.",
          stars: 3,
        },
        {
          spotId: 8, 
          userId: 10,
          review: "Wonderful time. Our vacation was full of unforgettable memories.",
          stars: 4,
        },
        {
          spotId: 8, 
          userId: 5,
          review: "Feels like home. The cozy ambiance made us feel comfortable right away.",
          stars: 4,
        },
        {
          spotId: 9, 
          userId: 8,
          review: "Not as described. The amenities mentioned in the listing were not available.",
          stars: 3,
        },
        {
          spotId: 9, 
          userId: 10,
          review: "Wonderful time. Our vacation was full of unforgettable memories.",
          stars: 4,
        },
        {
          spotId: 9, 
          userId: 9,
          review: "Enjoyed our stay. The location was perfect and central to all attractions.",
          stars: 5,
        },
        {
          spotId: 10, 
          userId: 4,
          review: "Nice and cozy. We enjoyed our time here, and the neighborhood is charming.",
          stars: 4,
        },
        {
          spotId: 10, 
          userId: 1,
          review: "Super clean. The place was spotless and well-maintained. Highly impressed",
          stars: 4,
        },
        {
          spotId: 10, 
          userId: 2,
          review: "Awesome experience. We had a blast exploring the city and coming home to relax.",
          stars: 5,
        },
        {
          spotId: 11, 
          userId: 7,
          review: "Good communication. The host was responsive and answered all our questions.",
          stars: 4,
        },
        {
          spotId: 11, 
          userId: 2,
          review: "Inconsistent hot water. The water temperature fluctuated during showers.",
          stars: 2,
        },
        {
          spotId: 11, 
          userId: 5,
          review: "Inadequate heating. The heating system was insufficient for the cold weather.",
          stars: 3,
        },
        {
          spotId: 12, 
          userId: 4,
          review: "Good communication. The host was responsive and answered all our questions.",
          stars: 4,
        },
        {
          spotId: 12, 
          userId: 8,
          review: "Very comfortable. The bed was so cozy, and we slept like babies.",
          stars: 5,
        },
        {
          spotId: 12, 
          userId: 5,
          review: "Perfect getaway. A peaceful retreat with all the amenities we needed.",
          stars: 5,
        },
        {
          spotId: 13, 
          userId: 4,
          review: "Super clean. The place was spotless and well-maintained.",
          stars: 4,
        },
        {
          spotId: 13, 
          userId: 8,
          review: "They took such great care of us here, the kids had a blast.",
          stars: 5,
        },
        {
          spotId: 13, 
          userId: 5,
          review: "The themed pool was incredible. Great place to stay if visiting the Disney parks.",
          stars: 5,
        },
        {
          spotId: 14, 
          userId: 1,
          review: "Charming place. The vintage charm and character of the place were delightful.",
          stars: 5,
        },
        {
          spotId: 14, 
          userId: 5,
          review: "Feels like home. The cozy ambiance made us feel comfortable right away.",
          stars: 5,
        },
        {
          spotId: 14, 
          userId: 10,
          review: "The perfect spot for a vineyard getaway.",
          stars: 5,
        },
        {
          spotId: 15, 
          userId: 6,
          review: "Very comfortable. The bed was so cozy, and we slept like babies.",
          stars: 5,
        },
        {
          spotId: 15, 
          userId: 5,
          review: "Convenient location but the bungalow is smaller than it looks in the pictures.",
          stars: 4,
        },
        {
          spotId: 15, 
          userId: 2,
          review: "Great amenities and super close to the beach.",
          stars: 5,
        },
        {
          spotId: 16, 
          userId: 1,
          review: "Inconsistent hot water. The water temperature fluctuated during showers.",
          stars: 2,
        },
        {
          spotId: 16, 
          userId: 9,
          review: "Highly recommend. Our stay was fantastic, and the host was extremely helpful.",
          stars: 4,
        },
        {
          spotId: 16, 
          userId: 10,
          review: "Cozy and warm. The fireplace kept us warm during the chilly evenings.",
          stars: 5,
        },
        {
          spotId: 17, 
          userId: 6,
          review: "Beautiful home. The interior design and decor were stylish and inviting.",
          stars: 5,
        },
        {
          spotId: 17, 
          userId: 3,
          review: "Highly recommend. Our stay was fantastic, and the host was extremely helpful.",
          stars: 4,
        },
        {
          spotId: 17, 
          userId: 4,
          review: "Amazing view! We couldn't get enough of the breathtaking scenery.",
          stars: 5,
        },
        {
          spotId: 18, 
          userId: 6,
          review: "Fantastic host. They made sure we had everything we needed for a perfect stay.",
          stars: 5,
        },
        {
          spotId: 18, 
          userId: 3,
          review: "Outdated furnishings. The furniture and decor looked worn and outdated.",
          stars: 3,
        },
        {
          spotId: 18, 
          userId: 4,
          review: "Super clean. The place was spotless and well-maintained. Very impressed.",
          stars: 5,
        },
        {
          spotId: 19, 
          userId: 10,
          review: "Easy check-in. The process was smooth, and the instructions were clear.",
          stars: 4,
        },
        {
          spotId: 19, 
          userId: 5,
          review: "Disappointing stay. The place did not live up to the expectations from the listing.",
          stars: 2,
        },
        {
          spotId: 19, 
          userId: 8,
          review: "Perfect getaway. A peaceful retreat with all the amenities we needed.",
          stars: 5,
        },
        {
          spotId: 20, 
          userId: 8,
          review: "Good communication. The host was responsive.",
          stars: 4,
        },
        {
          spotId: 20, 
          userId: 4,
          review: "Lovely decor. Every corner of the place had a personal touch and felt cozy.",
          stars: 5,
        },
        {
          spotId: 20, 
          userId: 7,
          review: "Nice and cozy. We enjoyed our time here!",
          stars: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Reviews";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        review: {
          [Op.in]: [
            "Had a great stay here!",
            "This is such a nice little spot!",
            "Clean place, pictures made it seem bigger.",
            "So close to the beach, the kids loved it!",
            "Convenient location but old building, had a weird smell.",
            "Wish it had another bathroom.",
            "Nice place, neighborhood was a little noisy.",
            "Great place, lots of amenities!",
            "Enjoyed our stay. The location was perfect and central to all attractions.",
            "Good communication. The host was responsive and answered all our questions.",
            "Friendly host. They gave us great local tips and made us feel right at home.",
            "Nice and cozy. We enjoyed our time here, and the neighborhood is charming.",
            "Super clean. The place was spotless and well-maintained. Highly impressed.",
            "Uncomfortable bed. The bed was too firm, and we had trouble sleeping.",
            "Poor cleanliness. The place was not properly cleaned before our arrival.",
            "Convenient location. Many great restaurants and shops within walking distance.",
            "Lovely decor. Every corner of the place had a personal touch and felt cozy.",
            "Beautiful home. The interior design and decor were stylish and inviting.",
            "Excellent stay! The host was very welcoming and the place was immaculate.",
            "Enjoyed our stay. The location was perfect and central to all attractions.",
            "Disappointing stay. The place did not live up to the expectations from the listing.",
            "Overpriced rental. The cost did not match the quality and amenities provided.",
            "Unresponsive host. We had trouble getting in touch with the host during our stay.",
            "Fantastic host. They made sure we had everything we needed for a perfect stay.",
            "Amazing view! We couldn't get enough of the breathtaking scenery.",
            "Awesome experience. We had a blast exploring the city and coming home to relax.",
            "Rude host. The host was not welcoming and seemed uninterested in our concerns.",
            "Wonderful time. Our vacation was full of unforgettable memories.",
            "No privacy. The place lacked curtains or blinds, and we felt exposed.",
            "Charming place. The vintage charm and character of the place were delightful.",
            "Unreliable Wi-Fi. The internet connection was slow and frequently disconnected.",
            "Feels like home. The cozy ambiance made us feel comfortable right away.",
            "Not as described. The amenities mentioned in the listing were not available.",
            "Super clean. The place was spotless and well-maintained. Highly impressed",
            "Awesome experience. We had a blast exploring the city and coming home to relax.",
            "Good communication. The host was responsive and answered all our questions.",
            "Inconsistent hot water. The water temperature fluctuated during showers.",
            "Inadequate heating. The heating system was insufficient for the cold weather.",
            "Very comfortable. The bed was so cozy, and we slept like babies.",
            "Super clean. The place was spotless and well-maintained.",
            "They took such great care of us here, the kids had a blast.",
            "The themed pool was incredible. Great place to stay if visiting the Disney parks.",
            "Charming place. The vintage charm and character of the place were delightful.",
            "The perfect spot for a vineyard getaway.",
            "Very comfortable. The bed was so cozy, and we slept like babies.",
            "Convenient location but the bungalow is smaller than it looks in the pictures.",
            "Great amenities and super close to the beach.",
            "Inconsistent hot water. The water temperature fluctuated during showers.",
            "Highly recommend. Our stay was fantastic, and the host was extremely helpful.",
            "Cozy and warm. The fireplace kept us warm during the chilly evenings.",
            "Beautiful home. The interior design and decor were stylish and inviting.",
            "Amazing view! We couldn't get enough of the breathtaking scenery.",
            "Fantastic host. They made sure we had everything we needed for a perfect stay.",
            "Outdated furnishings. The furniture and decor looked worn and outdated.",
            "Super clean. The place was spotless and well-maintained. Very impressed.",
            "Easy check-in. The process was smooth, and the instructions were clear.",
            "Disappointing stay. The place did not live up to the expectations from the listing.",
            "Perfect getaway. A peaceful retreat with all the amenities we needed.",
            "Good communication. The host was responsive.",
            "Lovely decor. Every corner of the place had a personal touch and felt cozy.",
            "Nice and cozy. We enjoyed our time here!"
          ],
        },
      },
      {}
    );
  },
};
