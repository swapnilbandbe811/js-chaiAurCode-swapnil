// 1. primtives data types

// 7 types : String , Number, Boolean, null, undefined, Symbol(to make values unique), BigInt

// is JS dynamicaly types or static types lang?
// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold 
// at runtime and can change throughout the program as we assign different values to them.
// But typeScript is static typed

const score = 100 // we havent defined DT so its initialized at runtime so its dynamic

const value = null;

const ud = undefined;

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2); // 123 unique numbers 

const bigNumber = 238748234802304023239n;

console.log(bigNumber, typeof bigNumber);

// 2. Non-primitive or Reference data types

// Array, Objects, Functions

// Array
const heros = ["shaktiman", "naagraj", "hatim"]

// Object
let myObj = {
    name : "hitesh",
    age: 22,
}

// Function
const myFunction = function(){
    console.log("Hello World");
}

console.log(myFunction ,typeof myFunction);
console.log(heros, typeof heros);
console.log(myObj, typeof myObj);
console.log(value, typeof value);
console.log(ud, typeof ud);
console.log(id, typeof id);