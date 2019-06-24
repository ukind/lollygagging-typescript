class Person2 {
  //   private name: string;
  //   readonly name: string;
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(): string {
    return `My Name is ${this.name}`;
  }
}

class Vilain extends Person2 {
  vilainSuperpowers: string[];
  constructor(name: string) {
    super(name);
  }

  getSuperpowerList(): string[] {
    return this.vilainSuperpowers;
  }

  addVillainSuperpower(superpower: string): void {
    this.vilainSuperpowers.push(superpower);
  }

  greet(): string {
    //   if setting name to private. it will shows an error. because inaccessable
    return `Me! the greatest ${this.name} will kil you with: ${this.vilainSuperpowers}`;
  }
}

const joker = new Vilain("kamui");
