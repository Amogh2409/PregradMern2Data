function tempToCelsius(tempInFahrenheit){

    return (5/9) * (tempInFahrenheit - 32);
}



let value = tempToCelsius(77);
console.log("The temperature is " + value + " Celcius");


// block Scopped


function myFunction(){

    let carName = "Volvo";


}