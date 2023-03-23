/*
Given a long number, return all the possible sum of two digits of it.
For example, 12345: all possible sum of two digits from that number are:
[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]

Therefore the result must be:
[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

Parameters: a num
Returns: an array of nums
  all possible sum of 2 digits from input num
Examples:
  digits(156), [6, 7, 11]
  digits(81596), [9, 13, 17, 14, 6, 10, 7, 14, 11, 15]
  digits(3852), [11, 8, 5, 13, 10, 7]
  digits(3264128), [5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10]
  digits(999999), [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18]
Pseudocode:
  initialize results var assigned to empty array
  convert input num to an array of digits
  iterate over the input array from 1st index to last exclusive
    iterate over the input array, accessing index greater than outer loop count
      add el at outer index with el at inner index and push sum to results
  return results
*/

function digits(num) {
  const results = [], nums = [...`${num}`].map(Number);
  for (let i = 0; i < nums.length - 1; i++) for (let j = i + 1; j < nums.length; j++) results.push(nums[i] + nums[j]);
  return results;
}