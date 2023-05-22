/*
Write a sum function which will work properly when invoked
using either syntax below.

sum(2,3);  // Outputs 5
sum(2)(3); // Outputs 5

HINT : use closures

Parameters:
  2 nums OR
  1 num & 1 num (with subsequent invocation)
Returns:
  the sum of both nums
Examples:
  sum(2,3), 5
  sum(2)(3), 5
  sum(4,6), 10
  sum(4)(6), 10
Pseudocode:
  outer fn to take in 2 params (2nd optional)
    if 2nd param is defined
      return sum of 1st param and 2nd param
    otherwise
      return inner fn with 2nd outer param as inner param
        return 1st outer param plus inner param
*/

function sum(x, y) {
  return y === undefined ? y => x + y : x + y;
}