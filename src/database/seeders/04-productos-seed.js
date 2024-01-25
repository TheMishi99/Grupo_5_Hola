"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          code: 146027,
          img: "https://puppis.vteximg.com.br/arquivos/ids/179653-1000-1000/7613039900277_1.png?v=637570859825470000",
          name: "Alimento Pro Plan para Gato Adulto Pollo Y Arroz - 3 Kg",
          stock:10,
          description:
            "Alimento completo y balanceado para gatos adultos de todas las razas. Es una tecnología exclusiva, con una combinación de prebióticos y antioxidantes naturales, que ayudan a optimizar la digestión y a mantener fuertes las defensas naturales de tu gato, protegiendo su sistema inmunológico contra las amenazas externas.",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 24399.99,
          category_id: 1,
          discount_id: 1,
          brand_id:1
        },
        {
          id: 2,
          code: 269342,
          img: "https://puppis.vteximg.com.br/arquivos/ids/189226-1000-1000/269341.jpg?v=637979986924130000",
          name: "Comedero Mishis Acero Inoxidable - 1.45 L",
          stock:5,
          description:
            "El Comedero Puppis Acero Inoxidable, incluye una base antideslizante para que tu mascota se alimente mejor sin que el comedero se mueva de su lugar.",
          elaborationDate: "2024-01-19",
          expirationDate: "2034-01-19",
          price: 8239.99,
          category_id: 2,
          discount_id: 2,
          brand_id:2
        },
        {
          id: 3,
          code: 251317,
          img: "https://puppis.vteximg.com.br/arquivos/ids/193916-1000-1000/251317.jpg?v=638252803183530000",
          name: "Piedras Sanitarias Tidy Cats",
          stock:15,
          description:
            "Las Piedras Sanitarias Tidy Cats son ideales para mantener la comodidad e higiene de tu gato en todo momento y por tiempo prolongado.",
          elaborationDate: "2024-01-19",
          expirationDate: "2030-01-19",
          price: 3990,
          category_id: 3,
          discount_id: 3,
          brand_id:3
        },
        {
          id: 4,
          code: 481219,
          img: "https://static.wixstatic.com/media/fd8c39_8c9117355d124484b6f08c82bbdda6c1~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fd8c39_8c9117355d124484b6f08c82bbdda6c1~mv2.jpg",
          name: "Bravecto Gato 2,8 A 6,25 Kg', 'Librarse de las pulgas de tu gato puede parecer sencillo, pero eliminarlas de tu casa puede llevar varios meses.",
          stock:20,
          description:
            "Las Piedras Sanitarias Tidy Cats son ideales para mantener la comodidad e higiene de tu gato en todo momento y por tiempo prolongado.",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 29900,
          category_id: 4,
          discount_id: 4,
          brand_id:4
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
