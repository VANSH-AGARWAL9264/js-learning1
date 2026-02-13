// 2 ways to declare 'objects' : 1. literals        2. constructors

// 2. Constructors:
// const tinderUser = new Object() // it is singleton object ---> result => {}
const tinderUser = {} // it is not singleton object ---> result => {}


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            fisrtname: "hitesh",
            lastname: "chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// NOTE: mostly modern day used method for adding object is spread method:
// const obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);


// jb database se objects aenge tb:
const users = [
    {
        id: 1,
        email: "h@gamil.com"
    },
    {
        id: 1,
        email: "h@gamil.com"
    },
    {
        id: 1,
        email: "h@gamil.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLogged')); //false <--- this method is used to check that ki jo property hum use krne ki soch re he wo humare object me pehle se he bhi ki nahi ?


// ----------------------------------------------        de-structuring of Objects       --------------------------------------------------------------------------------
const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor <--- we can use it ofcourse but sometimes it may become hectic to use it so we have another syntax:
const {courseInstructor: Instructor} = course //isse ab hm sidha courseInstructor likh kr access kr sakte he or agr cousreInstructor name bda lg ra he to {courseInstructor: Instructor} <-- ye syntax de kr name chota bhi kr sakte he...

// console.log(courseInstructor); //hitesh
console.log(Instructor); //hitesh

// ----------------------------------------------        API CONCEPTS       --------------------------------------------------------------------------------
// API comes mostly in JSON (javascript notation) format:
// may be like obejcts or be like objects in array:

// 1.
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//------------------//

// 2.
// [
//     {},
//     {},
//     {}
// ]

//------------------//
