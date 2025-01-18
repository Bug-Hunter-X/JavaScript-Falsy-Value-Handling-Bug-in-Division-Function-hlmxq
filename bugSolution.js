function foo(a, b) {
  //Explicitly check for falsy values
  if(a == 0 || a == null || a == undefined || a ==='' || isNaN(a) || b == 0 || b == null || b == undefined || b ==='' || isNaN(b)){
    return 0; // Handle falsy values appropriately
  }
  return a / b;
}

console.log(foo(10, 0)); // Output: 0
console.log(foo(10, '')); // Output: 0
console.log(foo(10, false)); //Output: 0
console.log(foo(0, 10)); // Output: 0
console.log(foo(null, 10)); //Output: 0