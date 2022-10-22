/*
The function 'fibonacci' should return an array of fibonacci
numbers. The function takes a number as an argument to decide
how many no. of elements to produce. If the argument is less
than or equal to 0 then return empty array

Parameters: a number
Returns: an array of numbers
Examples:
  fibonacci(4) // [0,1,1,2]
  fibonacci(-1) // []
Pseudocode:
  if input num is 0 or less
    return an empty array
  initialize a var to contain the fib sequence
  create a loop to iterate input num times
    if it is the 1st 2 values (index 0 & 1)
      push index to fib sequence
    otherwise
      add the 2 previous values in the fib sequence
      and push sum to fib sequence
  return fib sequence
*/

function fibonacci(n) {
  const fib = [];
  if (n < 1) return fib;
  for (let i = 0; n; i++, n--) {
    if (i < 2) fib.push(i);
    else fib.push(fib[i - 2] + fib[i - 1]);
  }
  return fib;
}