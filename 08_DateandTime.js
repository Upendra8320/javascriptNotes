// dates and times

let myDate = new Date();

// Note: type of Date is object 

// console.log(myDate);

//console.log(myDate.toString()); // output: Thu Jan 04 2024 17:14:38 GMT+0530 (Indian Standard Time)

// console.log(myDate.toDateString()); //  output : Thu Jan 04 2024

// console.log(myDate.toLocaleDateString()); //output: 1/4/2024

//console.log(myDate.toLocaleString())  // output: 1/4/2024, 5:16:10 PM

let myNewDate1 = new Date(2023, 0, 21);
//console.log(myNewDate1.toDateString()); //output : Sat Jan 21 2023

let myNewDate2 = new Date(2024, 0, 11, 5, 6)
//console.log(myNewDate2.toLocaleString()); //output : 1/11/2024, 5:06:00 AM

let myNewDate3 = new Date("01-12-2002");
//console.log(myNewDate3.toLocaleString()) //output: 1/12/2002, 12:00:00 AM

let myTimeStamp = Date.now();
//console.log(myTimeStamp); // this gives us the time stamp 
//console.log(myNewDate3.getTime());
//console.log(Math.floor(Date.now()/1000));  // this is the conversion in seconds


//day date and month functions/methods
// Todays date : - 04 jan 2024
let newDate = new Date();
//console.log(newDate.getMonth()+1) // output: 1 here in javascript months index start from 0 so we add +1 so that we get perfect month value
//console.log(newDate.getDate()) //output: 4
//console.log(newDate.getDay())  //output: 4



//Note : customized date or day using localeString
/*console.log( newDate.toLocaleString("default",{
    weekday : "long"
}))
*/



