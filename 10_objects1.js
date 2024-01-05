//singleton ==> read 11_object2.js
// Object.create


//this file contains details about object literals only
//object literals
const mySym = Symbol("key1")

const jsUser = {
    name: 'John',
    "full name" : "upendra yadav",
    [mySym] : "mykey1", // this is a way to use symbol in objects. if we simply declare it without brackets then it will be considered as a string only and not symbol
    age: 30,
    city: 'New York',
    email:"john@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.name);  // one way to access the values inside the objects
// console.log(jsUser["name"])  // another way to access the values inside the objects
// console.log(jsUser["full name"])
// console.log(jsUser[mySym]) // this a way to access the symbol in objects 
// console.log(typeof jsUser[mySym])


jsUser.name = "upendra"; //updating values in object
// console.log(jsUser);


//we can alos freeze the object so that values don't change inside it
// Object.freeze(jsUser);

jsUser.email="upendra@gmail.com"  //this won't be executed beacuse of above freeze function
// console.log(jsUser)



//Methods inside an object are known as functions and they have some special properties associated with them
jsUser.greeting = function(){
    console.log("hello world") 
}
// jsUser.greeting()  // calling that function
// console.log(jsUser)


jsUser.greetingTwo = function(){
    console.log(`hello world ${name}`) 
}
jsUser.greetingTwo();

