// I paired by myself on this challenge.

// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "Mike", "Smith", "Mary"]

// Test results:
/*➜  unit1_projects git:(master) ✗ node Week3_my_solution.js 
1. true
2. true
3. true
4. true
5. true
6. true
7. true
8. true
9. true*/
//
//__________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
//
// Ok - really interesting - this is incredibly straight exercise but as I went to finalise thise before submission, I just couldn't make it work.
// Why?  I was exhausted and suffering from what skiers call snow blindness, so 'code' blindness.
// Reflection?  REGULAR BREAKS.  EAT.  GET SLEEP.

// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)