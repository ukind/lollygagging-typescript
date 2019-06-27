"use strict";
(function () {
    class Human {
        constructor(name) {
            this.name = "";
            this.age = 0;
            this.name = name;
        }
    }
    class Person extends Human {
        constructor(name) {
            super(name);
            this.name = "";
        }
        greet() {
            console.log(`Hello ${this.name}`);
        }
    }
    const yogi = new Person("yogi");
    yogi.greet();
})();
