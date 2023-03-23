/*
In this Kata the aim is to compare each pair of integers from 2 arrays,
and return a new array of large numbers.
Note: Both arrays have the same dimensions.

Parameters: two arrays of numbers, same length
Returns: a single array containing the larger numbers
  (resulting from a comparison of the input arrays)
Examples:
  getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])
    // [23, 64, 53, 17, 88]
  getLargerNumbers([34, -64, 15, 17, 88], [23, 14, 53, 17, 80])
    // [34, 14, 53, 17, 88]
Pseudocode:
  initialize result variable, assigned to an empty array
  iterate over the 1st input array
    compare number at current index with number in 2nd array at same index
    push whichever is greater to the result array
  return result array
*/

function getLargerNumbers(a, b) {
  return a.map((e, i) => e > b[i] ? e : b[i]);
}