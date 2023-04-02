/*
Given an array arr and a number n. Call a pair of numbers from
the array a Perfect Pair if their sum is equal to n.

Find all of the perfect pairs and return the sum of their indices.

Note that any element of the array can only be counted in one
Perfect Pair. Also if there are multiple correct answers, return
the smallest one.

Example
For arr = [1, 4, 2, 3, 0, 5] and n = 7, the result should be 11.
Since the Perfect Pairs are (4, 3) and (2, 5) with indices
1 + 3 + 2 + 5 = 11.

For arr = [1, 3, 2, 4] and n = 4, the result should be 1.
Since the element at index 0 (i.e. 1) and the element at index 1
(i.e. 3) form the only Perfect Pair.

Input/Output
[input] integer array arr
  array of non-negative integers.
[input] integer n
  positive integer
[output] integer
  sum of indices and 0 if no Perfect Pair exists.

Parameters:
  an array of nums
  a num
Returns: a num
  sum of indices from input array
  whose values paired with another
  equate to input num
  (no repeated use of pairs)
Examples:
  pairwise([1, 4, 2, 3, 0, 5],7), 11
  pairwise([1, 3, 2, 4],4), 1
  pairwise([1, 1, 1],2), 1
  pairwise([0, 0, 0, 0, 1, 1],1), 10
  pairwise([15, 1, 1],5), 0
Pseudocode:
  initialize a sum var assigned to 0
  iterate over the input array
    if index of input num minus current value is greater than -1
    (start search after current index)
      add current index + index of difference to sum
      delete value at difference index
  return sum
*/

function pairwise(arr, n) {
  return [...arr].reduce((s, e, i, a) => (d = a.indexOf(n - e, i + 1)) > -1 ? delete a[d] && s + i + d : s, 0);
}

function pairwise(arr, n) {
  let sum = 0;
  [...arr].forEach((e, i, a) => {if ((d = a.indexOf(n - e, i + 1)) > -1) sum += i + d, delete a[d]});
  return sum;
}