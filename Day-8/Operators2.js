// String Operators         
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators


//                                              String Operators


// let firstName = "Amogh";
// let lastName = "Saxena";
// let fullName = firstName + " " + lastName;
// console.log(fullName); // "Amogh Saxena"


// let str = "Hello";
// str += " World!";

// console.log(str);

// let text1 = "A";
// let text2 = "B";
// let result = text1 < text2;
// console.log(result);




//                                              2️⃣ Logical Operators                                           


// let x = 6;
// let y = 3;

// console.log(x < 10 && y > 1); // true
// console.log(x < 10 && y < 1); // false

// console.log(x == 5 || y == 5); // false
// console.log(x == 6 || y == 0); // true

// let a= 5;
// let b = 10;

// console.log(!(a == b)); // true
// console.log(!(a > b)); // true



// AGE -> 18 TO 25  -> YOUTH DISCOUNT

// let age = 20;
// if (age >= 18 && age <= 25) {
//     console.log("Eligible for a youth discount.");
// }

// let hasTicket = false;
// if (!hasTicket) {
//     console.log("You need a ticket to enter.");
// }


//                                              3️⃣ Bitwise Operators

// Operator	                        Meaning
// & (AND)	                        Performs bitwise AND
// `	`                           (OR)
// ^ (XOR)	                        Performs bitwise XOR (exclusive OR)
// ~ (NOT)	                        Inverts bits
// << (Left Shift)	                Shifts bits to the left
// >> (Right Shift)	                Shifts bits to the right (preserving sign)
// >>> (Unsigned Right Shift)	    Shifts bits to the right (zero-fill)



// console.log(5 & 1); // 1  (0101 & 0001 -> 0001)
// console.log(5 | 1); // 5  (0101 | 0001 -> 0101)
// console.log(5 ^ 1); // 4  (0101 ^ 0001 -> 0100)
// console.log(~5);    // -6 (inverts all bits)

// console.log(5 << 1); // 10 (0101 << 1 -> 1010)
// console.log(5 >> 1); // 2  (0101 >> 1 -> 0010)
// console.log(5 >>> 1); // 2 (same as >> for positive numbers)


// Bit operators work on 32 bits numbers.

// Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
// Operator	Description	               Example	        Same as	        Result	Decimal
//     &	        AND	                5 & 1	        0101 & 0001	    0001	 1
//     |	        OR	                5 | 1	        0101 | 0001	    0101	 5
//     ~	        NOT	                ~ 5	            ~0101	1010	10
//     ^	        XOR	                5 ^ 1	        0101 ^ 0001	    0100	 4
//     <<	        left shift	        5 << 1	        0101 << 1	    1010	 10
//     >>	        right shift	        5 >> 1	        0101 >> 1	    0010	  2
//     >>>	     unsigned right shift	5 >>> 1	        0101 >>> 1	    0010	  2



// 1 & 5 -> 0001 & 0101 = 1


// 5  =  0101
// 1  =  0001
// ----------------
// 5 & 1  =  0001  (Decimal: 1)

// Ternary Operators

// Type Operators



// ? :

// let age = 18;
// let result;
// if (age >= 18) {
//     result = "you can vote";
// }
// else {
//     result = "you cannot vote";
// }
// console.log(result)

// let age = 18;
// let result = age>= 18 ? "You can vote" : " You cannot vote";
// console.log(result);

// let number = 7; 
// let check = (number % 2  === 0) ? "Even" : "Odd";

// console.log(check);


// let score = 90;
// let grade = score >= 90 ? "A" : (score >= 80 ? "B" : "C");
// console.log(grade);


//                                              2️⃣ Type Operators

// console.log(typeof "Hello");   // "string"
// console.log(typeof 10);        // "number"
// console.log(typeof true);      // "boolean"
// console.log(typeof {});        // "object"
// console.log(typeof []);        // "object" (Arrays are special objects)
// console.log(typeof function() {}); // "function"
// console.log(typeof null);      // "object" (Weird JavaScript quirk!)
// console.log(typeof undefined); // "undefined"



// instanceof -> checks if an object is an instance of a class

// class Car{};

// let myCar = new Car();


// console.log(myCar instanceof Car);
// console.log(myCar instanceof Object);






// let a = Number(prompt("Enter first number:"));
// let b = Number(prompt("Enter second number:"));
// let result = (a > 0 && b > 0) ? (a *= b) : 0;

// console.log("Result:", result);





