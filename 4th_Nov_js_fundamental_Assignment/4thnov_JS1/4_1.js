/*Precedence:
Precedence determines the order in which different types of operators are executed in 
an expression. Operators with higher precedence are executed first. For example, 
multiplication has a higher precedence than addition, so in the expression 2 + 3 * 4, t
he multiplication (*) is performed first.

Here are some general rules of precedence in JavaScript:

Unary operators have higher precedence than binary operators.
    Arithmetic operators have higher precedence than comparison operators.
    Comparison operators have higher precedence than logical operators.
    However, it's always a good practice to use parentheses to explicitly specify the order of 
    evaluation and avoid confusion*/

let result1 = 2 + 3 * 4;  // result is 14, as multiplication has higher precedence

/*Associativity:
Associativity defines the order in which operators of the same precedence are executed. 
It can be left-to-right or right-to-left.

For example, in the expression a + b + c, the + operator is left-associative,
 meaning it associates from left to right. So, the addition is performed from 
 left to right: (a + b) + c.

On the other hand, the assignment operator (=) is right-associative, so in the 
expression a = b = c, the assignment is performed from right to left: a = (b = c).*/
let result2 = 10 - 5 + 2;  // result is 7, as subtraction and addition are left-associative


//Importance of Precedence and Associativity
/*understanding the precedence and associativity of operators is fundamental for writing correct, 
readable, and maintainable code in JavaScript. It is a foundational aspect of the language that 
contributes to the reliability and efficiency of your programs.
*/