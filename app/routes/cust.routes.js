const router = require("express").Router()
const custController = require("../controller/cust.controller")
router.get("/add", custController.add)
router.get("/addMethod",custController.addMethod)
router.get("/", custController.showAll)
router.get("/single/:id", custController.single) //req.params
router.get("/edit/:id",custController.edit)
router.post("/editLogic/:id", custController.editLogic)
module.exports = router