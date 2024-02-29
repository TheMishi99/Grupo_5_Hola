async function adminVerifyMiddleware(req, res, next) {
  if (!req.session.isLogged) {
    return res.redirect(`/users/login`);
  }
  const userLogged = req.session.isLogged;

  if (userLogged.authLevel != 1) {
    res.render("./error/error.ejs", {
      status: 401,
      message: "Usuario no autorizado",
      userLogged: userLogged,
    });
  }

  next();
}

module.exports = adminVerifyMiddleware;
