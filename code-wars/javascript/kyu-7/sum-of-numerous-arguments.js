/**
 * After calling the function findSum() with any number of non-negative
 * integer arguments, it should return the sum of all those arguments.
 * If no arguments are given, the function should return 0, if negative
 * arguments are given, it should return -1.

Example
findSum(1,2,3,4); // returns 10
findSum(1,-2);    // returns -1
findSum();        // returns 0


Parameters: individual number values, 0+
Return:
  if no args, return 0
  if any negative arg is passed in, return -1
  all args >=0, return sum of all args added together
Examples:
  findSum() // 0
  findSum(3, 2, -3) // -1
  findSum(9, 7, 5) // 21
Pseudocode:
  collect arg values in an array
  check if there's a negative value
    return -1 if negative exists
    otherwise return sum of args
 */

function findSum(...args) {
  return args.find(n => n < 0) ? -1 : args.reduce((s, n) => s + n, 0);
}