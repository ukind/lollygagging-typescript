import Person from "./person";
export default class Hero extends Person {
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
