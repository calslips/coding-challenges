/*
Given two arrays, the purpose of this Kata is to check if these
two arrays are the same. "The same" in this Kata means the two
arrays contains arrays of 2 numbers which are same and not
necessarily sorted the same way. i.e. [[2,5], [3,6]] is same as
[[5,2], [3,6]] or [[6,3], [5,2]] or [[6,3], [2,5]] etc

[[2,5], [3,6]] is NOT the same as [[2,3], [5,6]]
Two empty arrays [] are the same
[[2,5], [5,2]] is the same as [[2,5], [2,5]] but NOT the same
as [[2,5]]
[[2,5], [3,5], [6,2]] is the same as [[2,6], [5,3], [2,5]] or
[[3,5], [6,2], [5,2]], etc
An array can be empty or contain a minimun of one array of 2
integers and up to 100 array of 2 integers

Note:
[[]] is not applicable because if the array of array are to
contain anything, there have to be two numbers.
100 randomly generated tests that can contains either "same" or
"not same" arrays.

Parameters: 2 arrays
  (each element a subarray of 2 nums,
  if subarrays contain anything at all)
Returns: a boolean
  (whether the nums contained are the same,
  order does NOT matter)
Examples:
  same([[2,5], [3,6]], [[5,2], [3,6]]) // true
  same([[2,5], [3,6]], [[6,3], [5,2]]) // true
  same([[2,5], [3,6]], [[6,3], [2,5]]) // true
  same([], []) // true
  same([[2,3], [3,4]], [[4,3], [2, 4]]) // false
  same([[2,3], [3,2]], [[2,3]]) // false
Pseudocode:
  if lengths of input arrays are not equal
    return false
  sum all nums in 1st input array
  sum all nums in 2nd input array
  return result of comparing if sums are equal
*/

function same(aArr, bArr) {
  if (aArr.length !== bArr.length) return false;
  return aArr.reduce((s, t) => s + t[0] + t[1], 0) === bArr.reduce((s, t) => s + t[0] + t[1], 0);
}