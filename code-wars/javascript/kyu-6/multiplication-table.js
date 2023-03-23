/**
 * Your task, is to create NxN multiplication table, of size provided in
 * parameter.
for example, when given size is 3:
1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
 */

multiplicationTable = function(size) {
  return Array.from({length: size}, (_, i) => Array.from({length: size}, (_, j) => (i + 1) * (j + 1)));
}

// multiplicationTable = function(size) {
//   return Array(size).fill([]).map((_, i) => Array(size).fill(i).map((e, j) => (e + 1) * (j + 1)))
// }

// multiplicationTable = function(size) {
//   return Array(size).fill([]).map((_, i) => Array(size).fill(i).map((_, j) => (i + 1) * (j + 1)))
// }