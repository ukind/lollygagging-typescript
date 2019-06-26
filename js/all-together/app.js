import Hero from "./hero";
(function () {
    // interface IPerson {
    //   name: string;
    //   age: number;
    // }
    // interface IHero extends IPerson {
    //   superpower: string[];
    // }
    //   abstract class Human implements IPerson {
    //     name: string;
    //     age: number;
    //     constructor(name: string) {
    //       this.name = name;
    //     }
    //     abstract showAge(): number;
    //   }
    // class Person extends Human {
    //   constructor(name: string) {
    //     super(name);
    //   }
    //   showAge(): number {
    //     return this.age;
    //   }
    // }
    // class Hero extends Person implements IHero {
    //   superpower: string[] = [];
    //   constructor(name: string) {
    //     super(name);
    //   }
    //   addPower(power: string) {
    //     this.superpower.push(power);
    //   }
    //   listPowers(): string[] {
    //     return this.superpower;
    //   }
    // }
    let batman = new Hero("Batman");
    batman.age = 22;
    batman.addPower("knock-out");
    batman.addPower("sleep");
    console.log(batman.listPowers);
})();
