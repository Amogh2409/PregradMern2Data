const person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const person2 = {
    firstName   : "John",
    lastName    : "Doe",
    age         : 50,
    eyeColor    : "blue",
    id          : 5566,
    fullName    : function(){
        return this.firstName+ " " + this.lastName;
    }
  };


const person = {};

person.firstName = "Amogh";
person.lastName = "Saxena";
person.age = 24;
person.eyeColor = "Brown";


// console.log(person.firstName + " "  + person["lastName"] + " is a FullStack Instructor");
console.log(person2.fullName() + " is a FullStack Instructor");

const newObject = person1;

newObject.age = 10;


console.log(person1.age);