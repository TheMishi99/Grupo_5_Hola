"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          idCategory: 1,
          name: "Alimentos",
          description: "Se encuentran desde alimentos secos, húmedos y snacks.",
        },
        {
          idCategory: 2,
          name: "Accesorios",
          description:
            "Se encuentran desde comederos, bebederos, collares, transportadoras, juguetes, rascadores y camas.",
        },
        {
          idCategory: 3,
          name: "Estética e Higiene",
          description:
            "Se encuentran desde cepillos, guantes, palitas, piedras, arena, shampoos y acondicionadores.",
        },
        {
          idCategory: 4,
          name: "Salud",
          description:
            "Se encuentran desde antipulgas, antigarrapatas, complementos, suplementos y antiparasitarios.",
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
