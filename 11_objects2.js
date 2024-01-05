// const object = new Object();  // this is a singleton object

 const tinderUser = {}

 tinderUser.id = "abcd123"
 tinderUser.name = "John Doe"
 tinderUser.isLoggedIn = false;

//  console.log(tinderUser)


const regularUser = {
    email: "upendra@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Upendra",
            lastName:"Kumar"
        }
    }
}

//console.log(regularUser.fullname)
//console.log(regularUser.fullname.userfullname.firstName);  // this is how we can access the nested objects


//****** combining of objects ****** 

// 1. Object.assign()
// 2. spread operator 

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

//const obj3 = {obj1,obj2} // this does not work properly because it will give object inside object 
//console.log(obj3)  // output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj3 = Object.assign({},obj1,obj2)  //here object.assign work like concat operator in arrays. Also give paranthesis is good because we get to now that we will finally get the object only as output 
//so {} are target and other 2 objects are source
// console.log(obj3) // output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const obj4 = {...obj1, ...obj2}
console.log(obj4)   //output:  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }





// while working with data we will get the data in array form so this is how we handle it 

const users = [
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
]

console.log(users[1].email)
console.log(tinderUser)

//console.log(Object.keys(tinderUser)); // this creates the array of [keys] from the object
//console.log(Object.values(tinderUser)); // this create the array of [values] from the object
//console.log(Object.entries(tinderUser));  //The resulting array is an array of [key, value] pairs, making it suitable for array-like operations.

// entries output : [ [ 'id', 'abcd123' ],[ 'name', 'John Doe' ],[ 'isLoggedIn', false ] ]



console.log(tinderUser.hasOwnProperty("isLoggedIn")); // ouput : true .  if property not present in object then it will give false; 