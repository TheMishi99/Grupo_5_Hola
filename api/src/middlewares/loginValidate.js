const User = require("../models/user-model");

const isLogged = async (req, res, next) => {
  let userToLogin;
  if(req.session.isLogged){
    userToLogin = await User.findByField("email", req.session.isLogged.email);
    if (userToLogin) {
      return res.redirect(`/users/${userToLogin.id}/profile`);
    }
  }

  next();
};

module.exports = isLogged;
