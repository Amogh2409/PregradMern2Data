// spread operator ...

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Spread operator to combine arrays

console.log(arr2); // [1, 2, 3, 4, 5]


const original = [10,20,30];
const copy = [...original]; // Spread operator to create a shallow copy
console.log(copy); // [10, 20, 30]



const obj1 = { a: 1, b: 2 };

const updatedObj = {
    ...obj1,
    c: 3,
    d: 4
}

console.log(updatedObj); // { a: 1, b: 2, c: 3, d: 4 }


const obj2 = { x: 10, y: 20 };
const mergedObj = { ...obj1, ...obj2 }; // Spread operator to merge objects
console.log(mergedObj); // { a: 1, b: 2, x: 10, y: 20 }


// ...rest operator
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers; // Rest operator to collect remaining elements into an array

console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]


const obj = { a: 1, b: 2, c: 3 };
const { a, ...restObj } = obj; // Rest operator to collect remaining properties into an object

console.log(a); // 1
console.log(restObj); // { b: 2, c: 3 }