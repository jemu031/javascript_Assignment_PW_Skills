// Loops
/*When a same code that need to be run over and over again but with a diffrent vlaue loops can be used
    loops can help achive the DRY (DO not Repeat Yourself) prnciple as with loops we can automate the repeatation
*/

//for - loops through a block of code a number of times
/*for (expression; condition; incremental statement){
    a block of code that we need to repeat number of times
}
 */

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//while -loops through a block of code as long as a specified condition is true.
/*
while (condition) {
  // code block to be executed

  //incremental statement
}
 */
let i = 10; //defining of i
while (i > 0) {
  console.log(i);

  i--; //incremental Statement
}

//do..While

/*The task will be executed atleast once before checking the condition 

do{
    block of that needs to be executed

    incremental statement;
}while condition;


*/
let x = 0;
do {
  console.log(x);

  x++; //incremental statement
} while (x < 10);
