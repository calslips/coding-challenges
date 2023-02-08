/*
Write a function that calculates the least common multiple of its
arguments; each argument is assumed to be a non-negative integer.
In the case that there are no arguments (or the provided array in
  compiled languages is empty), return 1. If any argument is 0,
  return 0.

Parameters: any amount of nums
Returns: a num
  lowest common multiple of all inputs
Examples:
  lcm(2, 5), 10
  lcm(2, 3, 4), 12
  lcm(9), 9
Pseudocode:
  create a helper to identify the greatest common denominator
    recursive call to gcd fn with
      prev 2nd arg becoming new 1st arg and
      remainder of prev 1st arg divided by prev 2nd arg becoming new 2nd arg
    if remainder is ever 0 (evenly divisible and therefore gcd)
      return 1st arg
  to find lowest common multiple
    reduce args array
      multiply previous value with current value and divide by gcd of both
    return reduced result (the lcm of all args)

  collect all args into an array
  if input includes 0 or NO inputs were provided
    return 0
  initialize a loop
  identify max value of args
  initialize counter to equal max
  increment by max each iteration
    if current counter is evenly divisible by all args
      return current counter
*/

// optimal
const lcm = (...nums) => nums.reduce((p, c) => p * c / gcd(p, c)),
      gcd = (a, b) => b ? gcd(b, a % b) : a;

// inconsistent
const lcm = function (...nums) {
  if (nums.includes(0) || !nums.length) return 0;
  for (let m = Math.max(...nums), i = m; ; i += m) if (nums.every(n => !(i % n))) return i;
};