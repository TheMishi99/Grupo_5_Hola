const { readFileSync } = require("fs");
const { join } = require("path");
const { save } = require("../models/user-model");
const { validationResult } = require("express-validator")


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
        id: Math.floor(Math.random() * 100),
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmpassword,
        phoneNumber: phonenumber,
        profilePicture: req.file.filename,
        termycond: termycond,
        politicPriv: politicPriv  
      };
      const registrosActuales = JSON.parse(
        readFileSync(join(__dirname, "../data", "usersDataBase.json"), "utf-8")
      );
      registrosActuales.push(nuevoRegistro);
      save(registrosActuales);
      res.redirect("./login");
    }   
  },
  login: (req, res) => {
    res.render("./users/login");
  }
};

module.exports = usersController