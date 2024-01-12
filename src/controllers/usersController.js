const { readFileSync } = require("fs");
const { join } = require("path");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const userModel = require("../models/user-model");

const usersController = {
  register: (req, res) => {
    res.render("./users/register");
  },
  createRegister: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      res.render("./users/register", {
        errors: resultValidation.mapped(),
        old: req.body,
      });
    } else {
      const {
        name,
        email,
        password,
        confirmpassword,
        phonenumber,
        profilePicture,
        termycond,
        politicPriv,
      } = req.body;
      const nuevoRegistro = {
        id: userModel.generateId(),
        name: name,
        email: email,
        password: bcryptjs.hashSync(password, 10),
        confirmPassword: bcryptjs.hashSync(confirmpassword, 10),
        phoneNumber: phonenumber,
        profilePicture: req.file.filename,
        termycond: termycond,
        politicPriv: politicPriv,
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
  loginProcess: async (req, res) => {
    try {
      if (req.session.isLogged === undefined) {
        req.session.isLogged = false;
      }

      const userEmailCookie = req.cookies.userEmail;
      const { email, password, remember } = req.body;

      if (!userEmailCookie) {
        const userToLogin = await userModel.findByField("email", email);

        if (userToLogin) {
          const isOkThePassword = bcryptjs.compareSync(
            password,
            userToLogin.password
          );
          if (isOkThePassword) {
            if (remember !== undefined) {
              res.cookie("userEmail", email, { maxAge: 900000 });
            }

            req.session.isLogged = userToLogin;
            return res.render("./users/profile", { user: userToLogin });
          }
        }
        throw new Error("Las credenciales son inválidas.");
      } else {
        const userToLogin = await userModel.findByField(
          "email",
          userEmailCookie
        );
        return res.render("./users/profile", { user: userToLogin });
      }
    } catch (error) {
      return res.render("./users/login", {
        errors: {
          email: {
            msg: error.message || "Error en el inicio de sesión.",
          },
        },
      });
    }
  },
  profile: (req, res) => {
    const id = req.params.id;
    const user = userModel.findOne(id);
    res.render("./users/profile", { user });
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = usersController;
