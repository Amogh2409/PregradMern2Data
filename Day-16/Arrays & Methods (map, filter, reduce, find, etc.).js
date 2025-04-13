// let fruits = ["apple", "banana", "mango"];
// console.log(fruits[0]); // "apple"
// console.log(fruits[1]); // "banana"

// An array is just a list of items stored in one variable. You can think of it as a box that can hold multiple items. Each item in the array has an index, which is its position in the list. The first item has an index of 0, the second item has an index of 1, and so on.

// map()
// filter()
// reduce()
// find()
// forEach()
// some()
// every()
// includes()
// push(), pop(), shift(), unshift()

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((num) => num * 2); //i want to modify all items and get a new array

console.log(doubled);

let evenNumbers = numbers.filter((num) => num % 2 === 0); // i want only the items that match something
console.log(evenNumbers);

let total = numbers.reduce((prev, curr) => prev + curr, 0); // i want one final output from all items
console.log(total);

let found = numbers.find((num) => num > 3); // i want to find the first item that matches something
console.log(found);

numbers.forEach((num) => console.log(num));


let hasEven = numbers.some((num) => num % 2 === 0); // i want to check if any item matches something
console.log(hasEven);


let allEven = numbers.every((num) => num % 2 === 0); // i want to check if all items match something
console.log(allEven);


let includesThree = numbers.includes(3); // i want to check if an item exists in the array
console.log(includesThree);
console.log(numbers.includes(6)); // false


let fruits = ["apple", "banana", "mango"];
fruits.push("orange"); // add to the end of the array
console.log(fruits); // ["apple", "banana", "mango", "orange"]  

fruits.pop(); // remove from the end of the array
console.log(fruits); // ["apple", "banana", "mango"]

fruits.shift(); // remove from the beginning of the array
console.log(fruits); // ["banana", "mango"]

fruits.unshift("kiwi"); // add to the beginning of the array
console.log(fruits); // ["kiwi", "banana", "mango"]




let data = [5,12,18,25];

let result = data.filter(num => num > 10)  // [12, 18, 25]
.map(num=> num*2)                           // [24, 36, 50]
.reduce((a,b) => a+b, 0);                   // 24 + 36 + 50 = 110
console.log(result);