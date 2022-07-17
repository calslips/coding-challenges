/*
Create a function that takes an argument n and sums even Fibonacci numbers
up to n's index in the Fibonacci sequence.

Example:
sumFibs(5) === 2 // (0, 1, 1, 2, 3, 5);2 is the only even number in the
sequence and doesn't have another number in the sequence to get added to
in the indexed Fibonacci sequence.

Example:
sumFibs(9) === 44; // (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// 2 + 8 + 34 = 44;

Parameters: a number (n)
Returns:
  the sum of the even numbers in the fibonacci sequence up to the (n) index, inclusive
Examples:
  sumFibs(5) // 2
  sumFibs(9) // 44
  sumFibs(10) // 44
  sumFibs(11) // 44
Pseudocode:
  initalize an empty array to contain the fibonacci sequence
    set length to n + 1
    fill the array with placeholders
  reduce the array of placeholders
    the value for the first 2 elements will be their index (at index 0 and 1)
    for indexes 2 and above, get the current value by adding the two previous values
    place the current value in the accumulator array
  filter accumulator array to contain only even numbers
  add up all the remaining even numbers
  return their sum
*/

function sumFibs(n) {
  return Array(n + 1)
    .fill()
    .reduce((s, c, i) => i < 2 ? s.concat(i) : s.concat(s[i - 2] + s[i - 1]), [])
    .filter(e => !(e % 2))
    .reduce((s, n) => s + n);
}