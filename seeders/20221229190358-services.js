
    'use strict';

    /** @type {import('sequelize-cli').Migration} */
    module.exports = {
      async up (queryInterface, Sequelize) {
          await queryInterface.bulkInsert('Services', [
            {
             publication_id: 1,
             title: "Children Care",
             nickname: "Custom Care S.L",
             text: "Cuidador por horas para niños con movilidad limitada",
             salary: "10€/h",
             typeofservice: "Reduced mobility", 
            },
            {
              publication_id: 1,
              title: "Children Care",
              nickname: "Custom Care S.L",
              text: "Cuidador por horas para niños con discapacidad",
              salary: "10€/h",
              typeofservice: "Discapacity", 
             },
             {
              publication_id: 1,
              title: "Children Care",
              nickname: "Custom Care S.L",
              text: "Cuidador por horas para niños con discapacidad y con movilidad limitada",
              salary: "15€/h",
              typeofservice: "Discapacity + Reduce mobility", 
             },
             {
              publication_id: 2,
              title: "Elderly Care",
              nickname: "Annacare",
              text: "Description of the service text",
              salary: "12€/h max two hours",
              typeofservice: "Elderly Care", 
             },
             {
              publication_id: 2,
              title: "Elderly Care FullJourney Service",
              nickname: "Annacare",
              text: "Description of the service text",
              salary: "80€ each day",
              typeofservice: "Elderly Care", 
             },
             {
              publication_id: 4,
              title: "Alice Services",
              nickname: "Aliceteach",
              text: "Description of the service text",
              salary: "8€/h",
              typeofservice: "Psicopedagogía", 
             },
             {
              publication_id: 4,
              title: "Alice Services",
              nickname: "Aliceteach",
              text: "Description of the service text",
              salary: "12€/h",
              typeofservice: "Elderly Care", 
             },
        ], {});
      },

      async down (queryInterface, Sequelize) {
    
        await queryInterface.bulkDelete('Services', null, {});
        
      }
    };
