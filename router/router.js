const express = require("express");
const controller = require("../controller/controller")
const trade = require("../controller/Trade")

const router = express.Router()
router.post("/derivatives",controller.createDerivatives)
router.get("/getderivatives",controller.getDerivatives)
router.put("/updatederivatives",controller.updateDerivatives)
router.get("/getbyderivatives/:id",controller.getByIdDerivatives)
router.post("/trade",trade.createTrade)
router.get("/trade/data",trade.GetTrade)

module.exports = router
