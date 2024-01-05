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
console.log(c);


// developers mostly don't use var because of it scope isseu
