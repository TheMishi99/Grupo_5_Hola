const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.showAll)

router.get("/cart", productsController.cart);

router.get("/create", productsController.createView);
router.post("/create", productsController.create);

router.get("/:id", productsController.detail);

router.get("/:id/edit", productsController.modifyView);
router.put("/:id", productsController.modify);

module.exports = router;