
    'use strict';

    /** @type {import('sequelize-cli').Migration} */
    module.exports = {
      async up (queryInterface, Sequelize) {
          await queryInterface.bulkInsert('Services', [
            {
             publication_id: 1,
             title: "Children Care",
             nickname: "Custom Care S.L",
             text: "Cuidador por horas para niños",
            
            }
        ], {});
      },

      async down (queryInterface, Sequelize) {
    
        await queryInterface.bulkDelete('Services', null, {});
        
      }
    };
