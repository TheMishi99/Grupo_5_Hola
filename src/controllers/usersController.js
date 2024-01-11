const { readFileSync } = require("fs");
const { join } = require("path");
const { validationResult } = require("express-validator")
const bcryptjs = require('bcryptjs')
const userModel = require("../models/user-model");

const usersController = {
  register: (req, res) => {
    res.render("./users/register");
  },
  createRegister: (req, res) => {
    const resultValidation = validationResult(req);
    if(resultValidation.errors.length > 0){
      res.render("./users/register",{
          errors: resultValidation.mapped(),
          old: req.body
      })
    }else{
      const { name, email, password, confirmpassword, phonenumber, profilePicture, termycond, politicPriv} =
        req.body;
      const nuevoRegistro = {
        id: userModel.generateId(),
        name: name,
        email: email,
        password: bcryptjs.hashSync(password,10),
        confirmPassword: bcryptjs.hashSync(confirmpassword,10),
        phoneNumber: phonenumber,
        profilePicture: req.file.filename,
        termycond: termycond,
        politicPriv: politicPriv  
      };
      const registrosActuales = JSON.parse(
        readFileSync(join(__dirname, "../data", "usersDataBase.json"), "utf-8")
      );
      registrosActuales.push(nuevoRegistro);
      userModel.save(registrosActuales);
      res.redirect("./login");
    }   
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  loginProcess: (req, res) => {
    let userToLogin = userModel.findByField("email", req.body.email)
    if (userToLogin){
      let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
      if (isOkThePassword){

        if(req.body.remember){
          res.cookie('userEmail', req.body.email, {MaxAge: (1000 * 60) * 60})
        }
        return res.render('./users/profile', { user: userToLogin });
      }
    }

    return res.render('./users/login', {
      errors: {
        email: {
          msg: 'Las credenciales son inválidas.'
        }
      }
    })
  },
  profile: (req, res) => {
    const id = req.params.id;
    const user = userModel.findOne(id);
    res.render("./users/profile", { user });
  },

  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
  } 
};

module.exports = usersController