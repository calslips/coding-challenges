/**
 * I will give you an integer. Give me back a shape that is as long and
 * wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

Parameters: n, whole number between 1 - 50
Return: n * lines of strings containing n * '+'
Examples:
  generateShape(1) // '+'
  generateShape(3) // '+++\n+++\n+++'
  generateShape(5) // '+++++\n+++++\n+++++\n+++++\n+++++'
Pseudocode:
  create an array to contain n number of elements
  for each element input the value of '+' repeated n times
  join each element of the array on '\n'
  return the joined string
 */

function generateShape(n) {
  return Array.from(Array(n), e => '+'.repeat(n)).join('\n');
}