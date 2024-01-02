/* The comma operator in JavaScript is used to evaluate multiple 
expressions in a single statement. It allows you to combine multiple
 expressions into a single expression, and the value of the entire 
 expression is the value of the last expression. The expressions are 
 evaluated from left to right. */

 // Example using the comma operator
let x = 5, y = 10;

// The value of the entire expression is the value of the last expression
let result = (x++, y++, x + y);

// Output the result and the updated values of x and y
console.log("Result:", result); // Output: Result: 16
console.log("Updated x:", x);   // Output: Updated x: 6
console.log("Updated y:", y);   // Output: Updated y: 11
