const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/cart", productsController.cart);
router.get("/details", productsController.detail);

router.get("/create", productsController.createView);
router.post("/create", productsController.create);

/* router.get("/modify/:id", productsController.modifyView);
router.put("/modify/:id", productsController.create); */

module.exports = router;
