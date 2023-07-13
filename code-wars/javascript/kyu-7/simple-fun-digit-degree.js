/*
Let's define digit degree of some positive integer as the number
of times we need to replace this number with the sum of its
digits until we get to a one digit number.

Given an integer n, find its digit degree.

Example
For n = 5, the output should be 0;

For n = 100, the output should be 1;

For n = 91, the output should be 2.

Input/Output
[input] integer n

Constraints: 5 ≤ n ≤ 109.

[output] an integer

Parameters: a num
Returns: a num
Examples:
  digitDegree(5), 0
  digitDegree(100), 1
  digitDegree(91), 2
  digitDegree(99), 2
  digitDegree(1234567), 3
  digitDegree(1000000000), 1
Pseudocode:
  initialize count var to 0
  create a loop to run as long as n is greater than 9
    reassign n to be the sum of its digits
    increment count
  return count
*/

function digitDegree(n) {
  let count = 0;
  while (n > 9) n = [...`${n}`].reduce((s, n) => s + +n, 0), count++;
  return count;
}