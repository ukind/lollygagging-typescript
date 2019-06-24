class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello ${this.name}`;
  }
}
let yogi = new Person("yogi");
yogi.greet();
class Heroism extends Person {
  constructor(name) {
    super(name);
    this.superpowers = [];
  }
  addPower(power) {
    this.superpowers.push(power);
  }
  listPower() {
    return this.superpowers;
  }
}
const batman = new Heroism("Utama");
batman.addPower("Terbang");
console.log(batman.listPower());
