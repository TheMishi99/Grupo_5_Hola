const db = require("../../database/models");
const controller = {
  list: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const offset = (page - 1) * pageSize;
    const usersList = await db.Usuarios.findAll({
        offset: offset,
        limit: pageSize
    });
    const totalCount = await db.Usuarios.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    const nextPage = page < totalPages ? `http://localhost:5000/api/users?page=${page + 1}&pageSize=${pageSize}` : null;
    const prevPage = page > 1 ? `http://localhost:5000/api/users?page=${page - 1}&pageSize=${pageSize}` : null;

    const response = {
      count: usersList.length,
      totalPages: totalPages,
      currentPage: page,
      nextPage: nextPage,
      prevPage: prevPage,
      users: usersList.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          detail: `http://localhost:5000/api/users/${user.id}`,
        };
      }),
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
