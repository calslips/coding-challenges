/*
Write a function that sums squares of numbers in list that may
contain more lists

Example:
var l = [1,2,3]
SumSquares(l) == 14

var l = [[1,2],3]
SumSquares(l) == 14

var l = [[[[[[[[[1]]]]]]]]]
SumSquares(l) == 1

var l = [10,[[10],10],[10]]
SumSquares(l) == 400

Note: your solution must NOT modify the original list

Parameters: an array of nums (or sub arrays)
Returns: a num
  sum of all nums squared
Examples:
  SumSquares([1, 2, 3]), 14
  SumSquares([[1,2],3]), 14
  SumSquares([[[[[[[[[1]]]]]]]]]), 1
  SumSquares([10,[[10],10],[10]]), 400
  SumSquares([1,[[3],10,5,[2,[3],[4],[5,[6]]]],[10]]), 325
Pseudocode:
  intialize sum var with the value of 0
  iterate over the input array
    base case
      if current el is NOT an array
        square it and add to sum
      otherwise
        recursive case
        recursively call fn with el as arg
          add return to sum
  return sum
*/

function SumSquares(l) {
  return l.flat(Infinity).reduce((s, n) => s + n * n, 0);
}

function SumSquares(l) {
  return l.reduce((s, e) => s += isNaN(e) ? SumSquares(e) : e * e, 0);
}

function SumSquares(l) {
  let sum = 0;
  l.forEach(e => sum += Array.isArray(e) ? SumSquares(e) : e * e);
  return sum;
}