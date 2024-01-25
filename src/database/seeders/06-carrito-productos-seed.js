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
          product_id: 1,
          paymentMethod: "Credit Card",
          total: 500,
          yesDelivery: true,
        },
        {
          id: 2,
          user_id: 4,
          product_id: 2,
          paymentMethod: "Credit Card",
          total: 500,
          yesDelivery: true,
        },
        {
          id: 3,
          user_id: 4,
          product_id: 3,
          paymentMethod: "Credit Card",
          total: 500,
          yesDelivery: true,
        },
        {
          id: 4,
          user_id: 4,
          product_id: 4,
          paymentMethod: "Credit Card",
          total: 500,
          yesDelivery: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_cart", null, {});
  },
};
