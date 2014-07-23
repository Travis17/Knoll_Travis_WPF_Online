//Travis Knoll
//Date 21 July 2014


//Gas efficiency of the users car.
var userMiles = prompt("How many miles per gallon does you car get?");
console.log(userMiles);

//What is the percentage of gas left?
var gasTank = prompt("What percentage is left in you tank?");
console.log(gasTank);

var gasCapacity = prompt("How many gallons are in your gas tank?")

//create a variable for the current temp.
var milesNeeded = 200;

if(gasCapacity * gasTank * userMiles < milesNeeded){
	alert("You Need to grab some gas");
	console.log("You need to grab some gas");
}else{
	alert("You can make it without stoping");
	console.log("You can make it without stoping");
}