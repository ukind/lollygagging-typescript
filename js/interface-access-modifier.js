class Person2 {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `My Name is ${this.name}`;
    }
}
class Vilain extends Person2 {
    constructor(name) {
        super(name);
    }
    getSuperpowerList() {
        return this.vilainSuperpowers;
    }
    addVillainSuperpower(superpower) {
        this.vilainSuperpowers.push(superpower);
    }
    greet() {
        return `Me! the greatest ${this.name} will kil you with: ${this.vilainSuperpowers}`;
    }
}
const joker = new Vilain("kamui");
