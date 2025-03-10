"use strict";
//static typing
//TypeScript is a statically typed language, 
// which means that the type of a variable is known at the compile time.
//When a variable is declared, you can specify the type of the variable.
let message = "Hey there !";
//Error - Type 'number' is not assignable to type 'string'
//message = 40
let number = 40;
let check = true;
console.log(`message: ${message}, type : ${typeof message}`);
console.log(`number: ${number}, type : ${typeof number}`);
console.log(`check: ${check}, type : ${typeof check}`);
// any - The any type is used to opt-out of type checking.
//variable declared with any can be assigned to any type of value
let x; //undefined
console.log(`x: ${x}, type : ${typeof x}`);
x = 20; //number
console.log(`x: ${x}, type : ${typeof x}`);
x = "Hello"; //string
console.log(`x: ${x}, type : ${typeof x}`);
x = true; //boolean
console.log(`x: ${x}, type : ${typeof x}`);
x = null; //object
console.log(`x: ${x}, type : ${typeof x}`);
//union type - allows a variable to have multiple types
let y;
y = 20;
console.log(`y: ${y}, type : ${typeof y}`);
y = "hello";
console.log(`y: ${y}, type : ${typeof y}`);
//Error - y is union type of number and string
//cannot be assigned to other type of values
// y = false
function addNumber(a, b) {
    return a + b;
}
console.log(`addNumber(10, 20) : ${addNumber(10, 20)}`);
let result = addNumber(40, 20);
console.log(`result : ${result}`);
