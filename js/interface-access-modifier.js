"use strict";
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
        this.vilainSuperpowers = [];
    }
    getSuperpowerList() {
        return this.vilainSuperpowers;
    }
    addVillainSuperpower(superpower) {
        this.vilainSuperpowers.push(superpower);
    }
    greet() {
        //   if setting name to private. it will shows an error. because inaccessable
        return `Me! the greatest ${this.name} will kil you with: ${this.vilainSuperpowers}`;
    }
}
const joker = new Vilain("kamui");
joker.greet();
