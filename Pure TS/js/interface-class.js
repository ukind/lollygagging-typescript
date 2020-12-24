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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        return "Hello " + this.name;
    };
    return Person;
}());
var yogi = new Person("yogi");
yogi.greet();
var Heroism = /** @class */ (function (_super) {
    __extends(Heroism, _super);
    function Heroism(name) {
        var _this = _super.call(this, name) || this;
        _this.superpowers = [];
        return _this;
    }
    Heroism.prototype.addPower = function (power) {
        this.superpowers.push(power);
    };
    Heroism.prototype.listPower = function () {
        return this.superpowers;
    };
    return Heroism;
}(Person));
var batman = new Heroism("Utama");
batman.addPower("Terbang");
console.log(batman.listPower());
