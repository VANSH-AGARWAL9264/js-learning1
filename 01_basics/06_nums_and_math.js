// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// *************************************************************     Maths    *************************************************************************************
// console.log(Number); //[Function: Number]
// console.log(Math); //Object [Math] {}

// console.log(Math.abs(-4)); //negative value ko positive bna deta he(absolute value me)
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1)); //matlb top wala choose krega, mtlb zra sa 4 se zyada hua to ye 5 choose krega
// console.log(Math.floor(4.9));//matlb piche wala choose krega, mtlb zra sa 4 se zyada hua to bhi ye 4 choose krega
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random()); //iki value humesh 0 se 1 ke bich me hi hogi
console.log(Math.floor(Math.random()*10) + 1); //iki value humesh 1 se 10 ke bich me hi hogi

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
