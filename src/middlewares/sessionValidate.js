const isLogged = (req, res, next) => {
  //CODIGO PARA VERIFICAR SI ESTÁ LOGUEADO O NO
  //SI NO ESTA LOGUEADO LO MANDAMOS A LOGUEARSE
  //if(si no esta logueado){
  // res.render('./users/login')
  //}
  //CASO POSITIVO CONTINUAMOS CON UN NEXT
  console.log("usuario logueado, entonces continuamos")
  next();
};

module.exports = isLogged;
