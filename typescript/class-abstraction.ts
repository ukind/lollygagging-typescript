(function(): void {
  abstract class Human {
    public name: string = "";
    public age: number = 0;
    public constructor(name: string) {
      this.name = name;
    }
    abstract greet(): void;
  }

  class Person extends Human {
    public name: string = "";
    public constructor(name: string) {
      super(name);
    }
    public greet(): void {
      console.log(`Hello ${this.name}`);
    }
  }

  const yogi = new Person("yogi");
  yogi.greet();
})();
