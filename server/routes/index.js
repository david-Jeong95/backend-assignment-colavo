const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/getTimeSlots", controller.getTimeSlots);

module.exports = router;
