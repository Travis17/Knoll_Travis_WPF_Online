//Travis Knoll
//Date: 22 July 2014
//Conditional_Wacky 

//Prompt person to ask age.
var personAge = prompt("What is your age so we can see what kind of movie you can watch?");
console.log(personAge);

//Prompt do you have kids?
var numKids = prompt("How many kids do you have?");
console.log(numKids); 

//Create variables for else if statement.
var youngAge = 18;
var midAge = 21;
var oldAge = 50;

//Create a conditional to show which type of movie rating to watch.
if(personAge < youngAge){
	//kids under 18 can only watch a G rated movie
	alert("You can only watch G rated movies.");
	console.log("You can only watch G rated movies.");
	//create an else if if the person has a parent present there.
}else if(numKids < midAge < oldAge){
	alert("Go watch what you like as long as you have a parent there.")
	console.log("go watch what you like and long as you have a parent there.");
	//create else for person that is old enough to watch rated PG-13 or R movies.
}else{
	alert("You can watch PG-13 or an R rated movie.")
	console.log("You can watch PG-13 or an R rated movie.");

	//End of assignment.
}