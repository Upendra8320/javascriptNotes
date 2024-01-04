//1. Primitive 

// this means this is used directly by it's values (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;  //number
const scoreValue = 100.3  //number
const name = "upendra"  //string
const isLoggedIn = false  //boolean
const outsideTemp = null; // null
let userEmail;  //undefined

const id = Symbol('123')   //symbol
const anotherId = Symbol('123')  //symbol

//console.log(id === anotherId);  // output : false => because symbol always consider as unique value


const bigNumber = 999999999999999n;  //bigint
//console.log(typeof bigNumber)


//2. Non Primitive or reference type
// (call by Reference)

// Arrays, Objects, Functions

const heros = ["shaktiman","naagraj", "goga"]  //return datatype : object

let myObject = {
    name: "upendra",
    age: 22
}  //object

const myFunction = function(){
console.log("Hello world")
} //function




// *******************************************************************************

//Types of memory

//1. Stack (Primitive datatypes uses stack memory), 

//here copies of variable values are send so when ever the values changes in secondary Variable that does not affect the primary values

let myYoutubeName = "upendra Yadav"

let anotherName = myYoutubeName;   // here values are copied values 
anotherName = "vayugaming"

// console.log(myYoutubeName)
// console.log(anotherName)


//2. Heap (Non-Primitive types uses heap memory)

//here reference of this values are passed so whenever the value changes in some other Variable that also change in the Original values or variables/objects/arrays/Function

let userOne = {
    email: "upendra@gmail.com",
    upiId: "upendra@ybl"

}

let userTwo = userOne

userTwo.email = "upendravrutti@gmail.com"

// console.log(userOne.email)
// console.log(userTwo.email)