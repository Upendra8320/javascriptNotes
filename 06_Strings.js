// Concepts of STRINGS

//1. concatination (outdated method)

const name = "upendra"
const repocount = 50
//console.log(name + repocount + "value")




//2. modern methods to concatenate in strings uses backticks(``)

//console.log(`Hello my is ${name}. I have ${repocount} repos`)




//3. another way to declare the string in javascript

const anotherName = new String("Upen-dra");

//console.log(anotherName)

//how to acces the key value pair in this type of declaration

//console.log(anotherName[0]);
//console.log(anotherName.__proto__) // this is used to see the object of string (main this can be displayed on web console)

//length 
// console.log(anotherName.length);

//toUpperCase() Method
// console.log(anotherName.toUpperCase())

//charAt() method
//console.log(anotherName.charAt(2))

// indexOf() method
//console.log(anotherName.indexOf("U"));


//substring() method
// this give the substring of any string from starting index to number of character we need.
const newString  = anotherName.substring(0,4); 
// console.log(newString);


// slice() method
 //slice can be used form backside of the string also so this is more Usefull this work like substring as well as trace the string from backward.
 // we just need to add negative value to use it backwards and it will fetch the string till the end of it character


//const anoterString = anotherName.slice(0,4)  
// const anoterString = anotherName.slice(-4)  
// console.log(anoterString)


// trim() method
// trim method is used to remove extra space form string whether it is at starting or at the ending
// for eg:
const spaceString = "          kimgujaranat nagar      ";
// console.log(spaceString)
// console.log(spaceString.trim())


//replace() method
//this is used to replace some string with some other thing
const url = "https://upendra:yadav.com/:upendra%20yadav"
// console.log(url.replace("%20","_"));


//includes() methods
//this is used to check if the Main string include the word or character's
// console.log(url.includes("upendra"))


//split() Methods
//split is used to split the string depending upon the special character or any word or character or spaces. also this will convert this string into an array
const splitString = url.split(":");
// console.log(splitString)
// console.log(typeof splitString)  //object 



