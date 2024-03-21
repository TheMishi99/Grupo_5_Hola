const User = require("../models/user-model");

//se  define un middleware llamado isLogged que verifica si un usuario está logueado.

const isLogged = async (req, res, next) => { // funcion que toma tres parámetros: el el objeto solicitud, el objeto respuesta y la función de paso al siguiente middleware).
  let userToLogin;
  if(req.session.isLogged){ // Comprueba si existe una sesión activa.
    userToLogin = await User.findByField("email", req.session.isLogged.email); // Con findByField se busca un usuario en la base de datos de acuerdo al gmail.
    if (userToLogin) {
      return res.redirect(`/users/${userToLogin.id}/profile`); //Si se encuentra el usuario en la base de datos, se redirige al usuario a su perfil.
    }
  }
  next();
};

module.exports = isLogged;
