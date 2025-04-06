/**
 * Iterates over a collection of items using various types of loops in JavaScript.
 * 
 * Notes on loops:
 * - `for` loop: Used for iterating a specific number of times, typically when the number of iterations is known beforehand.
 * - `while` loop: Executes as long as a specified condition evaluates to true. Useful when the number of iterations is not predetermined.
 * - `do...while` loop: Similar to the `while` loop, but guarantees at least one execution of the loop body before checking the condition.
 * - `for...in` loop: Iterates over the enumerable properties of an object. Commonly used for objects but should be used cautiously with arrays.
 * - `for...of` loop: Iterates over iterable objects like arrays, strings, maps, sets, etc. Provides direct access to the values of the iterable.
 * - `Array.prototype.forEach`: Executes a provided function once for each array element. Useful for array iteration with a callback function.
 * 
 * Ensure proper use of loops to avoid infinite loops or performance issues.
 */


for( let i = 0; i < 5; i++) {
    console.log("Hello World!" + i);
}

// Print even numbers from 2 to 20 using a for loop
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



let i = 5;
while (i < 5) {
    console.log("Hello World! from while" + i);
    i++;
}


// do while loop
// Exucutes the block once before checking the condition

let j = 5;
do {
    console.log("Hello World! from do while" + j);
    j++;
}
while (j < 5);

// Simulate user login attempts (run at least once, max 3 tries)

const correctPassword = "password123";
let userInput;
let attempts = 0;


do{
    userInput = prompt("Enter password: ");
    attempts++;
    if (userInput === correctPassword) {
        console.log("Login successful!");
        break;
    } else {
        console.log(`Incorrect password. Try again. Attempts left: ${3 - attempts}`);
    }
}while(attempts < 3);
if(userInput !== correctPassword) {
    console.log("Too many attempts. Access denied.");
}



// for...in loop
// Used to iterate over the properties of an object


let student = { name: "Amogh", age: 23, course: "MERN" };

for( let key in student){
    console.log(key + ": " + student[key]);
}

// 11. Loop through an object of a car with keys: brand, model, year, color
let car = { brand: "Toyota", model: "Camry", year: 2020, color: "blue" };

for (let key in car) {
    console.log(key + ": " + car[key]);
}


// for...of loop
// Used to iterate over iterable objects like arrays, strings, etc.

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

// Count vowels in a given string
// Print characters of your name one by one

let name = "Amogh";
for (let char of name) {
    console.log(char);
}