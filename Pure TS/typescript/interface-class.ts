class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(): string {
    return `Hello ${this.name}`;
  }
}

const yogi = new Person("yogi");
yogi.greet();

class Heroism extends Person {
  superpowers: string[] = [];
  constructor(name: string) {
    super(name);
  }
  addPower(power: string): void {
    this.superpowers.push(power);
  }
  listPower(): string[] {
    return this.superpowers;
  }
}

const batman = new Heroism("Utama");
batman.addPower("Terbang");
console.log(batman.listPower());
