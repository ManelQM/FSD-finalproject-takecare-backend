"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Publications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userid: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      title: {
        type: Sequelize.STRING,
      },
      nickname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      text: {
        type: Sequelize.STRING,
      },
      // fulljourney: {
      //   type: Sequelize.BOOLEAN
      // },
      // childrencare: {
      //   type: Sequelize.BOOLEAN
      // },
      // disablecare: {
      //   type: Sequelize.BOOLEAN
      // },
      // elderlycare: {
      //   type: Sequelize.BOOLEAN
      // },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Publications");
  },
};
