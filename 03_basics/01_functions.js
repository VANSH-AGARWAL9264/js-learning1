// syntax of functions:
function sayMyName(){
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}

// // //NaN <--- Not a Number

// sayMyName() //<-- to call function

// function addTwoNumbers(numbers1, numbers2){
//     console.log(numbers1 + numbers2);
// }

function addTwoNumbers(numbers1, numbers2){
    // let result = numbers1 + numbers2
    // return result

    return numbers1 + numbers2
}

// addTwoNumbers(2, 3)

const result = addTwoNumbers(3, 5)

// console.log("Result : ", result);

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hitesh"));

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){ // <---  ... this is rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); //200<-val1, 400<-val2, 500 and 2000<-...num1 leke chla jaega.


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

// handleObject({
//         username: "sam",
//         price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue (getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 100, 600]));



