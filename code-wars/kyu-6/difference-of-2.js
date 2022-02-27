/**
 * The objective is to return all pairs of integers from a given array of
 * integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers
in the input array should not matter.

Examples
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
 */

function twosDifference(input) {
  return input.filter(n => input.includes(n + 2)).sort((a, b) => a - b).map(n => [n, n + 2]);
}

// function twosDifference(input) {
//   const sorted = input.sort((a, b) => b - a);
//   const result = [];
//   for (let i = 0; i < sorted.length; i++) {
//     sorted.forEach(e => {
//       if (sorted[i] - e === 2) result.push([e, sorted[i]]);
//     });
//   }
//   return result.sort((a, b) => a[0] - b[0]);
// }