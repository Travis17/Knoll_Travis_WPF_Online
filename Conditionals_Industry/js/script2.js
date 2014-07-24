//Travis Knoll
//Date: 23 July 2014
//Conditional_Industry_Ternary

//Create from the same assignment a Ternary operator


//Create a prompt to ask a person what there budget is.
var userInfo = prompt("How much is your budget for you new cell phone?");
console.log(userInfo);

//What is your monthly income.
var userIncome = prompt("What is you monthly income?");
console.log(userIncome);

//Create a variable for value of the phone.
var phone = 300;

//Operator
(phone > userInfo) ? console.log("You can buy the iPhone") : console.log("You can buy the Andriod Galaxy Note III");
