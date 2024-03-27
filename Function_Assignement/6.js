const curry = function (func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...moreArgs) {
        return curried(...args, ...moreArgs);
      };
    }
  };
};

// Test the curry function with a function that adds two numbers
function add(a, b) {
  return a + b;
}
const curriedAdd = curry(add);
console.log(curriedAdd(5)(10));
