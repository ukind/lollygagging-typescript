function foo2(val) {
    var newFunc = function (val) { return val; };
    return newFunc;
}
var resultConditional = foo2('1');
