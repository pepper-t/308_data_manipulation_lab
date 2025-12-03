

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


  // This is where I start my calculations

//   Question 1

// All of the numbers are checked to see if divisible by 5
  const isDiv5 = n1/5 && n2/5 && n3/5 && n4/5;
console.log(isDiv5);

// Is the first number, n1, larger than the last number, n4?

// Sounds like a boolean true false question
// I set the variable to equal n1>n4
let IsGreater = n1>n4;
console.log(IsGreater);

// Subtract the n1 from n2

const minusNumbers = n2-n1;
console.log(minusNumbers);

// I multiplied the variable from the previous problem to the third number, n3
let multipliedNumber = minusNumbers*n3;
console.log(multipliedNumber);

// Find the remainder by dividing the result from line 70 by n4 using MOD, %
// I set the constant to be a variable for multipliedNumber*n4

let remainder = multipliedNumber%n4;
console.log(remainder);

// Question 2

const milesTotal = 1500; //Total miles for entier trip
const speedPerHour = 55 //Total miles per hour driven
const pricePerGallon = 3; //price per gallon of fuel
 const fillUpFuel = 30;  //After 28 miles would need more fuel
// How many gallons of fuel will you need for the entire trip?

// I used Javascript to calculate the fuel needed for the entire trip 
// @55mph

const totalGallons = (milesTotal/fillUpFuel);//Total gallons for the trip
console.log(totalGallons);

const totalFuel = (totalGallons*3); //Calculates the total amount money spent on fuel for entire trip
console.log(totalFuel);//$150 is the total amount of money needed to pay for fuel for this trip

//Will your budget be enough to cover the fuel expense? 

const tripFuelBudget=175 //Total amount of money alloted for fuel for entire trip

const smallerThanBudget = totalFuel<175; //I ask formula to tell me if this relationship is true or false
console.log(smallerThanBudget);

//How long will the trip take, in hours?

const totalArrivalTime = (milesTotal/speedPerHour);
console.log(totalArrivalTime); //Calculates the number of hours to drive 1500 miles @ 55mph




