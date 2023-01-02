    'use strict';

    /** @type {import('sequelize-cli').Migration} */
    module.exports = {
      async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Roles', [{
          id_role: 1,
        rolename: "admin"
        },
      {
        id_role: 2,
        rolename: "user"
      }], {});
      },

      async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
      }
    };
