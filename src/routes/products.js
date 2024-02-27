const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

/* IMPORTACION MIDDLEWARES */

const { upload } = require("../middlewares/multerProducts");
const userLogged = require("../middlewares/userLogged");

/* MOSTRAR TODOS LOS PRODUCTOS */
router.get("/", productsController.list);

/* MOSTRAR TODOS LOS PRODUCTOS EN OFERTA */
router.get("/allOffers", productsController.listOffers);

/* FORMULARIO Y ACCION DE CREACION DE PRODUCTO */
router.get("/create", userLogged, productsController.createView);
router.post("/", userLogged, upload.single("img"), productsController.create);

/* VISTA DE CARRITO */
router.get("/cart", userLogged, productsController.cart);
router.post("/cart/:id", productsController.addToCart);
router.delete("/cart/:id", productsController.deleteItemCart);
router.post("/cart/addOne/:id", productsController.increaseQuantity);
router.delete("/cart/removeOne/:id", productsController.decreaseQuantity);
router.get("/cart/checkout", productsController.checkout);

/* OBTENER DETALLES DEL PRODUCTO POR ID */
router.get("/:id", productsController.detail);

/* FORMULARIO Y ACCION DE EDITAR EL PRODUCTO POR ID */
router.get("/:id/edit", userLogged, productsController.modifyView);
router.put("/:id", userLogged, upload.single("img"), productsController.modify);

/* FORMULARIO Y ACCION ELIMINAR EL PRODUCTO POR ID */
router.get("/delete/:id", userLogged, productsController.delete);
router.delete("/:id", userLogged, productsController.destroy);

/*BUSCAR PRODUCTO*/
router.post("/search", productsController.search);

module.exports = router;
