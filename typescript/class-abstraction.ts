(function() {
  abstract class Human {
    public name: string;
    public age: number;
    constructor(name: string) {
      this.name = name;
    }
    abstract greet(): void;
  }

  class Person extends Human {
    public name: string;
    constructor(name: string) {
      super(name);
    }
    greet(): void {
      console.log(`Hello ${this.name}`);
    }
  }

  const yogi = new Person("yogi");
  yogi.greet();
})();
