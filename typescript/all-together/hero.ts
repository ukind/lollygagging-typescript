import Person from "./person";
import IHero from "./IHero";

export default class Hero extends Person implements IHero {
  superpower: string[] = [];
  constructor(name: string) {
    super(name);
  }
  addPower(power: string) {
    this.superpower.push(power);
  }

  listPowers(): string[] {
    return this.superpower;
  }
}
