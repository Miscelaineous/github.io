// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Elaine Finn
//  2.n/a


// 0. "YOU SIGNED... WHO?!"

/* There are 2 ways to create objects, with 2 methods each:

1.  Creating an object, then adding properties and methods.  This can be done by:  
 - literal notation (i.e. you create the object by defining the variable and applying properties and methods), or
 - object construction notation (i.e. you use JS in-built objects) and apply methods and properties.

2.  Creating an object with properties and methods
 - literal notation means you define the variable
 - object construction notation means you use in-built objects.

The choice depends on how that object is used, i.e. if the object has its own state or depends on other object states, then the object constructor is probably the best approach.  
However, in nearly all cases - as much for ease of reading as anything else - literal notation is a good approach.

*/

// 1. "Here they Come!"

/*var new Client = {
	name: "Adam Sandler",
	age: 47, 
	quote: "That's your home!  Are you too good for your home?!",
	showQuote: function ()	{
	console.log(this.quote)
	} 
};

console.log();

var new Client = {
	name: "Kirsten Bell",
	age: 33,
	quote: "Do you want to build a snowman?",
	showQuote: function ()	{
	console.log(this.quote)
		} 
};

console.log();

var new Client = {
	name: "Jim Carrey",
	age: 52,
	quote: "...So you're telling me there's a chance?  YEAH!",
	showQuote: function ()	{
	console.log(this.quote)
	} 
};

console.log();
*/

 /* 

// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

//Turn above into an array, as there is a list: */

function Client(name, age, quote) {
		this.name = name;
		this.age = age;
		this.quote = quote;
		}

var adamSandler = new Client("Adam Sandler", 47, "That's your home!  Are you too good for your home?!");
adamSandler.constructor === Client;
adamSandler.age === 47;
adamSandler.quote === "That's your home!  Are you too good for your home?!";

var kristenBell = new Client("Kristen Bell", 33, "Do you want to build a snowman?");
kristenBell.constructor === Client;
kristenBell.age === 33;
kristenBell.quote === "Do you want to build a snowman?";

var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance?  YEAH!");
jimCarrey.constructor === Client;
jimCarrey.age === 52;
jimCarrey.quote === "...So you're telling me there's a chance?  YEAH!";

// 3. "SHOW 'EM OFF!"
// HTML + CSS + JS?

// 4. "But wait, there's more!"

function Client(name, age, quote) {
	this.name = name;
	this.age = age;
	this.quote = quote;
	this.showQuote = function() {
	console.log(this.quote);
	}

// 5.  ** BONUS **
//Too tired, sorry... (

//  6.  Your Reflection:

//The use of new for new Client has proved to be confusing for me, with my spending a considerable amount of time trying to fix an undefined Client.  
//Also, I spent a lot of time trying to decide how to best write the function showQuote, as there are many ways, which I managed to confuse - I made my selection on what passed the test for me (vs what is appropriate).
//I do feel I now better understand this.
//And my aha moment was when all I had to do was insert node to run any JS on the console (have previousy run .js files)
//Testing was tedious, I spent hours fixing concepts then irritating syntax bugs - but I learnt a lot in the process.