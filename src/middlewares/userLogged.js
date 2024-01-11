const User = require('../models/user-model');

function userloggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.usarEmail;
    let userFromCookie = User.findByField('email', emailInCookie);

    if(userFromCookie){
        req.session.userLogged = userFromCookie;

    }

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.local.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userloggedMiddleware;