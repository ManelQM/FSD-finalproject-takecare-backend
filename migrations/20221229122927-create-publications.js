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
      offeredto: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      fulljourney: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Publications');
  }
};