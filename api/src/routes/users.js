const express = require("express")
const router = express.Router()
const usersController = require("../controllers/usersController")

/* IMPORTACION MIDDLEWARES */
const { upload } = require("../middlewares/multerUsers");
const registerValidate = require("../middlewares/registerValidate")
const editValidate = require("../middlewares/editValidate")
const sessionValidate = require("../middlewares/loginValidate")
const userLogged = require("../middlewares/userLogged")

/*FORMULARIO Y PROCESAMIENTO DEL LOGIN*/
router.get("/login", sessionValidate ,usersController.login)
router.post("/login", sessionValidate, usersController.loginProcess)

/* FORMULARIO Y ACCION DE CREACION DE USUARIO */
router.get("/register",sessionValidate, usersController.register)
router.post("/register", sessionValidate, upload.single("profilePicture"), registerValidate, usersController.createRegister)

router.get("/:id/edit", userLogged, usersController.edit)
router.put("/:id/edit", userLogged, upload.single("profilePicture"), editValidate, usersController.editProcess)

router.get("/:id/delete", userLogged, usersController.delete)
router.delete("/:id/delete", userLogged, usersController.deleteProcess)

/* PERFIL Y LOGOUT DE USUARIO */
router.get("/:id/profile", userLogged, usersController.profile)
router.get("/:id/logout", userLogged, usersController.logout)

module.exports = router