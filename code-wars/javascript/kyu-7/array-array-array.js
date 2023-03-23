/*
You are given an initial 2-value array (x). You will use this to
calculate a score.

If both values in (x) are numbers, the score is the sum of the two.
If only one is a number, the score is that number. If neither is a
number, return 'Void!'.

Once you have your score, you must return an array of arrays.
Each sub array will be the same as (x) and the number of sub arrays
should be equal to the score.

For example:
if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

Parameters: an array containing 2 values
Returns: an array of subarrays
  where the subarrays are equivalent to input array
Examples:
  explode([9, 3]), [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
  explode(['a', 3]), [['a', 3], ['a', 3], ['a', 3]]
  explode([6, 'c']), [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
  explode(['a', 'b']), 'Void!'
  explode(["a", 0]), []
Pseudocode:
  initialize repeat var assigned to null
  if input arr contains 2 nums
    reassign repeat to equal sum of nums
  otherwise if only one element is a num
    reassing repeat to equal that num
  otherwise if none are nums
    return str 'Void!'
  return an array containing repeat amount of input array
*/

function explode(x) {
  return x.every(isNaN) ? 'Void!' : Array(x.filter(Number).reduce((s, n) => s + n, 0)).fill(x);
}