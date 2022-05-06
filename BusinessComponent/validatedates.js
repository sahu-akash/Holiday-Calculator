const moment = require("moment");

function validatedates(start, end) {
  let startDate = moment(start).format("YYYY-MM-DD");
  let endDate = moment(end).format("YYYY-MM-DD");

  //check if the dates are valid
  if (!moment(start).isValid() || !moment(end).isValid()) {
    console.log("invalid date");
    return false;
  }

  if (startDate < endDate) {
    console.log("dates are in chronological order");
  } else {
    console.error("dates are not in chronological order");
    return false;
  }

  //The maximum length of the time span is 50 days
  if (moment(endDate).diff(moment(startDate), "days") <= 50) {
    console.log("The duration of the vacation is within 50 days");
  } else {
    console.error("the duration of the vacation is not within 50 days");
    return false;
  }

  // cal holiday time range by considering the current month
  let timeSpanStart, timeSpanEnd;
  if (moment().month() >= 4) {
    timeSpanStart = moment(`${moment().format("YYYY")}-04-01`).format(
      "YYYY-MM-DD"
    );
    timeSpanEnd = moment(`${moment().format("YYYY")}-03-01`)
      .add(1, "year")
      .format("YYYY-MM-DD");
  } else {
    timeSpanStart = moment(`${moment().format("YYYY")}-04-01`)
      .subtract(1, "year")
      .format("YYYY-MM-DD");
    timeSpanEnd = moment(`${moment().format("YYYY")}-03-01`).format(
      "YYYY-MM-DD"
    );
  }
  console.log("vacation period: ", timeSpanStart, "to", timeSpanEnd);

  // Accept only time spans that fit within the current holiday period
  if (startDate > timeSpanStart || endDate < timeSpanEnd) {
    console.log("vacation Date is within the holiday period");
  } else {
    console.error("");
    return false;
  }

  return true;
}

//console.log(validatedates("2022-05-02", "2022-05-15"));
module.exports = validatedates;
