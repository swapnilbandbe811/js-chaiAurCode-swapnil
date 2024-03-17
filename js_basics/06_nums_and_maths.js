// nums
const score = 200
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // precision value

const otherNumber = 23.8957

console.log(otherNumber.toPrecision(2));

const hundreds = 10000
console.log(hundreds.toLocaleString('en-IN'));


// maths 
console.log('Math library');

console.log(Math);
console.log(Math.round(4.4));//4
console.log(Math.round(4.5));//5
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.6));//5 higher value
console.log(Math.floor(4.6));//4 floor lower value

console.log(Math.random()); // it can be 0 as well zero to one
console.log((Math.random() * 10) +1); //to avoid above condition we use this

// we need random value between 10 and 20
const min =10
const max =20

console.log(Math.floor((Math.random()) * (max - min + 1)) + min);

