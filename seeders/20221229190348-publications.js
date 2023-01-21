
    'use strict';

    /** @type {import('sequelize-cli').Migration} */
    module.exports = {
      async up (queryInterface, Sequelize) {
          await queryInterface.bulkInsert('Publications', [
            {
              userid: 2,
              title: "Caregiver for children",
              nickname: "Custom Care S.L",
              age: "56",
              text: "Cuidador autónomo se ofrece para cuidar a niños. Poseo experiencia trabajando con niños discapacitados o con movilidad limitada",
              fulljourney: false,
              childrencare: true,
              disablecare: true,
              elderlycare: false,    
            },
            {
              userid: 3,
              title: "Hi I am Anna",
              nickname: "Annacare",
              age: "28",
              text: "Hola me llamo Ana y ofrezco servicios de cuidadora para personas mayores, niños y discapacitados. Soy licenciada en enfermería y educación social.",
              fulljourney: true,
              childrencare: true,
              disablecare: true,
              elderlycare: true,
            },
            {
              userid: 4,
              title: "Need a Caregiver?",
              nickname: "AntoniaCuidadora S.L",
              age: "40",
              text: "Somos una empresa familiar con varios años de experiencia dentro del sector. Ofrecemos siemrpe un cuidado personalizado dependiendo de las necesidades de nuestros pacientes. Años de experiencia nos avalan.",
              fulljourney: true,
              childrencare: false,
              disablecare: true,
              elderlycare: true, 
            },
            {
              userid: 5,
              title: "Lookingforwork",
              nickname: "Aliceteach",
              age: "27",
              text: "Hi! My name is Alice! I am a graduated nurse and now pychology student. I work with any kind of age or problem, so contract me if you want ",
              fulljourney: false,
              childrencare: true,
              disablecare: true,
              elderlycare: true,
            },
            {
              userid: 6,
              title: "We need a caregiver for our Grandfather",
              nickname: "Niko",
              age: "46",
              text: "We are a family from Rusia and we are looking for some person who can take care of our Grandfather while we are out. He doesnt speaks so much english",
              fulljourney: false,
              childrencare: false,
              disablecare: false,
              elderlycare: false,
            },
        ], {});
        
      },

      async down (queryInterface, Sequelize) {
      
        await queryInterface.bulkDelete('Publications', null, {});
        
      }
    };
