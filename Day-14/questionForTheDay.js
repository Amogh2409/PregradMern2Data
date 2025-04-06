                        // Type Conversion & Coercion


// What will Number(undefined) return?
// What is the difference between type conversion and type coercion in JavaScript?
// How do you convert a number to a string in JavaScript?
// What will Boolean(0) and Boolean("0") return?
// How can you convert a string "123" into a number?
// What happens if you add a number to a string?



                        // if, else, switch


// 1. Check if a number is positive, negative, or zero
let num = 0;

// Write your if-else logic here

// 2. Check if a person is eligible to vote (age >= 18)
let age = 20;

// Write your if-else logic here

// 3. Check whether a given year is a leap year
let year = 2024;

// Write leap year check using if-else

// 4. Find the largest of two numbers
let a = 15;
let b = 20;

// Write if-else logic to find largest number

// 5. Check whether a number is even or odd
let number = 11;

// Write logic to check even or odd

// 6. Grading system
let marks = 85; 

// Write grading logic:
// 90-100: A, 80-89: B, 70-79: C, 60-69: D, <60: F


// 7. Print day of the week based on number (1-7)
let day = 3;
// Use switch to print: 1 = Sunday, 2 = Monday, ..., 7 = Saturday

// 8. Check if a character is a vowel or consonant
let letter = 'e';
// Use switch to determine vowel or consonant

// 9. Simple calculator using switch
let x = 10, y = 5;
let operator = "+";
// Use switch to perform +, -, *, / and print result

// 10. Print price based on fruit
let fruit = "apple";
// Use switch to print: apple → ₹100, banana → ₹60, mango → ₹120


//                         For Loops

// 1. Print numbers from 1 to 10 using a for loop
// 2. Print even numbers from 2 to 20
// 3. Calculate sum of first 10 natural numbers
// 4. Print multiplication table of 5
// 5. Find the factorial of a given number

//                          While Loops

// 1. Print numbers from 1 to 10 using a while loop
// 2. Print even numbers from 1 to 20 using a while loop
// 3. Calculate sum of first 10 natural numbers using a while loop
// 4. Print multiplication table of 5 using a while loop
// 5. Find the factorial of a given number using a while loop
// 6. Reverse a number using a while loop

//                         Do While Loops

// 1. Print numbers from 1 to 10 using a do while loop
// 2. Print even numbers from 1 to 20 using a do while loop
// 3. Calculate sum of first 10 natural numbers using a do while loop
// 4. Print multiplication table of 5 using a do while loop
// 5. Find the factorial of a given number using a do while loop


//                          for in loops

// 1. Iterate over an array and print each element
// 2. Iterate over an object and print key-value pairs
// 3. Create an object and use for-in to print properties


//                           for of loops

// 1. Iterate over an array and print each element
// 2. Iterate over a string and print each character
// 3. Use for-of to iterate over a Set and print values
// 4. Use for-of to iterate over a Map and print key-value pairs
// 5. Use for-of to iterate over a NodeList and print elements



// Output?
function testScope() {
    if (true) {
      let secret = "hidden";
      console.log(secret);
    }
    console.log(secret); // Will this line work?
  }
  testScope();



//   Q3: Identify the scope:
  let x1 = 5;

  if (true) {
    let y = 10;
  }
  
  console.log(x1); // ?
  console.log(y); // ?
  

  function demo() {
    var a = 10;
  }
  console.log(a);  // Yes or No?