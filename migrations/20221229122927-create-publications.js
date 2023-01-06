
    'use strict';
    /** @type {import('sequelize-cli').Migration} */
    module.exports = {
      async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Publications', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Users',
              key: 'id'
            }
          },
          title: {
            type: Sequelize.STRING
          },
          nickname: {
            type: Sequelize.STRING
          },
          age: {
            type: Sequelize.INTEGER
          },
          text: {
            type: Sequelize.STRING
          },
          fulljourney: {
            type: Sequelize.BOOLEAN
          },
          childrencare: {
            type: Sequelize.BOOLEAN
          },
          disablecare: {
            type: Sequelize.BOOLEAN
          },
          elderlycare: {
            type: Sequelize.BOOLEAN
          },
        });
      },
      async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Publications');
      }
    };