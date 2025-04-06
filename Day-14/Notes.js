// Notes on Type Conversion & Coercion, Control Flow (if, else, switch)

// Type Conversion & Coercion
// Type Conversion: Explicitly converting a value from one type to another.
let num = "42";
let convertedNum = Number(num); // Converts string to number
console.log(convertedNum); // 42

let boolValue = Boolean(1); // Converts number to boolean
console.log(boolValue); // true

let strValue = String(100); // Converts number to string
console.log(typeof(strValue)); // "100"

// Type Coercion: JavaScript automatically converts types during operations.
let result = "5" - 2; // "5" is coerced to a number
console.log(result); // 3

let concatResult = "5" + 2; // 2 is coerced to a string
console.log(concatResult); // "52"

let booleanCoercion = !!"non-empty string"; // Non-empty strings are truthy
console.log(booleanCoercion); // true

// Control Flow: if, else, switch

// if-else statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// if-else if-else ladder
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");

} else if (score >= 60) {
    console.log("Grade: C");
} 
else {
    console.log("Grade: C");
}

// switch statement
let Day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
        break;
}

// Notes on Switch in JavaScript

// The `switch` statement is used to perform different actions based on different conditions.
// It evaluates an expression and matches the value of the expression to a case clause.

let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("You selected apple.");
        break; // Exits the switch block
    case "banana":
        console.log("You selected banana.");
        break;
    case "orange":
        console.log("You selected orange.");
        break;
    default:
        console.log("Unknown fruit."); // Executes if no case matches
        break;
}

// Key Points:
// 1. The `break` statement prevents the execution from falling through to the next case.
// 2. The `default` case is optional and executes if no other case matches.
// 3. Cases are compared using strict equality (===).



// 7. Print day of the week based on number (1-7)
// let day = 3;

// 1-sunday
// 2-monday
// 3-tuesday
// 4-wednesday
// 5-thursday
// 6-friday
// 7-saturday

// 8. Check if a character is a vowel or consonant
// let letter = 'e';



