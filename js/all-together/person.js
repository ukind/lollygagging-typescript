import Human from "./abstract-human";
export default class Person extends Human {
    constructor(name) {
        super(name);
    }
    showAge() {
        return this.age;
    }
}
