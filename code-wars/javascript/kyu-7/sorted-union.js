/*
Write a function that takes one or more arrays and returns a new
array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be
included in their original order, but with no duplicates in the
final array.

The unique numbers should be sorted by their original order, but
the final array should not be sorted in numerical order.

Parameters: multiple arrays of values
Returns: a single array of values
Examples:
  uniteUnique([1, 2], [3, 4]), [1, 2, 3, 4]
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]
  uniteUnique([4, 3, 2, 2]), [4, 3, 2]
  uniteUnique([4, "a", 2], []), [4, "a", 2]
  uniteUnique([], [4, "a", 2]), [4, "a", 2]
  uniteUnique([], [4, "a", 2], []), [4, "a", 2]
  uniteUnique([]), []
  uniteUnique([], []), []
  uniteUnique([], [1, 2]), [1, 2]
  uniteUnique([], [1, 2, 1, 2], [2, 1, 1, 2, 1]), [1, 2]
Pseudocode:
  collect all args
  create a new set from args elements
  convert set into an array
  return array
*/

function uniteUnique(...a) {
  return [...new Set(a.reduce((p, c) => p.concat(c)))];
}