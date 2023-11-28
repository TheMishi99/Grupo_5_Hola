const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

/* MOSTRAR TODOS LOS PRODUCTOS */
router.get("/", productsController.showAll);

/* FORMULARIO Y ACCION DE CREACION DE PRODUCTO */
router.get("/create", productsController.createView);
router.post("/", productsController.create);

/* VISTA DE CARRITO */
router.get("/cart", productsController.cart);


/* OBTENER DETALLES DEL PRODUCTO POR ID */
router.get("/:id", productsController.detail);

/* FORMULARIO Y ACCION DE EDITAR EL PRODUCTO POR ID */
router.get("/:id/edit", productsController.modifyView);
router.put("/:id", productsController.modify);

module.exports = router;
