/*
Find the difference between the sum of the squares of the first
n natural numbers (1 <= n <= 100) and the square of their sum.

Example
For example, when n = 10:

The square of the sum of the numbers is:

(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

The sum of the squares of the numbers is:

12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

Hence the difference between square of the sum of the first ten
natural numbers and the sum of the squares of those numbes is:
3025 - 385 = 2640

Parameters: a num
Returns: a num
  the difference between the sum of squares of nums 1-n
  and the square of their sum
Examples:
  differenceOfSquares(5), 170
  differenceOfSquares(10), 2640
  differenceOfSquares(100), 25164150
Pseudocode:
  initialize nums var as an array where the elements are nums 1 through n
  reduce nums and sum all the nums then square the sum
  reduce nums and square each num then sum them
  return the difference between the two
*/

function differenceOfSquares(n) {
  const nums = Array.from(Array(n), (_, i) => ++i);
  return nums.reduce((s, n) => s + n, 0) ** 2 - nums.reduce((p, n) => p + n * n, 0);
}