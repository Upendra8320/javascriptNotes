//functions in javascript

// type of function is function
// but function is also a function and also an object

// fucntion without argument
function sayMyName(){
    console.log("U")
    console.log("P")
    console.log("E")
    console.log("N")
    console.log("D")
    console.log("R")
    console.log("A")    
}
// sayMyName();


//function with arguments
function addnum(num1, num2){
    console.log(num1+num2)
}
// addnum(1,2)



// if we want the return value form function 
function subnum(num1, num2){
    let result = num1 - num2;
    return result
}
// const result = subnum(5,2)
// console.log("result:", result)



// function loginUserMessage(userName)
// {
//     return `${userName} Just loggedIn`
// }
// console.log(loginUserMessage("Upendra")); 



//function with some conditions
function loginUserMessage(userName = "sam")
{
    if(!userName){
        console.log("Please enter your name");
        return 
    }
    return `${userName} Just loggedIn`
}
// console.log(loginUserMessage()); //here argument is not passed so default parameter of function will execute
// console.log(loginUserMessage("Upendra")); //here argument is passed so argument will override the default parameter and this will be counted



//this types of function is used in cart of ecommerce
function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,5000,300,100));


//handle objects in functions
const user = {
    userName : "upendra",
    price : 1600
}

function handleObject(anyobject){
console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`)
}
//handleObject(user);


//handle arrays in functions
function handlearray(array){
    let arradd = 0;
    for(i =0; i< array.length; i++){
        arradd += array[i];
    }
    console.log(arradd)
}
handlearray([1,2,3,4,5,6]);




