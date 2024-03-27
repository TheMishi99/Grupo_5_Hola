const db = require("../../database/models");
const controller = {
  list: async (req, res) => {
    let usersList;
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    let totalPages, nextPage, prevPage;

    if (req.query.page && req.query.pageSize) {
      const offset = (page - 1) * pageSize;
      usersList = await db.Usuarios.findAll({
        offset: offset,
        limit: pageSize,
      });
      const totalCount = await db.Usuarios.count();
      totalPages = Math.ceil(totalCount / pageSize);
      nextPage =
        page < totalPages
          ? `http://localhost:5000/api/users?page=${
              page + 1
            }&pageSize=${pageSize}`
          : null;
      prevPage =
        page > 1
          ? `http://localhost:5000/api/users?page=${
              page - 1
            }&pageSize=${pageSize}`
          : null;
    } else {
      usersList = await db.Usuarios.findAll();
    }

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
    };

    if (nextPage !== undefined) response.nextPage = nextPage;
    if (prevPage !== undefined) response.prevPage = prevPage;
    if (totalPages !== undefined) response.totalPages = totalPages;
    if (page !== undefined) response.currentPage = page;

    return res.json(response);
  },
  detail: async (req, res) => {
    const users = await db.Usuarios.findByPk(req.params.id, {});
    const { id, name, email, province, profilePicture } = users;
    const response = {
      id,
      name,
      email,
      province,
      profilePicture: `http://localhost:5000/img/Users/${profilePicture}`,
    };
    return res.json(response);
  },
};

module.exports = controller;
