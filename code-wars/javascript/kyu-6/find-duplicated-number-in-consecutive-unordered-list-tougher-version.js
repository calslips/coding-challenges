/**
 * Spin-off of this kata, here you will have to figure out an efficient
 * strategy to solve the problem of finding the sole duplicate number
 * among an unsorted array/list of numbers starting from 1 up to n.

Hints: a solution in linear time can be found; using the most intuitive
ones to search for duplicates that can run in O(n²) time won't work.
 */

var findDup = function(arr) {
  return arr.find(e => arr.indexOf(e) !== arr.lastIndexOf(e));
}

// var findDup = function(arr) {
//   for (let i = 1; i <= Math.max(...arr); i++) {
//     if (arr.indexOf(i) !== arr.lastIndexOf(i)) return i;
//   }
// }