//Travis Knoll
//Date: 31 July 2014

//Create a Function see how many cups of coffe they will drink in a year.
//Prompt to ask a person what there name is.

var userInfo = prompt("What is you name?");
console.log(userInfo);


//prompt to ask how many cups a person drinks in a day?
var cupsDay = prompt("Hi " +userInfo+ " How many cups of coffee do you drink in a day?");
console.log(cupsDay);

//create a variable for number of days in a year.
var daysYear = 365;

//create an activate for the function to calculate.
var cupsYear = calculatecupsYear(cupsDay,daysYear);