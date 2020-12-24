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
        }
        // *MUST HAVE*
        showAge() {
            return this.age;
        }
    }
    class Hero extends Person {
        constructor(name) {
            super(name);
            this.superpower = [];
        }
        addPower(power) {
            this.superpower.push(power);
        }
        listPowers() {
            return this.superpower;
        }
    }
    const batman = new Hero("Batman");
    batman.age = 22;
    batman.addPower("knock-out");
    batman.addPower("sleep");
    batman.showAge();
    console.log(batman.listPowers);
})();