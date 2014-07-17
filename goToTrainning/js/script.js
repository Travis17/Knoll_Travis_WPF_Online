//Travis Knoll

var name = prompt("please give your name");

console.log(name);

//alert the user and say yo
alert("Welcome "+name+"! We have a few more questions for you");

//create variable and prompt user for year of birth
var yearBorn = prompt("What year were you born?");
console.log(yearBorn);

//create variable for current year
var currentYear = 2014;

//calculate person age and save as a variable
var age = currentYear - yearBorn;
console.log(age);

//tell the person how old they are
alert(name + " you are "+age+" years old ");
console.log(name + " you are "+age+" years old ");

//How old will you be in the future


//Prompt user for how many year into the future
var yearsMore = prompt("How many years into the future would you like?");
console.log(yearsMore);


//calculate future age
var futureAge = age + Number(yearsMore);
alert(name + " you will be "+ futureAge);




