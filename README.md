# JavaScript Falsy Value Handling Bug

This repository demonstrates a common error in JavaScript: incorrect handling of falsy values in a division function. The `foo` function is supposed to divide two numbers, but it incorrectly handles cases where either input is a falsy value. This leads to unexpected results, including `Infinity` and incorrect zero outputs.

The `bug.js` file contains the buggy implementation, while `bugSolution.js` provides a corrected version that accurately handles all falsy values.

## Bug
The original function incorrectly returns 0 if either `a` or `b` is 0, neglecting other falsy values.  It should explicitly check for these values to provide correct and predictable behavior.

## Solution
The solution addresses this by checking for all falsy values using explicit checks or a utility function. This ensures that the function behaves as expected regardless of the input types.