const express = require("express")
const router = express.Router()
const usersController = require("../controllers/usersController")

/* IMPORTACION MIDDLEWARES */
const { upload } = require("../middlewares/multerUsers");
const registerValidate = require("../middlewares/registerValidate")

/*FORMULARIO Y PROCESAMIENTO DEL LOGIN*/
router.get("/login", usersController.login)
router.post("/login", usersController.loginProcess)

/* FORMULARIO Y ACCION DE CREACION DE USUARIO */
router.get("/register", usersController.register)
router.post("/", upload.single("profilePicture"), registerValidate, usersController.createRegister)

/* FORMULARIO DE PERFIL DE USUARIO */
router.get("/:id/profile", usersController.profile)

module.exports = router