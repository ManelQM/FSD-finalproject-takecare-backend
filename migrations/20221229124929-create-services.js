'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      publication_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Publications',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      Typeofservice: {
        allowNull:false,
        type: Sequelize.STRING
      },
      salary: {
        allowNull:false,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Services');
  }
};