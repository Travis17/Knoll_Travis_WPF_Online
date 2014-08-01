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

//create a variable for area in which the said woodchuck can cover in a day.
var width = 5;
var height = 7;

//create an activation for the function to work.
var woodChuck = calculatewoodChuck(userInfo, logsDay, width, height);



