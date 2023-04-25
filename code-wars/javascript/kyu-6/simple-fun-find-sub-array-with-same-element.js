/*
Given an array of positive integers a and an integer k, find the
first and last index of the longest subarray of a that consists
only of k.
If the array contains multiple subarrays of the same length,
return indices of the last one.
If k doesn't exist in a, return (-1, -1).

Input/Output
[input] integer array a
A non-empty array. For each valid i 1 ≤ a[i] ≤ 9.

[input] integer k
1 ≤ k ≤ 9.

[output] an integer array
The first and the last indices of the longest subarray consisting
of k only, as an array in the format (start, end), or (-1, -1) if
k is not present in a.

Example
For a = [2,1,1,1,1,3,3,4,5,1,1,1] and k = 3,
the output should be (5, 6).
The longest subarray of a that contains 3s starts at index 5 and
ends at index 6.

For a = [2,1,1,1,1,3,3,4,5,1,1,1,1] and k = 1,
the output should be (9, 12).
There are two subarrays of 1, and they have equal length. One goes
from index 1 to 4, and another one from index 9 to 12. The answer
should be (9, 12) as it is the last to occur.

For a = [1, 2, 3] and k = 9,
the output should be (-1, -1).

Parameters:
  an array of nums
  a num
Returns: a tuple of nums
  start and end indices of last longest
  consecutive sequence of input num in input arr
Examples:
  findSubArrayWithSameElement([2, 1, 1, 1, 1, 3, 3, 4, 5, 1, 1, 1],3), [5, 6]
  findSubArrayWithSameElement([2, 1, 1, 1, 1, 3, 3, 4, 5, 1, 1, 1, 1],1), [9, 12]
  findSubArrayWithSameElement([1, 2, 3],9), [-1, -1]
  findSubArrayWithSameElement([1],1), [0, 0]
  findSubArrayWithSameElement([1, 2, 3],4), [-1, -1]
Pseudocode:
  initialize result array containing -1 & -1
  if a does NOT contain k at all
    return result
  initialize a length var assigned to 0
  iterate over a
    if current value equals k
      increment length
      initialize start var as current index
      while the next value equals k
        increment length
        increment index
      if length is greater than or equal to result[1] - result[0] + 1
        reassign result[0] to equal start
        reassign result[1] to equal current index
      reassign length to equal 0
  return result
*/

function findSubArrayWithSameElement(a, k) {
  const result = [-1, -1];
  for (let i = 0, l = 1, s = i; i < a.length; i++, l = 1, s = i) {
    if (a[i] === k) {
      while (a[i + 1] === k) i++, l++;
      if (l > result[1] - result[0]) result[0] = s, result[1] = i++;
    }
  }
  return result;
}