// singleton (NOTE: jb litrals se bnae -> singleton nahi banega;  jb constructor se bnae -> tb singleton banega)

// 2 ways to declare 'objects' : 1. literals        2. constructors

// 1. Object literals:
// yaha object key value pair ki form me chlta he.

// important data type in js -> symbol;
const mySym = Symbol("key1") 

const JsUser = {
    name: "hitesh", // yaha 'name' he to jo wo asal me string ke form me ata he.
    "full name": "hitesh chaudhary",
    [mySym]: "mykey1", //syntax to declare 'Symbol'
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email); //old way -> hitesh@google.com
// console.log(JsUser["email"]); //new way -> hitesh@google.com
// // //console.log(JsUser.full name); //not the corect way , even not possible, hence here old way fails.
// console.log(JsUser["full name"]); //result -> hitesh chaudhary
// console.log(JsUser[mySym]); //mykey1

// //how we change values of key-> just overwrite it:
JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser["email"]); //result => hitesh@chatgpt.com -> instead of "hitesh@google.com"

// ab agr hum lock krna chahate he apni key ki value ki koi change na kr pae so we use'freeze'.
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);
// console.log(JsUser['email']); //hitesh@chatgpt.com

// // // now we are looking how functions act in JS, we can declare it just like variables also:

JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`); // string to back-ticks <-- this is called string Interpolation.|| here   we use { this method } If we want to reference same object and we get different properties in this object.
}

// console.log(JsUser.greeting); //[Function (anonymous)] <-- yaha function execute nahi hua he bs uska reference aya he.
// console.log(JsUser.greeting()); //here function is executed.
console.log(JsUser.greetingTwo());
