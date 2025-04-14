// JSON - javaScript Object Notation
// JSON is a lightweight data interchange format

// JSON is easy for humans to read and write
// JSON is easy for machines to parse and generate



// const user1 = {  
//     name: "John",
//     age: 30,
//     city: "New York",
//     hobbies: ["reading", "traveling"],
//     isEmployed: true,
//     };

// const Sting = JSON.stringify(user1);
// console.log(Sting);
// console.log(typeof Sting); // string
// console.log(user1); // { name: 'John', age: 30, city: 'New York', hobbies: [ 'reading', 'traveling' ], isEmployed: true }
// console.log(typeof user1); // object



// const user2 = JSON.parse(Sting);
// // this converts the string back to an object


const user = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "traveling"],
    isEmployed: true,
};


// save to local storage
localStorage.setItem("userData", JSON.stringify(user));


// retrieve from local storage
const userString = localStorage.getItem("userData");

const userObject = JSON.parse(userString);

console.log(userObject); // { name: 'John', age: 30, city: 'New York', hobbies: [ 'reading', 'traveling' ], isEmployed: true }