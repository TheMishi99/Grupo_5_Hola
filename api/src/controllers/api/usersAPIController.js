const db = require("../../database/models");
const controller = {
  list: async (req, res) => {
    const usersList = await db.Usuarios.findAll({});
    
    const response = {
      count: usersList.length,
      users: usersList.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          detail: `http://localhost:5000/api/users/${user.id}`,
        };
      }),
      /* AQUI PUEDES AÑADIR LAS URLS DE PAGINADO OPCIONALES */
    };
    return res.send(response);
  },
  detail: async (req, res) => {
    const users = await db.Usuarios.findByPk(req.params.id, {
    });
    const {
      id,
      name,
      email,
      province,
      profilePicture,
    } = users;
    const response = {
      id,
      name,
      email,
      province,
      profilePicture: `http://localhost:5000/img/Users/${profilePicture}`,
    };
    return res.send(response);
  },
};

module.exports = controller;
