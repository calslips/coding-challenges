/*
I love Fibonacci numbers in general,
but I must admit I love some more than others.

I would like for you to write me a function that when given
a number (n) returns the n-th number in the Fibonacci Sequence.

For example:
   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are
0 and 1, and each subsequent number is the sum of the previous two.

Parameters: a number
  position in the fibonacci sequence
Returns: a number
  the value at the position
Examples:
  nthFibo(1) // 0
  nthFibo(2) // 1
  nthFibo(3) // 1
  nthFibo(4) // 2
Pseudocode:
  initialize a fib var assigned to an array containing 0 & 1
  create a loop that runs while fib length is less than input
    add the 2 last nums in fib and push sum to fib
  return the value in fib at index of input num minus 1
*/

function nthFibo(n) {
  const fib = [0, 1];
  while (fib.length < n) fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  return fib[n - 1];
}