//Travis Knoll
//Date 24 July 2014
//Conditional_Industry

//Create a prompt to ask a person what there budget is.
var userInfo = prompt("How much is your budget for you new cell phone?");
console.log(userInfo);

//What is your monthly income.
var userIncome = prompt("What is you monthly income?");
console.log(userIncome);

//Create a variable for value of the phone.
var phone = 300;

//Create a conditional for the person to know which operating system to buy.
if(phone > userInfo){
	//alert you can buy the iPhone
	alert("You can buy the iPhone or OS system");
	console.log("You can buy the iPhone or OS system");
}else if(userIncome + userInfo > phone){
	//alert you can buy the Andriod phone
	alert("You can buy the Andriod system Galaxy Note III");
	console.log("You can buy the Andriod system Galaxy Note III")
}else{
	//Whever is left.
	console.log("You need to get another job so you can get a better phone!");
}