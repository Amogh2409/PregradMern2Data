// parameters and arguments
// parameters are the names listed in the function's definition
// arguments are the real values passed to the function


// Parameters are the placeholders in the function definition, while arguments are the actual values passed to the function when it is called.

function greet(name) {  // NAMNE IS PARAMETER
    console.log("Hello, " + name + "!");
}


greet("Amogh") // AMOGH IS ARGUMENT
greet("John") // JOHN IS ARGUMENT

function add(a, b) { // A AND B ARE PARAMETERS
    return a + b;
}   

let sum = add(5, 10); // 5 AND 10 ARE ARGUMENTS
console.log("Sum:", sum); // Output: Sum: 15