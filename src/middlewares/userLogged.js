const User = require("../models/user-model");

async function userLoggedMiddleware(req, res, next) {
  let userToLogin;
  if(req.session.isLogged){
    userToLogin = await User.findByField("email", req.session.isLogged.email);
    if (!userToLogin) {
      return res.redirect(`/users/login`);
    }
  }

  next();
}

module.exports = userLoggedMiddleware;
