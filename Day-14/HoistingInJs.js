// Hoisting in js
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope during the compile phase.
// This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.

// console.log(x); 
// var x = 5; // Declaration is hoisted, but initialization is not
// console.log(x); 

// var a; 
// console.log(a); // undefined
// a = 10; // Initialization happens here


// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 20; // Declaration and initialization


greet()


const greet = function sayHello() {
    console.log("Hello, World!"); // Function body is executed here
}