// Scopes in js
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope (let, const)
// 4. Lexical Scope (Closure)

let Name = "Amogh"; // Global scope

function greet() {
    let greeting = "Hello"; // Function scope
    console.log(greeting + ", " + Name); // Accessing global variable
}

greet(); // Output: Hello, Amogh


function myFunction() {
    let x = 10; // Function scope
    if (true) {
        let y = 20; // Block scope (let)
        console.log(x + y); // Output: 30
    }

    console.log(y); // Error: y is not defined (y is not accessible here)
    
}


myFunction(); // Output: 30