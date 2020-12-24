var sumEverything = function (arg1, arg2) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    return number.reduce(function (prevVal, curVal, currIdx) { return prevVal + curVal; }, 0);
};
