const { readFileSync } = require("fs");
const { join } = require("path");
const { save } = require("../models/user-model");


const usersController = {
  register: (req, res) => {
    res.render("./users/register");
  },
  createRegister: (req, res) => {
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
  },
  login: (req, res) => {
    res.render("./users/login");
  }
};

module.exports = usersController