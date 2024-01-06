// Immediately Invoked Function Expression (IIFE)
//due to global scope pollution and to remove this pollution IIFE is used
// function which are executed immediately 

// this is an normal function
function chai(){
    console.log("db connected")
}
chai();

//()() // first () is used for function defination  and second () is used for function call

//normal function
(function dbconnect(){
    //named iffi
    console.log("db connected1")
})();   // this function is using IIFE


(()=>{
    console.log("dbconncected 2")
})();