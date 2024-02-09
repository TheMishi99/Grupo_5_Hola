const { readFileSync } = require("fs");
const { join } = require("path");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

/* YA NO SE USARA */
// const userModel = require("../models/user-model");

/* IMPLEMENTANDO BASE DE DATOS */
const db = require("../database/models")
/* ************************* */

const usersController = {
  register: (req, res) => {
    res.render("./users/register", { userLogged: req.session.isLogged });
  },
  createRegister: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      res.render("./users/register", {
        errors: resultValidation.mapped(),
        old: req.body,
        userLogged: req.session.isLogged,
      });
    } else {
      const {
        name,
        email,
        password,
        confirmpassword,
        phonenumber,
        province,
        adress,
        profilePicture,
        termycond,
        politicPriv,
      } = req.body;
      db.Usuarios.create({
        name: name,
        email: email,
        password: bcryptjs.hashSync(password, 10),
        phoneNumber: phonenumber,
        province:province,
        adress: adress,
        profilePicture: req.file.filename,
        authLevel: 2,
        active: 1
      })
      // const nuevoRegistro = {
      //   id: userModel.generateId(),
      //   name: name,
      //   email: email,
      //   password: bcryptjs.hashSync(password, 10),
      //   confirmPassword: bcryptjs.hashSync(confirmpassword, 10),
      //   phoneNumber: phonenumber,
      //   profilePicture: req.file.filename,
      //   termycond: termycond,
      //   politicPriv: politicPriv,
      // };
      // const registrosActuales = JSON.parse(
      //   readFileSync(join(__dirname, "../data", "usersDataBase.json"), "utf-8")
      // );
      // registrosActuales.push(nuevoRegistro);
      // userModel.save(registrosActuales);
      res.redirect("./login");
    }
  },
  login: async (req, res) => {
    /* SI SIGUE VIVA LA COOKIE */
    if(req.cookies.userEmail){
      /* LO BUSCO Y LO LOGUEO AUTOMATICAMENTE */
      const userToLogin = await db.Usuarios.findOne({
        where: {
          email: req.cookies.userEmail
        }
      })
      
      req.session.isLogged = userToLogin; 
      
      /* ACTUALIZO LA COOKIE POR 15 MINUTOS NUEVAMENTE*/
      let email = req.cookies.userEmail;
      res.clearCookie("userEmail");
      res.cookie("userEmail", email, { maxAge: 900000*4 });

      return res.redirect("/users/" + userToLogin.id + "/profile")
    }
    return res.render("./users/login", { userLogged: req.session.isLogged });
  },
  loginProcess: async (req, res) => {
    try {
      if (req.session.isLogged === undefined) {
        req.session.isLogged = false;
      }

      const userEmailCookie = req.cookies.userEmail;
      const { email, password, remember } = req.body;

      if (!userEmailCookie) {
        // const userToLogin = await userModel.findByField("email", email);
        const userToLogin = await db.Usuarios.findOne({
          where: {
            email: email
          }
        })
        if (userToLogin && userToLogin.active == 1) {
          const isOkThePassword = bcryptjs.compareSync(
            password,
            userToLogin.password
          );
          if (isOkThePassword) {
            if (remember !== undefined) {
              res.cookie("userEmail", email, { maxAge: 900000*4 });
            }

            req.session.isLogged = userToLogin;
            return res.redirect("/users/" + userToLogin.id + "/profile");
          }else{
            throw new Error("Las credenciales son inválidas.");
          }
        }else{
          throw new Error("El usuario esta bloqueado. Contactate con un administrador");
        }
      } else {
        const userToLogin = await db.Usuarios.findOne({
          where: {
            email: email
          }
        })
        if(userToLogin && userToLogin.active == 1){
          const isOkThePassword = bcryptjs.compareSync(
            password,
            userToLogin.password
          );
          if (isOkThePassword) {
            req.session.isLogged = userToLogin;
            return res.redirect("/users/" + userToLogin.id + "/profile");
          }else{
            throw new Error("Las credenciales son inválidas.");
          }
        }else{
          throw new Error("El usuario esta bloqueado. Contactate con un administrador");
        }
      }

    } catch (error) {
      return res.render("./users/login", {
        errors: {
          email: {
            msg: error.message || "Error en el inicio de sesión.",
          },
        },
        userLogged: req.session.isLogged
      });
    }
  },
  profile: async (req, res) => {
    const id = req.session.isLogged.id;
    const user = await db.Usuarios.findByPk(id)
    return res.render("./users/profile", { user, userLogged: req.session.isLogged });
  },
  edit: async (req, res) => {
    const id = req.params.id;
    const user = await db.Usuarios.findByPk(id)
    res.render("./users/edit", { user, userLogged: req.session.isLogged })
  },
  editProcess: async (req, res) => {
    const user = await db.Usuarios.findByPk(req.params.id)
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      res.render("./users/edit", {
        user,
        errors: resultValidation.mapped(),
        old: req.body,
        userLogged: req.session.isLogged,
      });
    } else {
      const {
        name,
        phonenumber
      } = req.body;
      db.Usuarios.update(
        {
          name: name,
          phoneNumber: phonenumber,
          profilePicture: req.file.filename
        },
        {
          where: {
            id: req.params.id
          }
        }
      )

      return res.redirect("/users/" + user.id + "/profile");
    }
  },
  logout: (req, res) => {
    if(req.params.id == req.session.isLogged.id){
      res.clearCookie("userEmail");
      req.session.destroy();
    }
    return res.redirect("/");
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const user = await db.Usuarios.findByPk(id)
    res.render("./users/delete", { user, userLogged: req.session.isLogged })
  },
  deleteProcess: (req, res) => {
    if(req.params.id == req.session.isLogged.id){
      db.Usuarios.update(
        {
          active: 0
        },
        {
          where: {
            id: req.params.id
          }
        }
      )

      res.clearCookie("userEmail");
      req.session.destroy();
    }
    return res.redirect("/");
  }
};

module.exports = usersController;
