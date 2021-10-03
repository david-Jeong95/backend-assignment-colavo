const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const { body } = require("express-validator");

router.post(
  "/getTimeSlots",
  body("start_day_identifier").isString(),
  body("timezone_identifier").isString(),
  body("service_duration").custom((value) => value >= 0),
  body("timeslot_interval").custom((value) => value >= 0),
  body("is_ignore_schedule").isBoolean(),
  body("is_ignore_workhour").isBoolean(),
  controller.getTimeSlots
);

module.exports = router;
