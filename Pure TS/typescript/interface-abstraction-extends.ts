(function (): void {
  interface Person {
    name: string;
    age: number;
  }

  interface Hero extends Person {
    superpower: string[];
  }

  abstract class Human implements Person {
    public name = "";
    public age = 0;
    public constructor(name: string) {
      this.name = name;
    }
    // if declared as abstract, derived class MUST implement that function too
    abstract showAge(): number;
  }

  class Person extends Human {
    public constructor(name: string) {
      super(name);
    }
    // *MUST HAVE*
    public showAge(): number {
      return this.age;
    }
  }

  class Hero extends Person implements Hero {
    public superpower: string[] = [];
    public constructor(name: string) {
      super(name);
    }
    public addPower(power: string): void {
      this.superpower.push(power);
    }

    public listPowers(): string[] {
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
