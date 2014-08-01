//Travis Knoll
//Date 1 Aug 2014
//Assignment Function_Industry

//create a prompt to say hi and ask the user their name.
var hiUser = prompt("What is your name, and then let see the status of your smart phone?")

//create a problem. What is a person megapixels for their smart phone given their height and width.
var userHeight = prompt("Thanks "+hiUser+" what is the height of your smart phone, in inches?");
console.log(userHeight);

//create a variable for the user width of the phone.
var userWidth = prompt("What is the width of your smart phone, in inches?");
console.log(userWidth);

//activate the function.
var megaPixels = calculatemegaPixels(userHeight,userWidth);
console.log(megaPixels);

//create a function to calculate the persons megaPixels.
function calculatemegaPixels(u,u){
	return u * u * 35;
}

//create an if statement to let them know what they have.
if(megaPixels > 350){
	console.log("You must have a new phone!");
	alert("You must have a new phone!");
}else{
	console.log("Perhaps it is time for an upgrade!");
	alert("Perhaps it is time for an upgrade!");
}

//End of assignment Function_Industry.
