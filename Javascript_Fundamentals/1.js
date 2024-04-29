function outerFunction(parameter) {
  let outerVariable = "Variable Declared within outerFunction"; //Outer Variable
  function innerFunction() {
    //Inner Function
    console.log("The value of parameter is", parameter);
    console.log("The value of outer Variable is", outerVariable);
  }
  return innerFunction;
}

let returnedouterFunction = outerFunction("Hello"); //storing the returned value of outerFunction innerFuction in returnedouterFunction

returnedouterFunction();
//Lexical scoping means that the inner function has access to the variables in the scope in which it was defined, even if those variables are no longer in scope when the inner function is executed.
//Calling the returnedouterFunction function, which still has access to both the parameter and innerVariable
//This means that even though outerFunction has "finished executing," the inner function still remembers the variables from its parent scope (i.e., outerFunction) where it was defined.
