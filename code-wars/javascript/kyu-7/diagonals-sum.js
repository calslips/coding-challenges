/*
Create a function that receives a (square) matrix and calculates
the sum of both diagonals (main and secondary)

Matrix =
array of n length whose elements are n length arrays of integers.

3x3 example:

diagonals( [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
] );

returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7

Parameters: a 2d array, inner array contains nums
Returns: a num
Examples:
  sum([[1,2,3], [4,5,6], [7,8,9]]), 30
Pseudocode:
  initialize a sum var assigned to 0
  iterate over the inner arrays of the matrix
  keep track of start and end indices
  increment start, decremend end each iteration
    add value at start and end to sum
  return sum
*/

function sum(matrix) {
  return matrix.reduce((s, c, i, a) => s + c[i] + c[a.length - i - 1], 0);
}

function sum(matrix) {
  let sum = 0;
  for (let i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) sum += matrix[i][i] + matrix[i][j];
  return sum;
}