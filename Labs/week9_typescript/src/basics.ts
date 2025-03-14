//static typing
//TypeScript is a statically typed language, 
// which means that the type of a variable is know at the compile time.
//when a variable is declared, you can specify the type pf the variable.
let message : string = "Hey There!"

//error - type 'number' is not assignable to type 'string'
//message = 40

let number : number = 40
let check : boolean = true

console.log(`message: ${message}, type : ${typeof message}`)
console.log(`number: ${number}, type : ${typeof number}`)
console.log(`check: ${check}, type : ${typeof check}`)

// any - The any type is used to opt-out of type checking
//variable declared with any can be assigned to any type of value

let x : any  //undefined
console.log(`x: ${x}, type : ${typeof x}`);

x = 20  //number
console.log(`x: ${x}, type : ${typeof x}`);

x = "Hello" //string
console.log(`x: ${x}, type : ${typeof x}`);

x = true //boolean
console.log(`x: ${x}, type : ${typeof x}`);

x = null //object
console.log(`x: ${x}, type : ${typeof x}`);

