// Convert to Number
let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)  // convert to number 
console.log(typeof valueInNumber);

let score1 = "33ab"
let valueInNumber1 = Number(score1)  // convert to number 
console.log(valueInNumber1,typeof valueInNumber1); // NaN (not a number), Number

// "33" => 33 conversion
// "33abc" => Nan
// true => 1, false => 0
// undefined => nan

// Convert to boolean

let isLogged =1

let booleanIsLogged = Boolean(isLogged)
console.log(booleanIsLogged); // true 

let isLogged1 = ""

let booleanIsLogged1 = Boolean(isLogged1)
console.log(booleanIsLogged1); // false

let isLogged2 = "swapnil"

let booleanIsLogged2 = Boolean(isLogged2)
console.log(booleanIsLogged2); // true

//convert to String

let someNumber = 33

let strngNumber = String(someNumber)
console.log(strngNumber, typeof strngNumber); // 33 string

let someNumber1 = 45.8678

let strngNumber1 = String(someNumber1)
console.log(strngNumber1, typeof strngNumber1); // 

