"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_human_1 = __importDefault(require("./abstract-human"));
class Person extends abstract_human_1.default {
    constructor(name) {
        super(name);
    }
    showAge() {
        return this.age;
    }
}
exports.default = Person;
