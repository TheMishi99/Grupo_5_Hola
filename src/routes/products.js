const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/cart", productsController.cart);
router.get("/:id", productsController.detail);

router.get("/create", productsController.createView);
router.post("/create", productsController.create);

router.get("/modify", productsController.modifyView);
// router.put("/modify/:id", productsController.modify);

router.get("/", productsController.showAll)
module.exports = router;
