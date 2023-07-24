/*
Your job is to write a function, which takes three integers
a, b, and c as arguments, and returns True if exactly two of
the three integers are positive numbers (greater than zero),
and False - otherwise.

Parameters: 3 nums
Returns: a boolean
Examples:
  twoArePositive(2, 4, -3), true
  twoArePositive(-4, 6, 8), true
  twoArePositive(4, -6, 9), true
  twoArePositive(-4, 6, 0), false
  twoArePositive(4, 6, 10), false
  twoArePositive(-14, -3, -4), false
Pseudocode:
  initialize a count var assigned to 0
  iterate over the 3 num args
    if current num is greater than 0
      increment count
  return whether count is equal to 2 or not
*/

function twoArePositive(a, b, c) {
  return [a, b, c].filter(n => n > 0).length === 2;
}

function twoArePositive(a, b, c) {
  return [...arguments].filter(n => n > 0).length === 2;
}