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
          code: 481218,
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
        {
          id: 5,
          code: 481219,
          img: "https://http2.mlstatic.com/D_NQ_NP_2X_747770-MLA53990523773_022023-F.webp",
          name: "Alimento Cat Chow Defense Plus Multiproteína para gato adulto sabor carne en bolsa de 8 kg.",
          stock:20,
          description:
            "Este alimento seco de Purina está especialmente formulado para satisfacer las necesidades de tu mascota en su etapa adulta, proporcionando una dieta equilibrada y deliciosa.",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 29551,
          category_id: 1,
          discount_id: 2,
          brand_id:7
        },
        {
          id: 6,
          code: 481220,
          img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTUf19x0bapHuktV9CMyTN5YYqwIvH31GOmw4qGAqUzBsGyezhNgtZGAGfkj-F8S85lV1Z8ePFQMIdmhwwaROWF3U4Dmid7C-hFtQ6ffOuZoSRMOcryeix6fwtT",
          name: "Cat Chow 8 Kg. Pescado Y Pollo Gato Adulto.",
          stock:20,
          description:
            "La dieta de tu gato se refleja en su pelaje, por eso es de vital importancia que contenga todos los nutrientes necesarios para su crecimiento. Asegurá la energía y vitalidad de tu amigo para que pueda correr, saltar y jugar todo el día.Proteína para una nutrición completa Alimento rico en proteína animal de alto valor biológico, contiene minerales como calcio, fósforo, potasio y hierro, vitaminas A, D y E, fibras y ácidos grasos esenciales.",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 27909,
          category_id: 1,
          discount_id: 2,
          brand_id:7
        },
        {
          id: 7,
          code: 481221,
          img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQxv_DrnvjI81Doo-wVKfXU2EvezoQIJEoW7lDnbPCuX9tNzAfYjjS7DfEbiV2UE_4SdL_U6jKBlxjnMcuLyd429fNlxBLhKHhnmIiCbvsLuS2VmdAUFLP-&usqp=CAE",
          name: "Gati Salmon Y Pollo 1 Kg.",
          stock:20,
          description:
            "snacks para gatos.",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 790,
          category_id: 1,
          discount_id: 1,
          brand_id:1
        },
        {
          id: 8,
          code: 481222,
          img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTFunKvv4z53AuqObjBGDttaufm3OWugXrbfcZUZkk9s5HdLd1mfjCnm8PjgTFja6wabWLzC4O63IrlBGesDf01m_7fPHV5pqN2In-hRLDxmHYtnNN9JG3-9w&usqp=CAE",
          name: "Whiskas® Adulto sabor Carne es alimento seco 100%",
          stock:20,
          description:
            "Completo y balanceado, desarrollado especialmente para gatos adultos mayores a 1 año de edad. Con múltiples fibras que ayudan al funcionamiento gastrointestinal, contribuyendo al bienestar de tu gato. - Con Omega 6 y Zinc que ayudan a tener pelo saludable para tu mascota..",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 26603,
          category_id: 1,
          discount_id: 2,
          brand_id:6
        },
        {
          id: 9,
          code: 481223,
          img: "https://traviesospetshop.com.ar/wp-content/uploads/2023/05/hair-and-skin-para-pagina-web.png",
          name: "Royal Canin Gato Hair & Skin Care 2kg",
          stock:20,
          description:
            "proteína seleccionada por su alta asimilación. Vitaminas: Colina, vitamina E, vitamina C, niacina, pantotenato de calcio, biotina, vitamina B6, vitamina B2, vitamina B1, vitamina A, ácido fólico, vitamina B12, vitamina D3. Sales minerales: Sulfato de calcio, cloruro de potasio, cloruro de sodio. Oligoelementos: Sulfato de hierro, óxido de zinc, óxido de manganeso, sulfato de cobre, iodato de calcio, selenio orgánico. Oligoelementos quelados: Zinc, manganeso, cobre. Conservantes y antioxidantes: BHA, galato de propilo y ácido cítrico.",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 23020,
          category_id: 1,
          discount_id: 3,
          brand_id:5
        },
        {
          id: 10,
          code: 481224,
          img: "https://static-shop.vivapets.com/media/catalog/product/cache/11fc96e7318a291175a0004e054be56e/p/a/packshot_55.png",
          name: "Royal Canin Sterilised 37",
          stock:20,
          description:
            "Royal Canin esterilizado 37 está indicado para gatos adultos esterilizados.",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 29900,
          category_id: 1,
          discount_id: 3,
          brand_id:5
        },
        {
          id: 11,
          code: 481225,
          img: "https://http2.mlstatic.com/D_NQ_NP_2X_720243-MLA49698574053_042022-F.webp",
          name: "Torre, Rascador, Gimnasio Para Gato",
          stock:20,
          description: "Construido en madera MDF de 9 y 12 mm bajo los procesos de encolado y presión, tubos de 10cm de diámetro y 8mm de espesor, garantizan una confiabilidad, robustez, durabilidad y calidad que nos caracterizan. Tapizados en alfombra de bucle punzonada de alto transito, Hilo Yute de 6mm 4 hilos, Peluche importado, pegado y fijado con ganchos P8",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 25000,
          category_id: 2,
          discount_id: 1,
          brand_id:2
        },
        {
          id: 12,
          code: 481226,
          img: "https://http2.mlstatic.com/D_NQ_NP_2X_918114-MLA73094421854_112023-F.webp",
          name: "Rascador Esquinero De Sillon - Para Gatos",
          stock:20,
          description:
            "ESQUINERO tiene una medida de 55cm de alto por 15cm por lado. Se coloca debajo de la pata del sillón",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 6900,
          category_id: 2,
          discount_id: 1,
          brand_id:2
        },
        {
          id: 13,
          code: 481227,
          img: "https://http2.mlstatic.com/D_NQ_NP_627462-MLA51219952025_082022-O.webp",
          name: "Camita + Rascador Para Gatos",
          stock:20,
          description:
            "El uso del rascador en los gatitos es indispensable, afilan sus uñas, liberan su estrés y marcan territorio. ¡Evitemos que lo haga en los sillones!",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 79900,
          category_id: 2,
          discount_id: 3,
          brand_id:2
        },
        {
          id: 14,
          code: 481227,
          img: "https://traviesospetshop.com.ar/wp-content/uploads/2019/12/collar-tea-gato.png",
          name: "Collar Antipulgas Tea 327 Gatos",
          stock:20,
          description:
            "Collar pulguicida y piojicida de 5 meses de duración.",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 8400,
          category_id: 3,
          discount_id: 1,
          brand_id:2
        },
        {
          id: 15,
          code: 481228,
          img: "https://http2.mlstatic.com/D_NQ_NP_2X_882981-MLA47572357922_092021-F.webp",
          name: "Collar Localizador Brilla En La Oscuridad",
          stock:20,
          description:
            "El collar emite una luz visible color verde flúor después de energizarse absorbiendo la luz durante un tiempo antes de brillar en la oscuridad.",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 79900,
          category_id: 2,
          discount_id: 2,
          brand_id:2
        },
        {
          id: 16,
          code: 481229,
          img: "https://acdn.mitiendanube.com/stores/197/359/products/conjunto-arnes-con-correa-para-gato-11-2ab81d325512698c5d16939249071956-1024-1024.webp",
          name: "Conjunto arnés con correa para gato",
          stock:20,
          description:
            "Diseñados teniendo en cuenta la seguridad y la comodidad de tu mascota.",
          elaborationDate: "2024-01-19",
          expirationDate: "2028-01-19",
          price: 4900,
          category_id: 2,
          discount_id: 2,
          brand_id:2
        }
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
