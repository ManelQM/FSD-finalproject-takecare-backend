"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Contracts",
      [
        {
          userid: 6,
          publicationid: 3,
          title: "Need a Caregiver?",
          nickname: "Niko",
        },
        {
          userid: 6,
          publicationid: 1,
          title: "Caregiver for children",
          nickname: "Custom Care S.L",
        },
        {
          userid: 6,
          publicationid: 4,
          title: "LookingforWork",
          nickname: "Alice",
        },
        {
          userid: 6,
          publicationid: 3,
          title: "We need a caregiver for our Grandfather",
          nickname: "Niko",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contracts", null, {});
  },
};
