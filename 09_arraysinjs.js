//arrays in javascript

const myArr = [0,1,2,3,4,5,true, "upendra","world"]  //mix array
const myHeros = ["ironman","hulk","thor"] // string array
const numArr = [ 1,2,3,4,5,6]  // number array

// another way to declare array
const myArr2 = new Array(1,2,3,4,5,6)


// Note: javascript array-copy-operations create shallow copies(this means it will share the same reference point of the array). (All standard built in copies operation with any javascript objects create shallow copies rather than deep copies(this does not share the same reference))

//simply if any array secondary array changes then primary array values will also change.


//Array methods
myArr.push("hello")     //add element at last index of the array

myArr.pop()             //remove element from last index of the array
//console.log(myArr)

myArr.shift()           //removes first element of an array and returns it
//console.log(myArr)

myArr.unshift("world")  //adds elements at the beginning of the array
//console.log(myArr)


let i=myArr.indexOf("world");   //returns the first occurrence index of the
//element in the array ,if not found return -1
//console.log(i);

let j=myArr.lastIndexOf("world");    //returns the last occurrence index
//of the element in the array ,if not found return -1
//console.log(j);


//include is used to check the whether the array contains the number/string or not
//console.log(myArr.includes(2))


//join method bind the array in one single entity and converts it into string
const newArr = myArr.join();
//console.log(myArr)      //output: [ 'world', 3, 4, 5, true, 'upendra', 'world' ]
//console.log(newArr)  //output : world,3,4,5,true,upendra,world
//console.log(typeof newArr) // output: string



//slice() method is used to extract a portion of an array and returns a new array without modifying the original array.
const sliceArr = myArr.slice(1,3)
// console.log("A", myArr)
//console.log(sliceArr)               


//splice method is used to remove or add elements to the array, this modifies the original array only
const spliceArr = myArr.splice(1,2)        //it removes two elements starting from index also changes the original array
//console.log("B", myArr)
//console.log(spliceArr)



//Array part2

//push method
//this will work with original array only what ever changes will be changed in original array
const marvel_heros = ["thor", "ironman", "wonda","captainAmerica"];
const dc_heros = ["supeman", "batman", "aquaman","flash"]

//marvel_heros.push(dc_heros) // this will push the whole array in marvel_heros array as a array itself.
//console.log(marvel_heros)  //for eg output: ['thor','ironman','wonda','captainAmerica',[ 'supeman', 'batman', 'aquaman', 'flash' ]]
//console.log(marvel_heros[4][1]);  // this is how we access the array inside array


//concat method
//the concat  method array generates new array and the it is displayed
const newcontact = marvel_heros.concat(dc_heros);
// console.log(newcontact)
// console.log(marvel_heros)


//spread opreator(...)
//this makes the shallow copies
//it will spread out the values in the array and will be added to the new variable or existing variable
// this is also said to be another way to concat mulitple arrays
const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros)



//flat method 
//this flat method removes nested arrrays from an array if any present 
// we just to give its dept to remove or we can just giver infinity.
const another_array = [1,2,3,4,[4,5,6,7],[8,9,4,5,[1,2]]];
const useable_array = another_array.flat(Infinity);
// console.log(useable_array)  // output: [1, 2, 3, 4, 4, 5,6, 7, 8, 9, 4, 5,1, 2]




//Note: while doing data scrapping this is used
//console.log(Array.isArray("upendra")) // this will check that the data received is array or not
//console.log(Array.from("Upendra"))  // this will convert any data format into Arrays format
const arrayvalues = Object.values({name:"upendra"})
//console.log(Array.from(arrayvalues)) // to convert this object in arrays we need to tell that for what we need to make array key or values. else it will give us an empty array

let score1 = 100;
let score2= 150;
let score3 = 300;
//console.log(Array.of(score1,score2,score3))   // this will combine the values in array form 