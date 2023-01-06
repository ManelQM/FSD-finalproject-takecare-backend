
    'use strict';

    /** @type {import('sequelize-cli').Migration} */
    module.exports = {
      async up (queryInterface, Sequelize) {
          await queryInterface.bulkInsert('Publications', [
            {
              
            }

            
            
        ], {});
        
      },

      async down (queryInterface, Sequelize) {
      
        await queryInterface.bulkDelete('Publications', null, {});
        
      }
    };
