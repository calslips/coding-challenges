/*
Given an array (a list in Python) of integers and an integer n, find all
occurrences of n in the given array and return another array containing
all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.


Parameters: an array of integers and an integer (n)
Returns: an array containing the indexes of n within the input array,
  [] if not present
Examples:
  findAll([6, 9, 3, 4, 3, 82, 11], 3) // [2, 4]
  findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16) // [1, 9]
  findAll([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20) // [0, 1, 8]
Pseudocode:
  initialize empty result array to hold indexes of n in input array
  iterate over input array
    if current element is equal to n
      push index to result array
    otherwise
      continue
  return result array
*/

const findAll = (array, n) => {
  return array.reduce((a, e, i) => e === n ? a.concat(i) : a, []);
}