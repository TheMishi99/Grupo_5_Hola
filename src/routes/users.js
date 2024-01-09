const express = require("express")
const router = express.Router()
const usersController = require("../controllers/usersController")

/* IMPORTACION MIDDLEWARES */
const { upload } = require("../middlewares/multerUsers");
const registerValidate = require("../middlewares/registerValidate")

/*FORMULARIO DE LOGIN*/
router.get("/login", usersController.login)

/* FORMULARIO Y ACCION DE CREACION DE USUARIO */
router.get("/register", usersController.register)
router.post("/", upload.single("profilePicture"), registerValidate, usersController.createRegister)

module.exports = router