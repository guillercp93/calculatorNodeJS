'use strict';

const calculator = require("./app/calculator");

let a = 3;
let b = 5;

console.log(`Add ${a} + ${b} = ${calculator.add(a,b)}`);
console.log(`Minus ${a} - ${b} = ${calculator.minus(a,b)}`);
console.log(`Mitiply ${a} * ${b} = ${calculator.multiply(a,b)}`);
console.log(`Divide ${a} / ${b} = ${calculator.divide(a,b)}`);