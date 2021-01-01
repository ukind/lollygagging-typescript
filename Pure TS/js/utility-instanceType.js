// purpose create type from instance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// base class
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    return Car;
}());
// base class
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// to clone class with additonal attributes
function cloneClass(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.delete = function () { };
            return _this;
        }
        return class_1;
    }(Base));
}
var deleteableCar = cloneClass(Car);
var deleteableUser = cloneClass(User);
var Profile = /** @class */ (function () {
    function Profile() {
    }
    return Profile;
}());
var profile = new Profile();
profile.car = new deleteableCar('Yogi');
profile.user = new deleteableUser('Mazda');
