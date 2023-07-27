"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      {
        firstName: "John",
        lastName: "Smith",
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        email: 'user1@user.io',
        username: 'Jane2',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        firstName: "Michael",
        lastName: "Miller",
        email: 'user2@user.io',
        username: 'Michael3',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        firstName: "Sarah",
        lastName: "Johson",
        email: 'user3@user.io',
        username: 'Sarah4',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        firstName: "Emily",
        lastName: "Smith",
        email: "emily.smith@example.com",
        username: "Emily5",
        hashedPassword: bcrypt.hashSync("myp@ssw0rd"),
      },
      {
        firstName: "David",
        lastName: "Brown",
        email: "david.brown@example.com",
        username: "David6",
        hashedPassword: bcrypt.hashSync("securepwd"),
      },
      {
        firstName: "Emma",
        lastName: "Taylor",
        email: "emma.taylor@example.com",
        username: "Emma7",
        hashedPassword: bcrypt.hashSync("123456789"),
      },
      {
        firstName: "Olivia",
        lastName: "Anderson",
        email: "olivia.anderson@example.com",
        username: "Olivia8",
        hashedPassword: bcrypt.hashSync("pass123"),
      },
      {
        firstName: "William",
        lastName: "Lee",
        email: "william.lee@example.com",
        username: "William9",
        hashedPassword: bcrypt.hashSync("securepassword"),
      },
      {
        firstName: "James",
        lastName: "Wilson",
        email: "james.wilson@example.com",
        username: "James10",
        hashedPassword: bcrypt.hashSync("hello123"),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'Jane2', 'Michael3', 'Sarah4', 'Emily5', 'David6', 'Emma7', 'Olivia8', 'William9', 'James10'] }
    }, {});
  }
};
