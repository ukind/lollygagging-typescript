var Tea = /** @class */ (function () {
    function Tea() {
    }
    return Tea;
}());
(function (Tea) {
    Tea.availableTaste = ['sweet', 'bitter'];
})(Tea || (Tea = {}));
Tea.availableTaste.includes('sweet');
