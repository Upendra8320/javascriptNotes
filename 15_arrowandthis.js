// arrow functions and this keyword

// this keyword is used to access the values of current objects and it's current context values
const user = {
  username: "Upendra",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to this website`);
    // console.log(this) this tells about the current values/context
  },
};

// user.welcomeMessage(); // ouptput : Upendra , welcome to this website

//user.username ="adi"

//user.welcomeMessage();  // output : adi , welcome to this website
// this was possible to change the name of user due to this because it relies on the current context of object

//console.log(this) // in node this will only give us the empty object {} but if we run the same on browser console then it will show us the window objects which are used in dom manipulations







//this functions types are called as fucntion declaration
/*function chai(){
    let username = "upendra"
    //console.log(this)
    //console.log(this.username) //output : undefined
}*/
//chai();


// this functions types are called as function expression
/*const chai = function(){
    let username = "upendra"
    console.log(this.username) ///output : undefined
}
chai(); */



// this functions are called as arrows functions
const chai = () => {
  let username = "upendra";
  console.log(this);  //output : {}
  console.log(this.username);  // output : undefined
};
//chai();



//normal function
// we mainly use normal function inside the object so that (this)keyword does not create any conflict

/*
function normalFunction() {
    console.log(this);
  }
  
  // Calling the function in the global context
  normalFunction(); // 'this' refers to the global object (e.g., 'window' in a browser)
  
  const obj = {
    method: normalFunction
  };
  
  // Calling the function as a method of an object
  obj.method(); // 'this' refers to the 'obj' object

*/ 




// arrow function
// main explanation of not using this keyword in arrow function

/*
const arrowFunction = () => {
    console.log(this);
  };
  
  // Calling the arrow function in the global context
  arrowFunction(); // 'this' still refers to the global object (e.g., 'window' in a browser)
  
  const obj = {
    method: arrowFunction
  };
  
  // Calling the arrow function as a method of an object
  obj.method(); // 'this' still refers to the global object, not 'obj'
  
*/



// pure arrow function description

const addtwo = (num1, num2) => {
    return num1+num2;
}
console.log(addtwo(5,2))


//implicit return function
// here if we have single line of code than this we do not need to write return keyword

//const addone = (num1, num2) =>  num1+num2;
//const addone = (num1, num2) =>  (num1+num2); we also wrap this in paranthesis if not using return keyword


const addone = (num1, num2) =>  ({name : "upendra"}); // here while returning an object we need to use paranthesis else it will be undefined
console.log(addone(5,2))

