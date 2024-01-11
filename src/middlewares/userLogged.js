const User = require('../models/user-model');

async function userloggedMiddleware(req, res, next) {
    let userToLogin = await User.findByField("email", req.cookies.userEmail);

    if (userToLogin) {
      req.session.isLogged = userToLogin;
    }
  
    if (!req.session.isLogged) {
      req.session.isLogged = false;
    }
  
    next();
}

module.exports = userloggedMiddleware;