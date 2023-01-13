   
   'use strict';
    const bcrypt = require('bcrypt');
    const authConfig = require('../config/auth');
    /** @type {import('sequelize-cli').Migration} */
    module.exports = {
      async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
            name: "Manel",
            surname: "Montalbán",
            nickname: "ManelQM",
            email: "admin@fakemail.com",
            password: bcrypt.hashSync("Manel12345", Number.parseInt(authConfig.rounds)),
            age: "38",
            city: "Puerto de Sagunto",
            idrole: "admin",
            avatar: "img",
            caregiver: false,
          },
          {
            name: "Antonio",
            surname: "Sánchez",
            nickname: "Custom Care S.L",
            email: "antonio@fakemail.com",
            password:bcrypt.hashSync("Antonio12345", Number.parseInt(authConfig.rounds)),
            age: "56",
            city: "Bunyol",
            idrole: "user",
            avatar: "img",
            caregiver: true,
          },
          {
            name: "Ana",
            surname: "Suarez",
            nickname: "Annacare", 
            email: "ana@fakemail.com",
            password: bcrypt.hashSync("Ana12345", Number.parseInt(authConfig.rounds)),
            age: "28",
            city: "Valencia",
            idrole: "user",
            avatar: "img",
            caregiver: true,
          },
          {
            name: "Antonia",
            surname: "Martínez", 
            nickname: "AntoniaCuidadora S.L",
            email: "antonia@fakemail.com",
            password: bcrypt.hashSync("Antonia12345", Number.parseInt(authConfig.rounds)),
            age: "40",
            city: "Massanassa",
            idrole: "user",
            avatar: "img",
            caregiver: true,
          }, 
          {
            name: "Alice",
            surname: "Jones",
            nickname: "Aliceteach",
            email: "alice@fakemail.com",
            password: bcrypt.hashSync("Alice12345", Number.parseInt(authConfig.rounds)),
            age: "27",
            city: "Castellón",
            idrole: "user",
            avatar: "img",
            caregiver: true,
          },
          {
            name: "Nikolay",
            surname: "Semiónov",
            nickname: "Niko",
            email: "nikolay@fakemail.com",
            password: bcrypt.hashSync("Nikolay12345", Number.parseInt(authConfig.rounds)),
            age: "46",
            city: "Faura",
            idrole: "user",
            avatar: "img",
            caregiver: false,
          },
          {
            name: "Julia",
            surname: "Smith", 
            nickname: "Jullia",
            email: "julia@fakemail.com",
            password: bcrypt.hashSync("Julia12345", Number.parseInt(authConfig.rounds)),
            age: "51",
            city: "Xàtiva",
            idrole: "user",
            avatar:"img",
            caregiver: false,
          },
          {
            name: "Angel",
            surname: "Corse",
            nickname: "Angelc",
            email: "angel@fakemail.com",
            password: bcrypt.hashSync("Angel12345", Number.parseInt(authConfig.rounds)),
            age: "21",
            city: "Picassent",
            idrole: "user",
            avatar: "img",
            caregiver: true,
          }
          ], {});
        
      },
      
      async down (queryInterface, Sequelize) {
      
        await queryInterface.bulkDelete('Users', null, {});
      }
    };
