var mounth = {
    shout: 'ayeeee',
    whisper: function (word) { return word; },
};
mounth.whisper('ahoy');
function filterNumber(searchValue, rawArr) {
    var test = rawArr.filter(function (el) { return Number(el) > Number(searchValue); });
    return test;
}
var higherThan4 = filterNumber;
var item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = higherThan4(4, item);
console.log(result);
