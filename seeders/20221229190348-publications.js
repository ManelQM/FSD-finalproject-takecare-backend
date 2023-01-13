
    'use strict';

    /** @type {import('sequelize-cli').Migration} */
    module.exports = {
      async up (queryInterface, Sequelize) {
          await queryInterface.bulkInsert('Publications', [
            {
              
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
              
              title: "Lookingforwork",
              nickname: "Aliceteach",
              age: "27",
              text: "Me llamo Alice, soy psicóloga y estudiante de enfermería. Me ofrezco con contato por horas para sesiones de psicopedagogía para niños. También tengo cierta experiencia en el cuidado de personas con movilidad reducida también con contrato por horas.",
              fulljourney: false,
              childrencare: true,
              disablecare: true,
              elderlycare: true,
            },
            {
              
              title: "Familia busca cuidador/a por horas",
              nickname: "Niko",
              age: "46",
              text: "Me llamo Niko y somos una familia rusa que busca un cuidador por horas para una persona de 81 años.",
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
