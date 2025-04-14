// Destructuring (Arrays, Objects) - way to extract values from arrays or properties from objects into distinct variables.
// it's like unpacking a box of items, where you take out each item and place it in its own space for easy access.


const colors = ["red", "green", "blue", "yellow"];

//old way
// const red = colors[0];
// const green = colors[1];
// const blue = colors[2];


//new way
const [first, second, third] = colors; // destructuring assignment

console.log(first); // "red"
console.log(second); // "green"
console.log(third); // "blue"



const numbers = [1, 2, 3, 4, 5];
const [a, , c, , e] = numbers; // Skip 2nd and 4th elements

console.log(a, c, e); // 1, 3, 5


// object destructuring

// Object destructuring is a way to extract properties from an object and assign them to variables. It's like taking specific items out of a box and giving them their own labels for easy access.

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// // old way
// // const name = person.name;
// // const age = person.age;
// // const city = person.city;

// // new way
// const { name, age, country = 'Mumbai' } = person; // destructuring assignment

// // console.log(name); // "John"
// // console.log(age); // 30
// console.log(country); // "New York"



const employee = {
    id: 101,
    personalInfo: {
        name: "Alice",
        age: 28,
        address: {
            city: "Los Angeles",
            zip: "90001"
        }
    },
    jobInfo: {
        position: "Software Engineer",
        salary: 80000
    }
}; 

const {
    personalInfo: {
        name,
        address: {
            city
        }
    }
} = employee; // destructuring assignment

console.log(name); // "Alice"
console.log(city); // "Los Angeles"