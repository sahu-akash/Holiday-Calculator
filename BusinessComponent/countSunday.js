const moment = require("moment");
const countMaxHolidays = require("./countMaxHolidays");
function countSunday(startDate, endDate) {
  let flag = 0;
  const availableHolidays = countMaxHolidays(startDate, endDate);
  for (i = 0; i <= availableHolidays - 1; i++) {
    if (moment(startDate).add(i, "days").isoWeekday() == 7) {
      flag++;
    }
  }
  flag > 0
    ? console.log("num of sunday =", flag)
    : console.log("No sunday found");
  return flag;
}

module.exports = countSunday;
