//Travis Knoll
//Date 21 July 2014


//If the temp is more than 75 we will go to the beach. If not we will got o the movies.
var userInput = prompt("What is your current body weight?");
console.log(userInput);

//create a variable for the current temp.
var heavyWeight = 250;

if(userInput < heavyWeight){
	alert("You Need to gain some weight");
	console.log("You need to gain some weight");
}else{
	alert("You qualify for the heavy weight division");
	console.log("You qualify for the heavy weight division");
}