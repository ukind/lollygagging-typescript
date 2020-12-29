var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function foo(obj) {
    return obj.a + obj.b;
}
// another example with combining object
var objA = {
    a: 1,
};
var objB = {
    a: 2,
};
var combine = function (A, B) { return (__assign(__assign({}, A), B)); };
console.log(combine(objA, objB));
