interface IPerson {
  name: string;
  greet: (name: string) => string;
}

class Person3 implements IPerson {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet(name: string): string {
    return `my name is ${name}`;
  }
}
