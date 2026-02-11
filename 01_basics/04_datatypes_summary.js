// # 01. Primitive dataTypes:
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// // Symbol:
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId); // false(this is what Symbol mean to us)




// # 02. Referennce Type (Non-Primitive):
// 3 types : Array, Objects, Functions

// // // a. Arrays:
// const heros = ["shaktiman", "naagraj", "doga"]
// // //  b. Objects:
// let myObj = {
//     name: "Vansh",
//     age: 22,
// }

// // // c. functions:
// const myFunction = function() {
//     console.log("Hello Welcome Vansh");
// }




// *********************************************************     Stack & Heap Memory in JS     *********************************************************
// Stack (Primitive){makes copy},                                                Heap(Non-Primitive){takes references of original & make changes in it}

let myYoutubename = "hiteshchaudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

