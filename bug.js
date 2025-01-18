function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //Incorrect: should handle other falsy values
  }
  return a / b;
}

console.log(foo(10, 0)); // Output: 0
console.log(foo(10, '')); // Output: Infinity
console.log(foo(10, false)); //Output: Infinity
console.log(foo(0, 10)); // Output: 0
console.log(foo(null, 10)); //Output: 0