const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

/* IMPORTACION MIDDLEWARES */

const { upload } = require("../middlewares/multerProducts");
const userLogged = require("../middlewares/userLogged");

/* MOSTRAR TODOS LOS PRODUCTOS */
router.get("/", productsController.list);

/* FORMULARIO Y ACCION DE CREACION DE PRODUCTO */
router.get("/create", userLogged, productsController.createView);
router.post("/", userLogged, upload.single("img"), productsController.create);

/* VISTA DE CARRITO */
router.get("/cart", userLogged, productsController.cart);

/* OBTENER DETALLES DEL PRODUCTO POR ID */
router.get("/:id", productsController.detail);
router.post("/:id", productsController.addToCart);

/* FORMULARIO Y ACCION DE EDITAR EL PRODUCTO POR ID */
router.get("/:id/edit", userLogged, productsController.modifyView);
router.put("/:id", userLogged, upload.single("img"), productsController.modify);

/* FORMULARIO Y ACCION ELIMINAR EL PRODUCTO POR ID */
router.get("/delete/:id", userLogged, productsController.delete);
router.delete("/:id", userLogged, productsController.destroy);

module.exports = router;
