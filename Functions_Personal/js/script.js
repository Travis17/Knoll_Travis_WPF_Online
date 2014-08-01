//Travis Knoll
//Date: 31 July 2014

//Create a Function see how many cups of coffe they will drink in a year.
//Prompt to ask a person what there name is.

var userInfo = prompt("What is you name?");
console.log(userInfo);


//prompt to ask how many cups a person drinks in a day?
var cupsDay = prompt("Hi " +userInfo+ " How many cups of coffee do you drink in a day?");
console.log(cupsDay);

//alert to see the calculate for how many they will drink in a year.
alert("Thank for the information lets see how many you will drink in a year?");

//create a variable for number of days in a year.
var daysYear = 365;

//create an activate for the function to calculate.
var cupsYear = calculatecupsYear(cupsDay,daysYear);
console.log(cupsYear);
alert(cupsYear);

//create the function for cups of coffee daily times cups a year.
function calculatecupsYear(c,d){
	return c * d;
}

//create an if else statement to let the person know to brush their teeth or grab a piece of gum.
if(cupsYear > daysYear){
	console.log("You should remember to brush your teeth");
	alert("You should remember to brush your teeth!")
}else{
	console.log("You should be good with a fresh piece of gum!");
	alert("You should be fine with a piece of gum!")
}




