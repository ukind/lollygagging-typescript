"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
class Hero extends person_1.default {
    constructor(name) {
        super(name);
        this.superpower = [];
    }
    addPower(power) {
        this.superpower.push(power);
    }
    listPowers() {
        return this.superpower;
    }
}
exports.default = Hero;
