const express = require("express")
const router = express.Router()

const mainController = require("../controllers/mainController")

router.get("/", mainController.index)
router.get("/stores", mainController.stores)
router.get("/workWithUs", mainController.workWithUs)
router.get("/changes", mainController.cambiosyDev)

module.exports = router