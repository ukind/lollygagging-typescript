class Person2 {
  //   private name: string;
  //   readonly name: string;
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public greet(): string {
    return `My Name is ${this.name}`;
  }
}

class Vilain extends Person2 {
  public vilainSuperpowers: string[] = [];
  public constructor(name: string) {
    super(name);
  }

  public getSuperpowerList(): string[] {
    return this.vilainSuperpowers;
  }

  public addVillainSuperpower(superpower: string): void {
    this.vilainSuperpowers.push(superpower);
  }

  public greet(): string {
    //   if setting name to private. it will shows an error. because inaccessable
    return `Me! the greatest ${this.name} will kil you with: ${this.vilainSuperpowers}`;
  }
}

const joker = new Vilain("kamui");
joker.greet();
