"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("underscore"));
const fs = __importStar(require("fs"));
const users = [
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
const file = fs.readFileSync("./test.txt", "utf-8");
