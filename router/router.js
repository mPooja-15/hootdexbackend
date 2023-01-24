const express = require("express");
const controller = require("../controller/controller")

const router = express.Router()
router.post("/derivatives",controller.createDerivatives)
router.get("/getderivatives",controller.getDerivatives)
router.put("/updatederivatives",controller.updateDerivatives)
router.get("/getbyderivatives/:id",controller.getByIdDerivatives)

module.exports = router
