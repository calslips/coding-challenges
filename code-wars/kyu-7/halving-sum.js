/*
Given a positive integer n, calculate the following sum:
n + n/2 + n/4 + n/8 + ...

All elements of the sum are the results of integer division.
Example
25  =>  25 + 12 + 6 + 3 + 1 = 47

Parameters: a num
Returns: a num
  input num progressively halved until reaching 1
  and each half added to num
Examples:
  halvingSum(25), 47
  halvingSum(127), 247
Pseudocode:
  base case
    if input is 1
      return it
  recursive case
    return input plus recursive call to fn with arg as input halved & floored
*/

function halvingSum(n) {
  return n === 1 ? n : n + halvingSum(Math.floor(n / 2));
}