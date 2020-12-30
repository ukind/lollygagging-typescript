function someFunction2() {
    return 20;
}
(function (someFunction2) {
    someFunction2.test = 20;
})(someFunction2 || (someFunction2 = {}));
someFunction2();
