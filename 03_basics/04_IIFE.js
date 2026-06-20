// //Immediately Invoked Function Expressions (IIFE)

// // normal function definition and execution(without IIFE):-
// function chai() {
//     console.log(`DB Connected`);
// }
// chai()


// // IIFE me sirf bracket ke andr likhte he function and uska execution:-
(function chai() {
    // //this is named IIFE bcs iska name he chai.
    console.log(`DB Connected`);
}) (); //<-- yaha pr semicolon lgana zaruri he kyuki hum IIFE ko invoke to kr de rahe he pr end krna zaruri he.

( () => {
    console.log(`DB Connected two`);
}) ();

( (name) => {
    console.log(`DB Connected three ${name}`);
}) ('hitesh');

// () <-1st bracket for function defintion & ()<-2nd bracket is for function execution.

// //NOTE: why IIFE is used? <-- sirf ye immediately function execute krne ke liye use nahi hota he, but kai bar hume global scope ke pollution se problem hoti he to uss global scope ke jo variable ya pollution he usko htane ke liye ye use hota he.