/*
Find the greatest common divisor of two positive integers.
The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1,
so the greatest common divisor will always be an integer that is
also greater or equal to 1.

Parameters: 2 nums
Returns: a num
Examples:
  mygcd(30, 12), 6
  mygcd(8, 9), 1)
  mygcd(1, 1), 1
Pseudocode:
  iterative
    find the lower of the two inputs
    iterate from lower input down to 1
      if both nums are divisible by current num
        return current current counter

  recursive
    base case
      if 2nd arg is ever 0 (prev x was evenly divisible by prev y)
        return x (prev y)
    recursive case
      recursively call fn with
      x as y (1st arg)
      y as the remainder of prev x divided by prev y (2nd arg)
*/

// iterative, inefficient
function mygcd(x, y) {
  for (let i = x < y ? x : y; i > 0; i--) {
    if (!(x % i || y % i)) return i;
  }
}

// recursive, optimal
function mygcd(x, y) {
  return y ? mygcd(y, x % y) : x;
}