const moment = require("moment");
const nationalholidays = require("../NationalHolidays/Finland");
const countMaxHolidays = require("./countMaxHolidays");

function countNationalHolidays(startDate, endDate) {
  let flag = 0;
  const availableHolidays = countMaxHolidays(startDate, endDate);

  for (i = 0; i <= nationalholidays.length - 1; i++) {
    let date = moment(nationalholidays[i], "DD-MM-YYYY");

    if (
      date.diff(moment(startDate), "days") > 0 &&
      date.diff(moment(startDate), "days") < availableHolidays
    ) {
      flag++;
    }
  }
  flag > 0
    ? console.log("National holiday =", flag)
    : console.log("No national holiday");
  return flag;
}

// console.log(countSunday("2022-05-02", "2022-05-15"));

module.exports = countNationalHolidays
