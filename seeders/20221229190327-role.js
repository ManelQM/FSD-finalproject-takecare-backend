    'use strict';

    /** @type {import('sequelize-cli').Migration} */
    module.exports = {
      async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Roles', [{
          id_role: "admin",
        },
      {
        id_role: "user",
      }], {});
      },

      async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
      }
    };
