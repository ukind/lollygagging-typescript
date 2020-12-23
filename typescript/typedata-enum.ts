(function () {
  enum weekDay {
    MONDAY,
    SUNDAY,
    SATURDAY = "my birthday",
  }

  const myDay: weekDay = weekDay.MONDAY;
  const nameOfDay: string = weekDay[1];
  const dayTitle: string = weekDay.SATURDAY;

  console.log(myDay); //return : 0
  console.log(nameOfDay); //return SUNDAY
  console.log(dayTitle); // return my birthday
})();
