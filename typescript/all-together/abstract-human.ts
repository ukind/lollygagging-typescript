import IPerson from "./IPerson";

export default abstract class Human implements IPerson {
  public name: string = "";
  public age: number = 0;
  public constructor(name: string) {
    this.name = name;
  }
  abstract showAge(): number;
}
