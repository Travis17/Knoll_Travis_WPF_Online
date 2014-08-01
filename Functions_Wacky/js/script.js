//Travis Knoll
//Date: 31 July 2014
//Assignment: Function_Wacky

//Create the problem to solve. How much wood could a woodchuck chuck if a woodchuck could chuck wood?
var sayHi = alert("Hi, lets find out how much wood a woodchuck can chuck if a woodchuck could chuck wood.");
console.log("Hi, lets find out how much wood a woodchuck can chuck if a woodchuck could chuck wood?");

//create a variable for user interaction and state how many wood chucks there will be.
var userInfo = prompt("How many woodchucks are in your area?");
console.log(userInfo);

//create a variable for the number logs a woodchuck can chuck in a day.
var logsDay = 5;

//create an activation for the function to work.
var woodChuck = calculatewoodChuck(userInfo,logsDay);
console.log(woodChuck);
alert(woodChuck);

//create a function.
function calculatewoodChuck(u,l){
	return u * l;
}
/*
//create an else if.
if(woodChuck > logsDay){
	console.log("This is how much wood your woodchuck chucked today.");
}else if(userInfo < 1){
	console.log("There is no wood chucks chucking any wood in your area");
}
 //end of assignment
 */


//create a ternany operator to answer the woodchuck.
(woodChuck > logsDay) ? console.log("This is how much woodchuck chucked today.") : console.log("There is no woodchucks is your area.");

//End of assignment
