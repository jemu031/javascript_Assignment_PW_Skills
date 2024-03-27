let factorial = function f(n) {
  if (n == 0) return 1; //base case

  let result = f(n - 1) * n; //function calling itself
  return result;
};

console.log(factorial(10));
