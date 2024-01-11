const User = require('../models/user-model');

const isLogged = async (req, res, next) => {
  //CODIGO PARA VERIFICAR SI ESTÁ LOGUEADO O NO
  //SI NO ESTA LOGUEADO LO MANDAMOS A LOGUEARSE
  let userToLogin = await User.findByField('email', req.cookies.userEmail);
  if(req.session.isLogged == undefined || req.session.isLogged == false){
    req.session.isLogged = false
  } else{
    return res.render("./users/profile",{user: userToLogin})
  }
  next();
};

module.exports = isLogged;
