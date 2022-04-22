/**
 * Find the number with the most digits.

If two numbers in the argument array have the same number of digits,
return the first one in the array.
 */

function findLongest(array) {
  return array.reduce((p, c) => p.toString().length < c.toString().length ? c : p);
}