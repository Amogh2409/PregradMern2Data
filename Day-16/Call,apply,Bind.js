// This keyword
// The this keyword in JavaScript refers to the object that is executing the current function.

// Call, Apply, and Bind
// Call, apply, and bind are methods that allow you to set the value of this in a function.
// They are used to control the context in which a function is executed.
// They are particularly useful when you want to borrow methods from one object and use them in another object.

// The call() method calls a function with a given this value and arguments provided individually.
const person = {
    name: 'John',
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }

};

const person2 = {
    name: 'Jane',
    age: 25
};

//This will refer to person 1
person.greet(); // Hello, my name is John 

//using call to set this to person2
person.greet.call(person2,); // Hello, my name is Jan


// The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).


const person3 = {
    name: "Saxena",
};

function greetAgain(greeting, ending) {
    console.log(`${greeting}, I am ${this.name} ${ending}`);
}
greetAgain.call(person3, "Hello", "Have a nice day!");
greetAgain.apply(person3, ["Hi", "Have a nice day!"]);


//  bind // The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

const newFunc = greetAgain.bind(person3, "Hello", "Have a nice day!");

newFunc(); // Hello, I am Saxena Have a nice day!

//cook -> knows to make food ->  we want this cook to make food in a different restaurant




// Method	    Calls Immediately ?         Pass Args As	        Returns a Function ?
// call	        ✅ Yes	                    Separate values	            ❌ No
// apply	    ✅ Yes	                    Array	                    ❌ No
// bind	        ❌ No	                    Separate values	            ✅ Yes