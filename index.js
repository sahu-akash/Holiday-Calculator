// main function
const validatedates = require("./BusinessComponent/validatedates");
const countMaxHolidays = require("./BusinessComponent/countMaxHolidays");
const sunday = require("./BusinessComponent/countSunday");
const nationalHoliday = require("./BusinessComponent/countNationalHolidays");

function holidayCalc(StartDate, EndDate) {
  if (!validatedates(StartDate, EndDate)) {
    console.error("Exit due to validation error");
    return;
  }


  const Holidays =
    countMaxHolidays(StartDate, EndDate) -
    sunday(StartDate, EndDate) -
    nationalHoliday(StartDate, EndDate);

console.log("You get",Holidays,"Holidays");
  return Holidays

  // cal the holiday time period incl.
}
holidayCalc("2022-05-02", "2022-05-15");
