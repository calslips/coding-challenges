/*
As part of this Kata, you need to find the length of the
sequence in an array, between the first and the second
occurrence of a specified number.

For example, for a given array arr
[0, -3, 7, 4, 0, 3, 7, 9]

Finding length between two 7s like
lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)
would return 5.

For sake of simplicity, there will only be numbers (positive or
  negative) in the supplied array.

If there are less or more than two occurrences of the number to
search for, return 0, or in Haskell, Nothing.

Parameters:
  an array of nums
  a num
Returns: a num (length of 1st occurrence to 2nd)
Examples:
  lengthOfSequence([1, 1], 1), 2
  lengthOfSequence([1, 2, 3, 1], 1), 4
  lengthOfSequence([-7, 5, 0, 2, 9, 5], 5), 5
  lengthOfSequence([-7, 6, 2, -7, 4], -7), 4
Pseudocode:
  initialize an array to contain indices of occurrences
  iterate over the input array
    if current num equals input num
      push current index to array of indices
  if array of indices length is NOT equal to 2
    return 0
  otherwise
    return difference between 2nd index minus 1st index plus 1
*/

const lengthOfSequence = function(arr, n) {
  return (a = arr.reduce((a, e, i) => (e === n && a.push(i), a), [])).length === 2 ? ++a[1] - a[0] : 0;
};

const lengthOfSequence = function(arr, n) {
  return (a = arr.reduce((a, e, i) => e === n ? a.concat(i) : a, [])).length === 2 ? ++a[1] - a[0] : 0;
};

const lengthOfSequence = function(arr, n) {
  const indices = arr.reduce((a, e, i) => e === n ? a.concat(i) : a, []);
  return indices.length === 2 ? ++indices[1] - indices[0] : 0;
};