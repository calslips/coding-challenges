/*
Write a function that returns the greatest common factor
of an array of positive integers. Your return value should
be a number, you will only receive positive integers.

Parameters: an arr of nums
Returns: a num
  the greatest common denominator of all
  nums within the input arr
Examples:
  greatestCommonFactor([1, 8]), 1
  greatestCommonFactor([16, 4, 8]), 4
  greatestCommonFactor([46, 14, 20, 88]), 2
  greatestCommonFactor([468, 156, 806, 312, 442]), 26
  greatestCommonFactor([48, 99, 18 ]), 3
  greatestCommonFactor([32, 96, 120, 80]), 8
  greatestCommonFactor([91, 143, 234, 52]), 13
  greatestCommonFactor([171, 45, 297, 342]), 9
Pseudocode:
  initialize min var assigned to the lowest num within input arr
  iterate from min to 1
    if every element within input arr is divisible by current num
      return current num
*/

function greatestCommonFactor(array) {
  for (let i = Math.min(...array); i > 0; i--) if (array.every(n => !(n % i))) return i;
}