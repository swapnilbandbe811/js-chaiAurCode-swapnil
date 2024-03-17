// Write it on X 
// basics conversion
console.log(2 >1); // boolean value true

//there is no issue when comparing same data types 

console.log("2" > 1); // string compare number true... js automatically converts "2" to number
console.log("02" >1); // true

// avoid below conversions
S
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true 

// The reason is that the equality check == and compararisons > < >= <= work differently
// comparisons converts null to number, treating it as 0
// thats why null >= 0 is true and null > 0 , null == 0 is false 

console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined < 0);  // false

console.log("2" === 2); // checks dataype as well