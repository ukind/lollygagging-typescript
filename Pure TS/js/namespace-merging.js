var myNameSpace;
(function (myNameSpace) {
    myNameSpace.x = 2;
})(myNameSpace || (myNameSpace = {}));
(function (myNameSpace) {
    myNameSpace.getX = function () { return myNameSpace.x; };
})(myNameSpace || (myNameSpace = {}));
myNameSpace.x;
myNameSpace.getX();
var numberMyNameSpace = {
    x: 1,
    y: 2,
};
