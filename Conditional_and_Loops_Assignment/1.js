// Conditional statements are used to perform different actions based on different conditions.

/*When we write a code, we want to perform diffrent conditions or action on diffrent outcomes
    We can use Conditional statements to perform such tasks
    they are also called control loops
*/

//In javascript we have the following conditional statements

//if..else
/* if - to specify a block of code to be executed if a condition is true
else - to specify a block of code to be executed if a condition is false
*/

/* if (condition){
    body of if
}else {
    body of else
}
 */

let x = 10;
let y = 5;

z = x + y;

if (z > 20) {
  console.log("the sum of x & y is greater than 20"); //executed if given condition is true
} else {
  console.log("the sum of x & y is not 20"); //executed if given condition is false
}

//else if to specify a new condition test, if the first condition is false

z = x + y;

if (z > 20) {
  console.log("the sum of x & y is greater than 20");
} else if (z < 20) {
  //a new condition to test
  console.log("the sum of x & y is less than 20");
} else console.log("the sum of x & y is 20");

//switch..case - to specify many alternative blocks of code to be executed

switch (x + y) {
  case 14:
    console.log("the sum of x & y is 14");
    break;
  case 15:
    console.log("the sum of x & y is 15");
    break;
  case 16:
    console.log("the sum of x & y is 16");
    break;
}

/*note that when we forget to use a break keyword in a case and if it is true then the javascript
will keep on executing the below cases even if they are false untill it sees a break statement !!
*/
