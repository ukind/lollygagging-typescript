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
            var _this = _super.call(this, name) || this;
            _this.name = "";
            return _this;
        }
        Person.prototype.greet = function () {
            console.log("Hello " + this.name);
        };
        return Person;
    }(Human));
    var yogi = new Person("yogi");
    yogi.greet();
})();
