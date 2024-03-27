"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "joaco",
          email: "joaco@gmail.com",
          password:
            "$2a$10$yHzqKtFBAgdyT6gf.e0FOuRoME97hMlAPIJ7h5LqcAi/Ei4IpLdyq",
          phoneNumber: "+5493856182988",
          province: "Santiago del Estero",
          address: "Belgrano 170",
          profilePicture:
            "user-1704916916773-320161635_1199762810748263_7301277919038224907_n.jpg",
          authLevel: 1,
          active: 1,
        },
        {
          id: 2,
          name: "Rocio Chochi Diaz",
          email: "Katrhina_ro@hotmail.com",
          password:
            "$2a$10$0cgZgcRY6O4riqy96WDYkeS.2bjcPC1BtDrc2ACb8NtrUwS.apwgC",
          phoneNumber: "3854132687",
          province: "Buenos Aires",
          address: "Belgrano 170",
          profilePicture: "user-1704939334545-IMG-20231021-WA0090.jpg",
          authLevel: 1,
          active: 1,
        },
        {
          id: 3,
          name: "Luciana",
          email: "mlfluli@gmail.com",
          password:
            "$2a$10$0PRHECR9RwxzzmfDofKN1.LVZIwDo/j/KY8xhtIgNE.BD0iyCJ99i",
          phoneNumber: "1234",
          province: "Cordoba",
          address: "Belgrano 170",
          profilePicture:
            "user-1704940551245-mujer-bonita-joven-alegre-mirando-al-frente-sonriendo-aislado-pared-verde-oliva.jpg",
          authLevel: 1,
          active: 1,
        },
        {
          id: 4,
          name: "Matias Demian Sayago",
          email: "matiasgd99@gmail.com",
          password:
            "$2a$10$Ypo0pC20UY6YDFuc9urYa.AskC2P4zVR.3aFwpn5SC/ModV9NMPi.",
          phoneNumber: "+5438561231231",
          province: "San Luis",
          address: "Belgrano 170",
          profilePicture:
            "user-1705075228342-abstract-art-design-smoke-wallpaper-thumb.jpg",
          authLevel: 1,
          active: 1,
        },
        {
          id: 5,
          name: "Vero Bianchi",
          email: "dvbianchi92@gmail.com",
          password:
            "$2a$10$jHVTxiKSE7678mXdz.lRge20EuC3QosxypRQNaTdMPeoOOWZXXcbi",
          phoneNumber: "2147483647",
          province: "Santiago del Estero",
          address: "Belgrano 170",
          profilePicture:
            "user-1706912938967-4.jpg",
          authLevel: 1,
          active: 1,
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
