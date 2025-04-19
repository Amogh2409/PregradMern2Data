// try{

// }
// catch(e){
//     console.log(e.message);
// }
// finally{
//     console.log("finally block executed");
// }



// try{
//     let a = 10;
//     let b = 0;
//      b = a + c;
// }
// catch(err){
//     console.log("❌ Something went wrong:", err.message);
// }finally{
//     console.log("finally block executed");
//     console.log("This block always executes, regardless of an error.");
// }



let age = 15;

try {
    if (age < 18) {
        throw new Error("You must be at least 18 years old.");
    } else {
        console.log("You are eligible to vote.");
    }
}
catch (error) {     
    console.log("❌ Error:", error.message);
}
finally {   

    console.log("Thank you for using our voting eligibility checker.");
}