/*
Write a function that accepts two numbers a and b and returns
whether a is smaller than, bigger than, or equal to b, as a
string.

(5, 4)   ---> "5 is greater than 4"
(-4, -7) ---> "-4 is greater than -7"
(2, 2)   ---> "2 is equal to 2"
There is only one problem...

You cannot use if statements, and you cannot use the ternary
operator ? :.

In fact the word if and the character ? are not allowed in your
code.

Parameters: 2 nums
Returns: a str
Examples:
  noIfsNoButs(45, 51), "45 is smaller than 51"
  noIfsNoButs(1, 2), "1 is smaller than 2"
  noIfsNoButs(-3, 2), "-3 is smaller than 2"
  noIfsNoButs(1, 1), "1 is equal to 1"
  noIfsNoButs(100, 100), "100 is equal to 100"
  noIfsNoButs(100, 80), "100 is greater than 80"
  noIfsNoButs(20, 19), 20 is greater than 19"
Pseudocode:
  use logical operators
  when a > b return str stating so
  otherwise when a < b return str stating so
  otherwise return str stating a & b are equal
*/

function noIfsNoButs(a, b) {
  return a > b && `${a} is greater than ${b}` || a < b && `${a} is smaller than ${b}` || `${a} is equal to ${b}`;
}