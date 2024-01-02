/*In JavaScript, primitive data types are basic data types that are not objects and represent simple values. 
There are five primitive data types in JavaScript:
*/
//Number:
//Represents numeric values, both integers and floating-point numbers.
     let integerNumber = 42;
     let floatingPointNumber = 3.14;
   

// String:
// Represents sequences of characters, enclosed in single (' ') or double (" ") quotes.
    let greeting = "Hello, World!";
     let name = 'John';


// Boolean:
// - Represents logical values `true` or `false`.
// - Used for making decisions and controlling the flow of a program through conditional statements.
      let isSunny = true;
     let hasCoffee = false;
     

// Null:
// Represents the intentional absence of any object value.
// -It is a special value and typically used to indicate that a variable intentionally has no 
// -value or that an object property does not exist.

     let nullValue = null;


// Undefined:
// Represents a variable that has been declared but has not been assigned a value.
// Variables that are declared but not initialized are automatically assigned the value `undefined`.

     let undefinedVariable;
   

/*These primitive data types are immutable, meaning their values cannot be changed directly. 
When you perform operations that seem to modify a primitive value, you are actually creating 
a new value. For example, when you concatenate two strings, you create a new string rather than 
modifying the existing ones.

It's important to note that there is also a special primitive value in JavaScript called `Symbol`, 
which is used for creating unique identifiers. However, since `Symbol` is not as commonly used as 
the other five mentioned here, it may not always be included in a basic list of primitive data types.
*/