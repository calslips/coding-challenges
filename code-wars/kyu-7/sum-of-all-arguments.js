/**
 * Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
 */

/*

Parameters: individual number values, unknown amount
Return: sum of all arguments provided
Examples:
  sum(5) => 5
  sum(2, 4) => 6
  sum(1, 3, 5, 7, 9) => 25
PseudoCode:
  gather all argument values
  add all argument values together into a singular sum
  return the sum of all arguments given
*/

function sum() {
  return Array.from(arguments).reduce((s, n) => s + n, 0);
}