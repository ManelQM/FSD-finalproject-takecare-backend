   
   'use strict';
    const bcrypt = require('bcrypt');
    const authConfig = require('../config/auth');
    /** @type {import('sequelize-cli').Migration} */
    module.exports = {
      async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
          name: "Chiquito",
          email: "jarenauer@gmail.com",
          password:"fistro",
          idrole: 1,
          },
          {
          name:"Russell",
          email: "principiamathematica@gmail.com",
          password: bcrypt.hashSync("logicalatomism", Number.parseInt(authConfig.rounds)),
          idrole: 2,
          },
          {
          name: "Putin",
          email: "dontpressthebutton@gmail.com",
          password:  bcrypt.hashSync("holydaysinsiberia", Number.parseInt(authConfig.rounds)),
          idrole: 2,
          },
          {
          name: "Schopenhauer",
          email: "worldofwill@gmail.com",
          password:  bcrypt.hashSync("mahabharata", Number.parseInt(authConfig.rounds)),
          idrole: 2
          }, 
          {
          name: "Freud",
          email: "pulsions@gmail.com",
          password: bcrypt.hashSync("dreamsarereal", Number.parseInt(authConfig.rounds)),
          idrole: 2,
          },
          {
          name: "Mrajoy",
          email: "aguantaluis@gmail.com",
          password:  bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
          idrole: 2,
          },
          {
          name: "Newton",
          email: "atoms@gmail.com",
          password:  bcrypt.hashSync("apple", Number.parseInt(authConfig.rounds)),
          idrole: 2,
          },
          {
          name: "Dostoyevsky",
          email: "crimeandpunishment@gmail.com",
          password: bcrypt.hashSync("brainfever", Number.parseInt(authConfig.rounds)),
          idrole: 2,
          }
          ], {});
        
      },
      

      async down (queryInterface, Sequelize) {
      
        await queryInterface.bulkDelete('Users', null, {});
      }
    };
