const moment = require("moment");
const countMaxHolidays = (startDate, endDate) =>
  moment(endDate).diff(moment(startDate), "days");

module.exports = countMaxHolidays;
