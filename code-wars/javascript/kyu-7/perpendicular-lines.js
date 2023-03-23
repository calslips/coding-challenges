/*
You are given an input (n) which represents the amount of lines
you are given, your job is to figure out what is the maximum
amount of perpendicular bisectors you can make using these lines.

Note: A perpendicular bisector is one that forms a 90 degree angle
n will always be greater than or equal to 0

Parameters: a num (amount of lines)
Returns: a num (max amount of perp bisectors that can be made)
Examples:
  maxBisectors(0), 0
  maxBisectors(1), 0
  maxBisectors(2), 1
  maxBisectors(3), 2
  maxBisectors(4), 4
  maxBisectors(5), 6
  maxBisectors(6), 9
  maxBisectors(51), 650
Pseudocode:
  initialize quotient var assigned to input num halved
  return the product of quotient floored times quotient ceiled
*/

function maxBisectors(n) {
  return Math.floor(n / 2) * Math.ceil(n / 2);
}