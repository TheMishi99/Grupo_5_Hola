"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "discounts",
      [
        {
          id: 1,
          quantity: 0,
          description: "Sin descuento",
        },
        {
          id: 2,
          quantity: 10,
          description: "Descuento del 10%",
        },
        {
          id: 3,
          quantity: 20,
          description: "Descuento del 20%",
        },
        {
          id: 4,
          quantity: 30,
          description: "Descuento del 30%",
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("discounts", null, {});
  },
};
