//Unary operators work with one operand (e.g., +x, -x, ++x, --x, !isTrue).
let x = 5;
// Unary Plus
let y = +x;  // y is now 5
// Unary Minus
let z = -x;  // z is now -5
// Increment (Prefix and Postfix)
let Prefix = ++x; // a is now 6, x is now 6
let Postfix = x++; // b is now 6, x is now 7
// Logical NOT
let isTrue = true;
let notTrue = !isTrue;  // notTrue is now false


// Binary operators work with two operands (e.g., a + b, a - b, a * b, a / b).
let a = 5;
let b = 3;
// Addition
let sum = a + b;  // sum is now 8
// Subtraction
let difference = a - b;  // difference is now 2
// Multiplication
let product = a * b;  // product is now 15
// Division
let quotient = a / b;  // quotient is now 1.666...

/* The ternary operator (condition ? expr1 : expr2) works with three operands and is a 
shorthand for a simple if-else statement.*/
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);  // Adult
