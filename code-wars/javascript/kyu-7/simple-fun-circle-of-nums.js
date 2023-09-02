/*
Consider integer numbers from 0 to n - 1 written down along the
circle in such a way that the distance between any two
neighbouring numbers is equal
(note that 0 and n - 1 are neighbouring, too).

Given n and firstNumber/first_number/first-number, find the
number which is written in the radially opposite position to
firstNumber.

Example
For n = 10 and firstNumber = 2, the output should be 7

Input/Output
[input] integer n

A positive even integer.

Constraints: 4 ≤ n ≤ 1000.

[input] integer firstNumber/first_number/first-number

Constraints: 0 ≤ firstNumber ≤ n - 1

[output] an integer

Parameters: 2 nums
Returns: a num
Examples:
  circleOfNumbers(10, 2), 7
  circleOfNumbers(10, 7), 2
  circleOfNumbers(4, 1), 3
  circleOfNumbers(6, 3), 0
Pseudocode:
  divide 1st num by 2
  round down quotient
  add quotient to 2nd num
  return sum modulo 1st num
*/

function circleOfNumbers(n, firstNumber) {
  return (Math.floor(n / 2) + firstNumber) % n;
}