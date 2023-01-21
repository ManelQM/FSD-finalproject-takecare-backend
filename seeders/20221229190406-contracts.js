'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     
     await queryInterface.bulkInsert('Contracts', [{
        user_id:6,
        service_id:3,
        title: "Need a Caregiver?",
        nickname:"Niko"
      },
      {
        user_id:6,
        service_id:1,
        title: "Caregiver for children",
        nickname:"Custom Care S.L"
      },
      {
        user_id:3,
        service_id:6,
        title: "Hi, I am Anna",
        nickname:"AnnaCare"
      },
      {
        user_id:6,
        service_id:4,
        title: "LookingforWork",
        nickname:"Alice"
      },
      {
        user_id:6,
        service_id:3,
        title: "We need a caregiver for our Grandfather",
        nickname:"Niko"
      }
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     
     await queryInterface.bulkDelete('Contracts', null, {});
     
  }
};
