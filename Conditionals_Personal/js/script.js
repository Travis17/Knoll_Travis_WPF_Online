//Travis Knoll
//Date: 23 July 2014
//Conditional_Personal

//If I ride my bike at least 20 miles a week I can eat a steak. 
//If not I have to eat a salad.

//Prompt given for how many miles ina week.
var milesBike = prompt("How many miles did you ride you bike today?");
console.log(milesBike);

//alert to say thanks one more question.
alert("Thanks we have one more question...");

//Prompt given for how many miles in a week
var weeklyMiles = prompt("How many miles total did you ride your bike this week?");
console.log("How many miles did you ride your bike this week?")

//Create variable for miles in a week needed to eat the steak.
var milesNeeded = 20;

//Use conditional to find out what to eat.
if(milesBike + weeklyMiles > milesNeeded){
	alert("You should relax and eat a big steak today!");
	console.log("You should relax and eat a big steak today!");
}else{
	alert("You need to eat a salad today lazy bones");
	console.log("You need to eat a salad today lazy bones");
}








