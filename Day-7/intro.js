// console.log("Hello from the server side or hello from JS");
// document.getElementById("heading").innerHTML = "Hellloooo JS";
// document.getElementById("heading").style.fontSize = '65px';
// document.getElementById("heading").style.color = 'red';
// document.getElementById("heading").style.display = 'none';

// document.getElementById("para").innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Libero fugit veniam rerum commodi, deleniti cum voluptate quae reiciendis illo! Ab eos itaque incidunt minima beatae unde, voluptatibus sequi veritatis optio explicabo, quam ipsum consectetur nobis architecto natus laborum inventore.Ipsam architecto quos ad dolores accusantium eos dolore.Debitis, quod ratione."


// document.write(5+6);   this method should be only used for testing

// alert(6+ 5);


// Variables, Comments, Operators(>,<,=, *), Functions 

// js -> var, let, const, automically

// it is always a vewry good habit to use semicolon when needed and also declare variables

// var x;
// var y;
// var z;

// x = 5;
// y = 6;
// z = x+y;
// console.log(z);



// 1. Always declare variables
// 2. const -> Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.

// let x = 5;
// let y = 6;
// let z = x + y;
// console.log(z);


//                                         Let keyword


// let - block scoped
// let must be declared before use
// let cannot be declared in the same scope


// {
//     var a = "This is a variable";
//     let b = "This is a variable defined by let";

//     console.log(a);
//     console.log(b);

//     var a = "New value";
//     console.log(a);
// }





//                                         Const keyword


// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope



// const pi = 3.14159;
// console.log(pi);


// Always declare a variable with const when you know that the value should not be changed.


// pi = 3.14;
// console.log(pi);

// pi = pi + 10;
// console.log(pi);

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp



// const  -> misleading;
// const = store - value cannot be changed
// const cars = array  reassignment is not allowed, reassignment of constant array is not allowed

// we can change the elements of constant array, properties and hum elements bhi add krr skte hai

// const pi = 3.14;

// const Class = ["Ritek", "Komal", "Manvansh", "Harshit"];

// Class[0] = "Amogh";
// console.log(Class[0]);

// const cars = ["Saab", "Volvo", "BMW"];
  
// cars.push("Audi");
// cars = ["Toyota", "Volvo", "Audi"];
// console.log(cars);

