const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

/* IMPORTACION MIDDLEWARES */

const { upload } = require("../middlewares/multerProducts");
const userloggedMiddleware = require("../middlewares/userLogged");

/* MOSTRAR TODOS LOS PRODUCTOS */
router.get("/", productsController.showAll);

/* FORMULARIO Y ACCION DE CREACION DE PRODUCTO */
router.get("/create", userloggedMiddleware, productsController.createView);
router.post("/", upload.single("img"), productsController.create);

/* VISTA DE CARRITO */
router.get("/cart", productsController.cart);

/* OBTENER DETALLES DEL PRODUCTO POR ID */
router.get("/:id", productsController.detail);

/* FORMULARIO Y ACCION DE EDITAR EL PRODUCTO POR ID */
router.get("/:id/edit", userloggedMiddleware, productsController.modifyView);
router.put("/:id", productsController.modify);

/* ACCION ELIMINAR  */
router.delete("/:id", productsController.destroy);

module.exports = router;
