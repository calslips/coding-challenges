/*
In this Kata, you will be given an array of arrays and your task
will be to return the number of unique arrays that can be formed
by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in
only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates;
for example solve([[1,2],[4,4],[5,6,6]]) = 4,
since the extra outcomes are just duplicates.

Parameters: an array or arrays
Returns: a number
  the amount of unique array combinations
  that can be made from the input
Examples:
  solve([[1, 2], [4], [5, 6]]) // 4
  solve([[1, 2], [4 ,4], [5, 6, 6]]) // 4
  solve([[1, 2], [3, 4], [5, 6]]) // 8
  solve([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]]) // 72
Pseudocode:
  map over the array of arrays
    make each sub array only contain unique values
    return the length of each unique subarray
  reduce the array of lengths
    multiply the lengths against eachother
  return the reduced product
*/

function solve(arr) {
  return arr.map(a => [...new Set(a)].length).reduce((p, n) => p * n);
};

// function solve(arr) {
//   return arr.map(a => [...new Set(a)]).reduce((p, a) => p * a.length, 1);
// };