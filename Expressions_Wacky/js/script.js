//Travis Knoll
//Date: 17 July 2014

//Code to see how many hours a person spends in the bathroom in a year.

//What is the persons name?
var name = prompt("What is you name friend?");
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