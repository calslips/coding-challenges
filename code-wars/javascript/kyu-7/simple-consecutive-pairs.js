/*
In this Kata your task will be to return the count of pairs that
have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3.
--the last digit has no pair, so we ignore.

Parameters: an array of nums
Returns: a num
Examples:
  pairs([1,2,5,8,-4,-3,7,6,5]), 3
  pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]), 2
  pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]), 0
  pairs([-55, -56, -7, -6, 56, 55, 63, 62]), 4
  pairs([73, 72, 8, 9, 73, 72]), 3
Pseudocode:
  initialize count var assigned to 0
  iterate over the input arr in 2s
  (to the end if length is even, exclude last if odd)
    if the abs difference b/w the 2 adjacent nums is 1
      increment count
  return count
*/

function pairs(ar) {
  let count = 0;
  for (let i = 0; i < ar.length - ar.length % 2; i++) {
    if (Math.abs(ar[i] - ar[++i]) === 1) count++;
  }
  return count;
}

function pairs(ar) {
  let count = 0;
  for (let i = 0; i < ar.length - ar.length % 2; i += 2) {
    if (Math.abs(ar[i] - ar[i + 1]) === 1) count++;
  }
  return count;
}