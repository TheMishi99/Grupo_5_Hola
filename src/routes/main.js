const express = require("express")
const router = express.Router()

const mainController = require("../controllers/mainController")

router.get("/", mainController.index)
router.get("/stores", mainController.stores)
router.get("/aboutMishis", mainController.aboutMishis)
router.get("/contactUs", mainController.contactUs)
router.get("/privacyPolicies", mainController.privacyPolicies)
router.get("/frequentQuestions", mainController.frequentQuestions)

module.exports = router