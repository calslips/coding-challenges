/*
And here is Fibonacci again. This time we want to go one step
further. Our fib() function must be faster! Can you do it?

In case you don't know, what the Fibonacci number is:

The nth Fibonacci number is defined by the sum of the two
previous Fibonacci numbers.
In our case: fib(1) := 0 and fib(2) := 1.
With these initial values you should be able to calculate each
following Fibonacci number.

Parameters: a num
Returns: a num
  the value found at the input nums
  position within the fib sequence
Examples:
  fib(1), 0
  fib(2), 1
  fib(3), 1
  fib(4), 2
  fib(5), 3
Pseudocode:
  initialize sequence var assigned to an array containing 0 and 1
  create a loop to run while sequence length is less than input num
    take the last 2 values within sequence and add them together
    push sum to sequence array
  return sequence at index input num minus 1
*/

function fib(n) {
  const seq = [0, 1];
  while (seq.length < n) seq.push(seq.at(-2) + seq.at(-1));
  return seq[n - 1];
}