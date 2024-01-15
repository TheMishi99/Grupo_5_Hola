"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_cart",
      [
        {
          id: 1,
          user_id: 4,
          product_id: 7,
        },
        {
          id: 2,
          user_id: 4,
          product_id: 8,
        },
        {
          id: 3,
          user_id: 4,
          product_id: 9,
        },
        {
          id: 4,
          user_id: 4,
          product_id: 10,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_cart", null, {});
  },
};
