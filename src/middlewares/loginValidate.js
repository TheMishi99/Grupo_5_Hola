const User = require("../models/user-model");

const isLogged = async (req, res, next) => {

  let userToLogin = await User.findByField("email", req.cookies.userEmail);

  if (userToLogin) {
    req.session.isLogged = userToLogin;
  }

  if (!req.session.isLogged) {
    req.session.isLogged = false;
  } else {
    return res.redirect(`/users/${userToLogin.id}/profile`);
  }

  next();
};

module.exports = isLogged;
