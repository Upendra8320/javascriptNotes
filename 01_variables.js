const accountId = 123456  //const does not allow to reassign it value and does not allow to redeclare the variable with the same name
let accountEmail = "upendra@gmail.com"  //let can be reassigned but cannot be declared again
var accountPassword = "123456"; // var can be reassigned and can be redecalerd again 
accountCity = "surat";
let accountState;  //this is only declared but not assigned so while printing it will show it is undefined



//accountId = 232  //not allowed to change the const variable
accountEmail = "upendravruti@gmail.com"
accountPassword = "456738883"
accountCity="bharuch";



/* Prefer not to use var
 beacuse of issue in block scope and functional scope
*/



console.table([accountEmail, accountId, accountPassword,accountCity,accountState]) //.table is used to see the values in tabular format

