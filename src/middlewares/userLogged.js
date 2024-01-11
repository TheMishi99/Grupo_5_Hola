const User = require('../models/user-model');

function userloggedMiddleware(req, res, next) {
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);

    if(userFromCookie){
        req.session.isLogged = userFromCookie;
    }

/*     if(req.session.isLogged){
        res.locals.isLogged = true;
        res.local.userLogged = req.session.isLogged;
    }
 */
    next();
}

module.exports = userloggedMiddleware;