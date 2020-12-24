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
(function () {
    var Human = /** @class */ (function () {
        function Human(name) {
            this.name = "";
            this.age = 0;
            this.name = name;
        }
        return Human;
    }());
    var Person = /** @class */ (function (_super) {
        __extends(Person, _super);
        function Person(name) {
            return _super.call(this, name) || this;
        }
        // *MUST HAVE*
        Person.prototype.showAge = function () {
            return this.age;
        };
        return Person;
    }(Human));
    var Hero = /** @class */ (function (_super) {
        __extends(Hero, _super);
        function Hero(name) {
            var _this = _super.call(this, name) || this;
            _this.superpower = [];
            return _this;
        }
        Hero.prototype.addPower = function (power) {
            this.superpower.push(power);
        };
        Hero.prototype.listPowers = function () {
            return this.superpower;
        };
        return Hero;
    }(Person));
    var batman = new Hero("Batman");
    batman.age = 22;
    batman.addPower("knock-out");
    batman.addPower("sleep");
    batman.showAge();
    console.log(batman.listPowers);
})();
