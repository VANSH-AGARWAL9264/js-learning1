// let a = 10
// const b = 20
// var c = 30

var c = 3000;
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c); //30

// ONE more Example 
// function one(){
//     const username = "hitesh"
//     function two() {
//         website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
//     console.log("one also executed");
    
// }
// one()

// ---------------------------------------------------
if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// -----------------------------------------------------------
// Intresting concept:

// console.log(addone(5));

function addone(num) {
    return num + 1
}

// console.log(addTwo(5)); // // Cannot access 'addTwo' before initialization
const addTwo = function (num){
    return num + 2
}

addTwo(5)