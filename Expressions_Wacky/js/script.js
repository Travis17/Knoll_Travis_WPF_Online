//Travis Knoll
//Date: 17 July 2014

//Code to see how many hours a person spends in the bathroom in a year.

//What is the persons name?
var name = prompt("What is your name friend?");
console.log(name);

//alert username and say hi. Ask if they want to see how much time they spend in the bathroom in a year.
alert("Hi "+name+". Would you like to see how much time you spend in the bathroom a year?");

//How many times do you go to the bathroom on any given day?
var bathroomDay = prompt("On average how many times do you go to the bathroom daily?");
console.log(bathroomDay);

//create variable for bathroom time.
var bathroomTime = 5;

//alert for how much time the said person spends in the bathroom in a day.
alert("Hello "+name+". Your daily bathroom time will equal "+bathroomDay * bathroomTime+" Minutes... Now lets take a look at your year?");
console.log(bathroomDay * bathroomTime);

//create a variable for how many days in a year.
var daysYear = 365;

//alert for how many minutes a person will spend in the bathroom in a year.
alert("My friend you will spend "+bathroomDay * bathroomTime * daysYear+" Minutes... On the throne in a given year!");
console.log("My friend you will spend "+bathroomDay * bathroomTime * daysYear+" On the throne in a given year!");

//create a variable to equal total hours.
var hoursSpent = 60;

//alert how many hour the said person will spend in the bathroom in one given year.
alert("This means the you will spend about "+bathroomDay * bathroomTime * daysYear / hoursSpent+" hours on the throne! Please make sure to wash your hands!");
console.log("This means the you will spend about "+bathroomDay * bathroomTime * daysYear / hoursSpent+" hours on the throne! Please make sure to wash your hands!");

//End of assignment Expressions_Wacky.









