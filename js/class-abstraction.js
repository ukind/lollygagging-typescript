(function () {
    class Human {
        constructor(name) {
            this.name = name;
        }
    }
    class Person extends Human {
        constructor(name) {
            super(name);
        }
        greet() {
            console.log(`Hello ${this.name}`);
        }
    }
    const yogi = new Person("yogi");
    yogi.greet();
})();
