const User = require("../models/user-model");

async function userLoggedMiddleware(req, res, next) {
  if(!req.session.isLogged){
    return res.redirect(`/users/login`);
  }

  next();
}

module.exports = userLoggedMiddleware;