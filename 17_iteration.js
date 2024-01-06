// for loops in javascript

for (let i = 0; i < 10; i++) {
    //console.log(`I am number ${i}`)
}


//break
for (let i = 0; i < 10; i++) {
    if(i ==5){
        //console.log("5 detected")
        break;
    }
    //console.log(`I am number ${i}`)
}

//continue
for (let i = 0; i < 10; i++) {
    if(i ==5){
        //console.log("5 detected")
        continue;
    }
    //console.log(`I am number ${i}`)
}


//while and do while loop in javascript
let index = 0 
while(index < 10){
    //console.log(`The value of index is ${index}`)
    index = index+2;
}


do{
    //console.log("this is from do while loop")
    //console.log(`The value of index is ${index}`)
    index++
}while (index < 10)




//higher order loops
const myarr = [1,2,3,5,5,6,7,8]


// for...of loop:

// The for...of loop is used to iterate over the values (elements) of an iterable, like an array.
// It directly gives you the values, making it easier to work with when you want to do something with each element in the array.
// It's a more modern and concise way of looping through elements in an array.

for(const i of myarr){
    console.log(`my numners are ${i}`)
}



// for...in loop:

// The for...in loop is used to iterate over the enumerable properties (including indices) of an object.
// When used with arrays, it gives you the indices (positions) rather than the values directly.



const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {  
//     console.log(key, ':-', value);
    
// }  // this type won't work on objects of using maps



//for in is used in objects 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }




const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )