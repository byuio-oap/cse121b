// 🔍 Part 1 error
let userName = "Moroni";
console.log(`Username: ${userName}`);
userName = "Moronihah";
console.log(`Username: ${userName}`);

// 🔍 Part 2 error
const currentDateAndTime = Date();
console.log(`It is now ${currentDateAndTime}`);

// 🔍 Part 3 error. The following statement calls a function named total that accepts any number of arguments and returns the sum. The returned value is stored in a variable named theTotal. 1-10 are the arguments.


// Step 1: Create four variables with sensible names
let firstNumber = 4;
let secondNumber = 8;
let thirdNumber = 60;
let fourthNumber = 56;

// Step 2: Add the first two variables and store the result
let additionResult = firstNumber + secondNumber;

// Step 3: Subtract the fourth variable from the third and store the result
let subtractionResult = thirdNumber - fourthNumber;

// Step 4: Multiply the results from steps 2 and 3 and store the result in finalResult
let finalResult = additionResult * subtractionResult;

// Step 5: Check if finalResult is an even number
let evenOddResult = finalResult % 2 === 0 ? 0 : 1;

// Output the results
console.log("finalResult: " + finalResult);
console.log("evenOddResult: " + evenOddResult);




// Given calculations and results
let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;

// Step 1: Multiply result and result2 and assign the result back to result (use assignment shorthand)
result *= result2;

// Step 2: Format result to two decimal places and store it in finalResult
let finalResult2 = result.toFixed(2);

// Step 3: Check the data type of finalResult using typeof
// If it's a string, convert it to a number type and store the result in finalNumber
let finalNumber;

if (typeof finalResult2 === 'string') {
    finalNumber = parseFloat(finalResult2);
}

// Output the finalNumber
console.log(finalNumber); // Output should be 4633.33




// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;
const weightComparison = eleWeight < mouseWeight;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;
const heightComparison = ostrichHeight > duckHeight;

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';
const pwdMatch = pwd1.toLowerCase() === pwd2.toLowerCase();

// Output the results of the tests
console.log("Statement 1 (Elephant weighs less than the mouse): " + weightComparison);
console.log("Statement 2 (Ostrich is taller than the duck): " + heightComparison);
console.log("Statement 3 (Two passwords match): " + pwdMatch);




// The first half of the quote
var quoteStart = "Don't judge each day by the harvest you reap ";

// Look up the other half of the quote and add it to quoteEnd
var quoteEnd = "but by the seeds that you plant.";

// Concatenate the two strings to create the final quote
var finalQuote = quoteStart + quoteEnd;

// Print the final quote to the console
console.log(finalQuote);




const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

// Retrieve the length of the quote
const quoteLength = quote.length;

// Find the index position where substring appears in quote
const index = quote.indexOf(substring);

// Check if the substring was found in the quote
if (index !== -1) {
  // Use substring and index to trim down the original quote
  const revisedQuote = quote.slice(0, index + substring.length);
  console.log(revisedQuote);
} else {
  console.log("Substring not found in the quote.");
}



//let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//console.log(`The total is ${theTotal}`);

// 'total' function declaration
// function total(...theNumbers) {
// 	let sum = 0;
// 	for (let aNumber of theNumbers) {
// 		sum += aNumber * 1; // Why do we use * 1? It implicitly converts a string to a number.
// 	}
	
// 	return sum
// }
