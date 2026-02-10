const name = "Vansh"
const repoCount = 50

// console.log(name + repoCount + " Value"); // it's an old way, not in use

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //`` <= back ticks (modern way to write string) <-- this is called as String Interpolation

// modern way to declare a String
const gameName = new String('Vansh-hhh')

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4); //yaha negative value hum nahi de sakte, agr di to wo 0 se start kr dega
console.log(newString);

const anotherString = gameName.slice(-8, 4); // -8 se shuru or 4 pr khatam
console.log(anotherString);

const newStringOne = "    hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim()); //remove starting and ending space

const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-chaudhary
console.log(url.includes('hitesh')); //true
console.log(url.includes('sundar')); //false

console.log(gameName.split('-'));
