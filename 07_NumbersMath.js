//Numbers and Math Methods

// 1. Numbers

const score = 400;
// console.log(score)

const balance = new Number(100);
// console.log(balance);


//toString() Method
//this method is used to convert this number into the string and then string methods can be used onto it
// console.log(balance.toString().length)


// toFixed() Method
//this method is used to add the values after decimal point for eg 100.00 so the zero's after point are due to toFixed
// console.log(balance.toFixed(2))


// toPrecision() Method
const preNumber = 123.89998
// console.log(preNumber.toPrecision(3));


//toLocaleString
// this is used to represt the number, data and time in the local format of the region. Also we can change it according to it's requirement
const hunderds = 100000000;
// console.log((hunderds.toLocaleString('en-In')));


//+++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

// 2. Maths

//abs() method 
// this converts the value in absolute form like if there is negative value then it will change it to positive

console.log(Math.abs(-10))  // output = 10;


//round() method
// this will change the value and make it round off the number if the value of decimal is above .5 then it will round off to the big number and vise versa
console.log(Math.round(4.6)) // output: 5


//ceil() method
// this will the choose the highest value only while rounding off
console.log(Math.ceil(4.6)) // output: 5


//floor() method
// this will round off the number to lowest 
console.log(Math.floor(4.6)) // output: 5

//
//