
const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " value"); // dont use this syntax

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Nowadays devs use backticks `` , string interpolation

const gameName = new String('SwapnilB');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.slice(-2));

let text = " Apple  Banana  Kiwi ";
let part = text.slice(-12);
console.log(part);

console.log(text.trim()); // from the spaces from start and end 

const url = "https://sparta.com/%20"
url.replace('%20', '-');
console.log(url);

console.log(url.replace('%20', '-'));

//console.log(gameName.split);

let sentence = 'Hi I am learning javascript on youtube'
const st = sentence.split(' ');
console.log(st[2]);
console.log();

console.log(sentence.endsWith('e'));