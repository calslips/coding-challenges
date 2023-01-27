/*
A happy number is a number defined by the following process:
starting with any positive integer, replace the number by the
sum of the squares of its digits, and repeat the process until
the number equals 1 (where it will stay), or it loops endlessly
in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy numbers,
while those that do not end in 1 are unhappy numbers (or sad
  numbers) (Wikipedia).

Write a function that takes n as parameter and return true if and
only if n is an happy number, false otherwise.

Examples
For example number 7 is happy because after a number of steps the
computed sequence ends up with a 1:
7, 49, 97, 130, 10, 1

While 3 is not, and would give us an infinite sequence:
3, 9, 81, 65, 61, 37, 58, 89, 145, 42, 20, 4, 16, 37, 58, 89, 145, 42, 20, 4, 16, 37, ...

Parameters: a num
Returns: a boolean
  whether input num is happy or not
  replace number with the sum of its digits squared
    if it eventually equals 1, it is happy
    if it goes on forever, it is not
Examples:
  isHappy(1), true
  isHappy(7), true
  isHappy(16), false
Pseudocode:
  initialize an obj to keep track of ints encountered
  while n is not 1
    if n exists in obj
      return false
    set obj at n to true
    separate the digits
    square them
    sum them
    n to digits square sum
  return true
*/

function isHappy(n) {
  const seen = {};
  while (n !== 1) {
    if (seen[n]) return false;
    seen[n] = true;
    n = `${n}`.split('').reduce((s, n) => n * n + s, 0);
  }
  return true;
}