// Template Literals allows us to use variables in strings without using concatenation.
// write multi line Strings

const name = "John";

// ``

console.log(`Hello, my name is ${name}.`); // Hello, my name is John.

console.log(`This is a multi-line string.
This is the second line.`); // This is a multi-line string.

// const intro = "My name is " + name + " and I am " + age + " years old.";


const Name = "Amogh";
const age = 22;

const intro = `My name is ${Name} and I am ${age} years old.`;

console.log(intro);
// Output: My name is Amogh and I am 22 years old.


const a = 5;
const b = 10;

console.log(`Sum of ${a} and ${b} is ${a + b}`); // Sum of 5 and 10 is 15.



function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
  }
  
  console.log(greet("Amogh"));
  // Output: Hello, Amogh! Welcome to JavaScript.
  






const product = "Smartphone";
const price = 19999;
const brand = "Redmi";

// Write a template string:
// "You selected a Redmi Smartphone, priced at ₹19999."
