/*
Given an array a of integers, construct an array b of the same
length as a such that

b[0] = a[0] + a[1] + ... + a[n - 2] + a[n - 1]
b[1] =        a[1] + ... + a[n - 2] + a[n - 1]
...
b[n - 2] =                 a[n - 2] + a[n - 1]
b[n - 1] =                            a[n - 1]
where n is the length of a.

Input/Output
[input] integer array a
  3 ≤ a.length ≤ 10^4,
  -1000 ≤ a[i] ≤ 1000.
[output] an integer array

Example
For a = [1, 2, 3], the output should be [6, 5, 3].
b[0]= 1 + 2 + 3 = 6
b[1]=     2 + 3 = 5
b[2]=         3 = 3

For a = [1, 2, 3, -6], the output should be [0, -1, -3, -6].
b[0]= 1 + 2 + 3 - 6 = 0
b[1]=     2 + 3 - 6 = -1
b[2]=         3 - 6 = -3
b[3]=           - 6 = -6

Parameters: an array of nums
Returns: an array of nums
  each num is the sum of nums from
  that index of input array to the end
Examples:
  suffixSums([1, 2, 3]), [6, 5, 3]
  suffixSums([1, 2, 3, -6]), [0, -1, -3, -6]
  suffixSums([0, 0, 0]), [0, 0, 0]
  suffixSums([1, 123, 23]), [147, 146, 23]
Pseudocode:
  initialize a result array
  create a loop,
  initialize i at 0 & suf to be the sum of all input nums,
  run the length of input array
  reassign suf to equal itself minus num at i index
  increment i by 1
    push suf to result
  return result
*/

function suffixSums(a) {
  let sum = a.reduce((s, n) => s + n, 0);
  return a.map((_, i) => sum -= a[--i] || 0);
}

function suffixSums(a) {
  const result = [];
  for (let i = 0, suf = a.reduce((s, n) => s + n, 0); i < a.length; suf -= a[i], i++) {
    result.push(suf);
  }
  return result;
}