const { requestbody } = require("../models/requestbody");

module.exports = async (req, res) => {
  try {
    const RequestParse = JSON.parse(requestbody);
    // const {
    //   start_day_identifier,
    //   timezone_identifier,
    //   service_duration,
    //   days,
    //   timeslot_interval,
    // } = req.body;
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err });
  }
};
