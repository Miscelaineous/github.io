// I worked on this challenge: with Bob Maestri


// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}

// __________________________________________
// Write your code below.

var adam = {
    name: "Adam",
    spouse: terah
    };
    
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;

var object = {};
terah.children = object;

object.carson = {name:"Carson"};
object.carter = {name:"Carter"};
object.colton = {name:"Colton"};
adam.children = terah.children;

/* object.carson = {name:"Carson"}; = 
var carson {
    name = "Carson"
} */

/*Follow the steps below to make the tests pass and complete the challenge.
The order of the steps corresponds to the order of the tests. After completing each step, run your code to be certain that the next test has passed.

When all of the tests have passed, your final terah object will be logged to the console.*/

//  1. Define a variable adam and use object literal notation to assign this variable the value of a JavaScript Object object with no properties.
//  2. Give adam a name property with the value "Adam".
//  3. Add a spouse property to terah and assign it the value of adam.
//  4. Change the value of the terah weight property to 125.
//  5. Remove the eyeColor property from terah.
//  6. Add a spouse property to adam and assign it the value of terah.
//  7. Add a children property to terah and and use object literal notation to assign this variable the value of a JavaScript Object object with no properties
//  8. Add a carson property to the value of the terah children property and assign it the value of an object with the property name with a value of "Carson".
//  9. Add a carter property to the value of the terah children property and assign it the value of an object with the property name with a value of "Carter".
//  10. Add a colton property to the value of the terah children property and assign it the value of an object with the property name with a value of "Colton".
//  11. Add a children property to adam and assign it the value of terah children.

/*  ➜  unit1_projects git:(master) ✗ node my_solution.js
1. true
2. true
3. true
4. true
5. true
6. true
7. true
8. true
9. true
10. true
11. true

Here is your final terah object:
{ name: 'Terah',
  age: 32,
  height: 66,
  weight: 125,
  hairColor: 'brown',
  spouse: 
   { name: 'Adam',
     spouse: [Circular],
     children: { carson: [Object], carter: [Object], colton: [Object] } },
  children: 
   { carson: { name: 'Carson' },
     carter: { name: 'Carter' },
     colton: { name: 'Colton' } } }
*/

// __________________________________________
// Reflection: Use the reflection guidelines

//  What parts of your strategy worked? What problems did you face?
//  My biggest concern about this challenge was the ability to effectively use the TDD.  However, with node installed and the tests all written, this was really straight-forward.  I guess the challenge will be writing the tests in future.

//  What questions did you have while coding? What resources did you find to help you answer them?
//  I was somewhat relieved at my ability to do numbers 1 to 6 relatively easily - I have spent a considerable amount of time studying Javascript and it looks like it's starting to pay off.

//  What concepts are you having trouble with, or did you just figure something out? If so, what?
//  That said, the nesting of objects (numbers 7 to 11) were a bit of a mind-bend, albeit conceptually I think I get it - just a case of more practice.

//  Did you learn any new skills or tricks?
//  Running JS tests via the command line using Node.js - yay!

//  How confident are you with each of the Learning Competencies?
//  I was somewhat relieved at my ability to do numbers 1 to 6 relatively easily - I have spent a considerable amount of time studying Javascript and it looks like it's starting to pay off.

//  Which parts of the challenge did you enjoy?
//  Overall, I enjoyed running the tests to get each True, which was very satisfying!

//  Which parts of the challenge did you find tedious?
//  I didn't find any - got through this in a pretty straight-forward manner!

// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
) 

console.log("\nHere is your final terah object:")
console.log(terah)