//de-structuring in objects and arrays

const course = {
    name: "computer Network",
    price: 1000,
    duration: "3 months"
}

//de-structuring in objects 

const {price, duration , name:nm} = course // this is how we can destructure the objects 

//we can also give name according to us if name are to big for eg i have given nm to name 
// now we can directly access the values inside the objects by just writing it key
console.log(nm) // output : computer Network
console.log(price)