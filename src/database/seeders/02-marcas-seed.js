"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "brands",
      [
        {
          idBrand: 1,
          name: "Purina Pro Plan",
          description:
            "Desarrollado por científicos, veterinarios y nutricionistas, PRO PLAN® te trae el poder de la nutrición para la salud y el bienestar de tu mascota.",
        },
        {
          idBrand: 2,
          name: "Mishis",
          description:
            "En Mishis, fusionamos calidad y precio para ofrecerte soluciones excepcionales que superan tus expectativas.",
        },
        {
          idBrand: 3,
          name: "Tidy Cats",
          description:
            "TIDY CATS® es un mineral 100% natural de alta calidad. Cuenta con un proceso de triple secado que las hace super absorbentes y asegura un mayor control de olores. Posee un pH neutro que facilita la adaptación de tu gato.",
        },
        {
          idBrand: 4,
          name: "Bravecto",
          description:
            "Con Bravecto, la indicación y el control del tratamiento contra pulgas y garrapatas vuelve a estar en manos del profesional veterinario.",
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("brands", null, {});
  },
};
