const { validationResult } = require("express-validator");
const event = require("../models/event.json");
const workhours = require("../models/workhours.json");

module.exports = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors });
    }
    const {
      start_day_identifier,
      service_duration,
      days,
      timeslot_interval,
      is_ignore_schedule,
      is_ignore_workhour,
      timezone_identifier,
    } = req.body;

    let ms = start_day_identifier;
    let unix = "";

    for (let i = 0; i < ms.length; i++) {
      unix += ms[i];
      if (unix.length === 4) {
        unix += "-";
      }
      if (unix.length === 7) {
        unix += "-";
      }
    }

    let day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    let myDate = new Date(Date.parse(unix));
    let myDay = myDate.getDay();
    let todayDate = day[myDay - 1];
    let Timeslot = [];
    let filtered = [];

    if (!is_ignore_workhour) {
      const targetDay = workhours.filter((data) => {
        return data.key === todayDate;
      });
      let startTime = targetDay[0].open_interval;
      let interval = timeslot_interval;
      let endTime = targetDay[0].close_interval;

      for (let i = startTime; i < endTime; i += interval) {
        beginAt = i;
        endAt = i + interval;
        ts = {
          begin_at: Date.parse(unix) / 1000 + beginAt,
          end_at: Date.parse(unix) / 1000 + endAt,
        };
        Timeslot.push(ts);
      }
    }
    for (let i = 0; i < event.length; i++) {
      filtered = Timeslot.filter((data) => {
        return (
          event[i].begin_at > data.end_at || event[i].end_at < data.begin_at
        );
      });
    }

    let DayTimetable = {
      start_of_day: Date.parse(unix) / 1000,
      day_modifier: days,
      is_day_off: is_ignore_workhour,
      timeslots: filtered,
    };
    res.status(200).json({ ResponseBody: [DayTimetable] });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err });
  }
};
