//this is global scope
var c = 200

if (true) {
  //this is block scope
  let a = 10; // a is not accessable out side of this scope
  const b = 20; // b is not accessable out side of this block scope
  var c = 20; // this c will be accessed because it comes after the other C's 
}

// console.log(a);
// console.log(b); 
//console.log(c);


// developers mostly don't use var because of it scope issue



//scope level and mini hoisting - lecture 22 

function  one(){
  const usename = "upendra"

  function two(){
    const website = "Youtube";
    console.log(username)  // this will be executed cause this variable is in parent function so child function can access all variable in parent functions
  }
  //console.log(website)  // this won't be executed because this is inside the scope of function two
  //two();
}

//one();

if (true){
  const username = "upendra"
  if(username === "upendra"){
    const website = "youtube"
    //console.log(username + website)
  }
  //console.log(website) // This show error because website is accessable outside its's scope
}
//console.log(username) // this also holds the same reason like above variable


// ++++++++++++++++++++++++++++++ interesting concept ++++++++++++++++++++++



// this function can work either way like if we call this after function declaration or before function declaration
addone(5);
function addone(num){
  return num +1;
}


// this is also called as expressions
// this function won't work if we call this before function before it's declaration. This is also a concept of hoisting
//suppose we declare the function with var then it will show that addtwo is not a function
const addtwo = function(num){
  return num + 2;
}
addtwo(5)
