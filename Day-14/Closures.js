// Closure functions are functions that have access to the outer function's scope even after the outer function has returned.
// This is achieved through the concept of closures, which allows inner functions to "remember" the environment in which they were created.

function outer() {
    let name = "Amogh";
  
    function inner() {
      console.log("Hello, " + name); // inner remembers 'name'
    }
  
    return inner;
  }
  
  const greet = outer();  // outer is done executing
  greet(); // ✅ Hello, Amogh (closure remembers name)
  
// you remember from the outer function


function bankAccount() {
    let balance = 1000;
  
    return {
      deposit: function(amount) {
        balance += amount;
        console.log(`New balance: ₹${balance}`);
      },
      withdraw: function(amount) {
        if (balance >= amount) {
          balance -= amount;
          console.log(`New balance: ₹${balance}`);
        } else {
          console.log("Insufficient funds!");
        }
      }
    };
  }
  
  const myAccount = bankAccount();
  myAccount.deposit(500);  // New balance: ₹1500
  myAccount.withdraw(300); // New balance: ₹1200
  


// A closure = function + its surrounding scope
// Used to preserve state
// Helps build private variables in JavaScript