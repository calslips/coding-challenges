/*
In mathematics, the factorial of a non-negative integer n,
denoted by n!, is the product of all positive integers less
than or equal to n. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120.

The value of 0! is 1.

You have to create the function factorial that receives n
and returns n!. You have to use recursion.

Parameters: a num
Returns: a num
Examples:
  factorial(0), 1
  factorial(1), 1
  factorial(2), 2
  factorial(3), 6
  factorial(5), 120
Pseudocode:
  basecase
    if n is 0 or 1
      return 1
  recursive case
    return n multiplied by factorial fn called on n - 1
*/

const factorial = n => !n || n === 1 ? 1 : n * factorial(--n);