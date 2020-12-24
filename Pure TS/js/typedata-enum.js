(function () {
    var weekDay;
    (function (weekDay) {
        weekDay[weekDay["MONDAY"] = 0] = "MONDAY";
        weekDay[weekDay["SUNDAY"] = 1] = "SUNDAY";
        weekDay["SATURDAY"] = "my birthday";
    })(weekDay || (weekDay = {}));
    var myDay = weekDay.MONDAY;
    var nameOfDay = weekDay[1];
    var dayTitle = weekDay.SATURDAY;
    console.log(myDay); //return : 0
    console.log(nameOfDay); //return SUNDAY
    console.log(dayTitle); // return my birthday
})();
