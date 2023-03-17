/*
Given the prefix sums of some array A, return suffix sums for
the same array.

Array of prefix sums is defined as:
B[0] = A[0]
B[1] = A[0] + A[1]
B[2] = A[0] + A[1] + A[2]
...
B[n - 1] = A[0] + A[1] + ... + A[n - 1]

Array of suffix sums is defined as:
B[0] = A[0] + A[1] + A[2] + ... + A[n - 1]
B[1] =        A[1] + A[2] + ... + A[n - 1]
...
B[n - 2] =             A[n - 2] + A[n - 1]
B[n - 1] =                        A[n - 1]

Input/Output
[input] integer array prefixSums
  prefix sums of the orginal array.
  1 ≤ prefixSums.length ≤ 10^4,
  -10^5 ≤ prefixSums[i] ≤ 10^5.
[output] an integer array
  suffix sums of the orginal array.

Example
For prefixSums = [1, 3, 6, 10, 15],
the output should be [15, 14, 12, 9, 5].
You may verify that the initial array A is [1, 2, 3, 4, 5]
(just try to calculate the prefix sums of it).
Then following the rules, you can calculate the suffix sums of A.

Parameters: an array of nums (prefix sums)
Returns: an array of nums (suffix sums)
Examples:
  prefixSumsToSuffixSums([1, 3, 6, 10, 15]), [15, 14, 12, 9, 5]
  prefixSumsToSuffixSums([0]), [0]
  prefixSumsToSuffixSums([-1, -2, -3, -4, -5]), [-5, -4, -3, -2, -1]
  prefixSumsToSuffixSums([1, -4, 2, 90, 100, -1]), [-1, -2, 3, -3, -91, -101]
  prefixSumsToSuffixSums([1, 0, 1, 0, 1, 0, 1, 0]), [0, -1, 0, -1, 0, -1, 0, -1]
  prefixSumsToSuffixSums([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  prefixSumsToSuffixSums([0, 0, 0, 0, 0, 0, 1, 1, 1, 1]), [1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
Pseudocode:
  convert prefix arr back to original arr
    subtract current num by prev num
    (except 1st num, leave as is)
  take prefix & reverse it to reduce into suffix
    if current el is 0th el
      leave as is
    otherwise
      take prev value and return the difference between
      itself and value at prev index of original arr
  return suffix arr
*/

function prefixSumsToSuffixSums(prefixSums) {
  return prefixSums.map((_, i, a) => i ? a.at(-1) - a[--i] : a.at(-1));
}

function prefixSumsToSuffixSums(prefixSums) {
  const og = prefixSums.map((n, i, a) => i ? n - a[--i] : n);
  return prefixSums.reverse().map((n, i, a) => i ? a[i] = a[--i] - og[i] : n);
}

function prefixSumsToSuffixSums(prefixSums) {
  const og = prefixSums.map((n, i, a) => i ? n - a[--i] : n);
  return prefixSums.reverse().reduce((s, n, i) => (i ? s.push(s[--i] - og[i]) : s.push(n), s), []);
}

function prefixSumsToSuffixSums(prefixSums) {
  const og = prefixSums.map((n, i, a) => i ? n - a[--i] : n);
  return Array(og.length).fill(prefixSums.at(-1)).map((n, i, a) => i ? (a[i] = a[i - 1] - og[i - 1], a[i]) : n);
}