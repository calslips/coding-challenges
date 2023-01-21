/*
Take a list of n numbers a1, a2, a3, ..., aN to start with.

Arithmetic mean (or average) is the sum of these numbers divided
by n.
Geometric mean (or average) is the product of these numbers taken
to the nth root.

Example
List of numbers: 1, 3, 9, 27, 81
n = 5
Arithmetic mean = (1 + 3 + 9 + 27 + 81) / 5 = 121 / 5 = 24.2
Geometric mean = (1 * 3 * 9 * 27 * 81) ^ (1/5) = 59049 ^ (1/5) = 9

Task
You will be given a list of numbers and their arithmetic mean.
However, the list is missing one number. Using this information,
you must figure out and return the geometric mean of the FULL LIST,
including the number that's missing.

Parameters:
  an array of nums
  a num
    the arithmetic avg of nums in input array
Returns: a num
  the geometric avg of input nums & missing num
Examples:
  geo_mean([2], 10), 6
  geo_mean([1, 2], 3), 2.2894284851066637
  geo_mean([4, 6, 7, 2], 5), 4.580344097847165
Pseudocode:
  find the missing num from input arr
    multiply arith mean by input arr length plus 1 and
    subtract sum of all nums in input arr
  input this value into equation to obtain geo mean
    multiply all input num values and missing num found above
    to the power of 1/length of all values
  return geo mean
*/

function geo_mean(nums, arith_mean) {
  const missing = arith_mean * (nums.length + 1) - nums.reduce((s, n) => s + n, 0);
  return nums.reduce((p, n) => p * n, missing) ** (1/++nums.length);
}