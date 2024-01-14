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
          confirmPassword:
            "$2a$10$HMl3rCkYAOWnN5lrdfCWUuRSeD015u7D3E.jCsuHvocfylSLAZcHK",
          phoneNumber: "+5493856182988",
          profilePicture:
            "user-1704916916773-320161635_1199762810748263_7301277919038224907_n.jpg",
        },
        {
          id: 2,
          name: "Rocio Chochi Diaz",
          email: "Katrhina_ro@hotmail.com",
          password:
            "$2a$10$0cgZgcRY6O4riqy96WDYkeS.2bjcPC1BtDrc2ACb8NtrUwS.apwgC",
          confirmPassword:
            "$2a$10$WhI.57IvGv6pBXMej82y2.zga3L5EGApByMdAkuGjNv.Cxe42qjeK",
          phoneNumber: "3854132687",
          profilePicture: "user-1704939334545-IMG-20231021-WA0090.jpg",
        },
        {
          id: 3,
          name: "Luciana",
          email: "mlfluli@gmail.com",
          password:
            "$2a$10$0PRHECR9RwxzzmfDofKN1.LVZIwDo/j/KY8xhtIgNE.BD0iyCJ99i",
          confirmPassword:
            "$2a$10$GTtLXJ8mQHWkdadLkRJ8NeRMcn/wxKmxp/51kXbR9L4HzPsi9ar.a",
          phoneNumber: "1234",
          profilePicture:
            "user-1704940551245-mujer-bonita-joven-alegre-mirando-al-frente-sonriendo-aislado-pared-verde-oliva.jpg",
        },
        {
          id: 4,
          name: "Matias Demian Sayago",
          email: "matiasgd99@gmail.com",
          password:
            "$2a$10$Ypo0pC20UY6YDFuc9urYa.AskC2P4zVR.3aFwpn5SC/ModV9NMPi.",
          confirmPassword:
            "$2a$10$q69naBDVNzx1g3bFkD3rBOzbUj9x2aVVSfsZf0JpJnjnG0MVOVylm",
          phoneNumber: "+5438561231231",
          profilePicture:
            "user-1705075228342-abstract-art-design-smoke-wallpaper-thumb.jpg",
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
