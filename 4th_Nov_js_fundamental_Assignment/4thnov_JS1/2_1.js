/*
The operators can be catagrized by based on the type of operation they performs


Operators in JavaScript can be categorized based on the type of operation they perform. Here are some common categories of operators in JavaScript:

Arithmetic Operators:
    + (Addition)
    - (Subtraction)
    * (Multiplication)
    / (Division)
    % (Modulus)
    ++ (Increment)
    -- (Decrement)

Assignment Operators:
    = (Assignment Operators)
    += (Add and assign)
    -= (Subtract and assign)
    *= (Multiply and assign)
    /= (Divide and assign)
    %= (Modulus and assign)
    Comparison Operators:

== (Comparison Operators)
    === (Strict equal to)
    != (Not equal to)
    !== (Strict not equal to)
    > (Greater than)
    < (Less than)
    >= (Greater than or equal to)
    <= (Less than or equal to)
    Logical Operators:

Logical Operators
    && (Logical AND)
    || (Logical OR)
    ! (Logical NOT)

Bitwise Operators:
    & (Bitwise AND)
    | (Bitwise OR)
    ^ (Bitwise XOR)
    ~ (Bitwise NOT)
    << (Left shift)
    >> (Right shift)
    >>> (Unsigned right shift)

Unary Operators:
    + (Unary plus)
    - (Unary minus)
    ++ (Prefix and postfix increment)
    -- (Prefix and postfix decrement)
    ! (Logical NOT)

Conditional (Ternary) Operator:
    ? : (Ternary operator for conditional expressions)

String Operators:
    + (String concatenation)
 */


//Arithmetic Operations:
/*JavaScript operators allows to perform basic arithmetic operations such as 
addition (+), subtraction (-), multiplication (*), and division (/). 
These operations are fundamental for numerical calculations in programming.*/
let result = 10 + 5; // result is 15

//Assignment:
/*The assignment operator (=) is used to assign a value to a variable.
 It plays a central role in storing and manipulating data within a program.*/
 let x = 10; // assigns the value 10 to the variable x

//Comparison:
/*Comparison operators (==, ===, !=, !==, <, >, <=, >=) are essential for making decisions 
based on conditions. They allows to compare values and determine the flow of your program.*/
 x > result // returns true||false

//Logical Operations:
/*Logical operators (&&, ||, !) are used to perform logical operations. 
They are crucial for creating complex conditions and making decisions
 based on multiple criteria.*/
 let isTrue = true;
 let isFalse = false;
 
 console.log(isTrue && isFalse); // Logical AND: false
 console.log(isTrue || isFalse); // Logical OR: true
 console.log(!isTrue);           // Logical NOT: false

//Bitwise Operations:
/*Bitwise operators (&, |, ^, ~, <<, >>, >>>) operate on the binary 
representation of integers. While not as commonly used, they are essential 
in certain low-level programming scenarios.*/
let m = 5;  // binary: 0101
let n = 3;  // binary: 0011

console.log(m & n);  // Bitwise AND: 1 (binary: 0001)
console.log(m | n);  // Bitwise OR: 7 (binary: 0111)
console.log(m ^ n);  // Bitwise XOR: 6 (binary: 0110)
console.log(~m);     // Bitwise NOT: -6 (binary: 11111111111111111111111111111010 in 32-bit signed representation)
console.log(m << 1); // Left shift by 1: 10 (binary: 1010)
console.log(m >> 1); // Right shift by 1: 2 (binary: 0010)
console.log(m >>> 1);// Unsigned right shift by 1: 2 (binary: 0010)

//Unary Operators:
let num = 10;

console.log(+num);  // Unary plus: 10
console.log(-num);  // Unary minus: -10
console.log(++num); // Prefix increment: 11
console.log(num++); // Postfix increment (returns original value, then increments): 11
console.log(--num); // Prefix decrement: 10
console.log(num--); // Postfix decrement (returns original value, then decrements): 10
console.log(!true); // Logical NOT: false
console.log(typeof num) // returns the data type of num

//Conditional (Ternary) Operator:
/*is a concise way to write conditional statements in JavaScript. It is the only 
ternary operator in JavaScript, and its syntax is as follows:*/
/*
Here's how it works:
The condition is evaluated. If the condition is true, the expression expr1 
is executed; otherwise, the expression expr2 is executed.
The value of the entire ternary expression is the result of either expr1 or expr2,
 depending on the evaluation of the condition. */

let age = 20;
let Status = (age >= 18) ? "Adult" : "Minor";
console.log(Status); // Adult

//String Operators:
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // John Doe

//it can be written as this also

console.log(`${firstName} ${lastName}`)