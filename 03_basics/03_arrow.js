// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to our website`);
//         console.log(this); //this <-- yaha pr current context print krwa dega jaise user ki sare key and values.
        
//     }
// }

// // NOTE: this <-- refers to the current context(mtlb jaise user ke scope ke ander username ko agr acces krna he to hum {this.username} likh kr acces krte he usee).
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //result: {} <-- ye isiliye empty aya kyuki current global scope me ek empty object he, but jab hum ye same chiz browser(inspect->console) pr run krte he to windows object ki sari detail ati he kyuki wo waha pr pre-injected he.

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function chai() {
//     // console.log(this); //this <-- yaha pr pre-defiend kuch chize hoti he this ke liye functions me but not in objects.
//     let username = "hitesh"
//     // console.log(this.username); //result: undefined <-- kyuki hum objects me ese access kr sakte he pr functions me nahi.
// }

// chai()

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //how to make arrow functions:-
// const chai = function () {
//     let username = "hitesh"
//     // console.log(this.username);
//     // console.log(this);
// }

// // arrow functions :-
// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
//     console.log(this); //result: {}
// }

// chai()

// -------------
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// //one more method to write arrow function is : implicit return (i.e; hum man lete he ki hume bs ek line me hi return krna he, tab hume return likhne ki bhi zarurat nahi he wo auto matically return hi kr raha hota he).
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) // <--yaha round brackets lgaya to "return" nahi likhna hoga pr agr curly backets lgae to "return" keyword likhna padega.
// const addTwo = (num1, num2) => ({username: "hitesh"}) //Result: { username: 'hitesh' }

// console.log(addTwo(3, 4));

// ----------------------
