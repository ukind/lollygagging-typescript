import * as _ from "underscore";
import * as fs from "fs";

const users: { name: string; age: number }[] = [
  {
    name: "John",
    age: 33
  },
  {
    name: "Bert",
    age: 36
  }
];

const maxAge = _.max(users, user => user.age);
console.log(maxAge);

const file: string = fs.readFileSync("./test.txt", "utf-8");
