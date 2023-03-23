/*
You are given an array containing all integers from 1 to N,
except one that is missing.
In order to fill the array, one of the elements of the sequence
has been duplicated.
Your mission is to find which number is missing and which one
is duplicated.

Example:
solution([2,4,1,6,3,4]) should return [5,4] because 5 is missing
and 4 appears twice.

Remarks:
You are not allowed to sort the array.
Your solution should not time out for large values of N.
Ideally, your solution should not use extra space except the one
provided by the input array (which can be modified).

Parameters: an array of nums (1 to n)
Returns: an array of nums
  the missing num
  and the duplicate num
Examples:
  solution([2, 3, 1, 4, 4, 6]), [5, 4]
Pseudocode:
  initialize a results var assigned to an empty array
  initialize a hash
  iterate over the input array
    if current num exists in hash
      increment its value
    otherwise
      set its value to 1
  iterate over the length of the input array
  counter initialized as 1
    if current counter is not in hash
      push to results
    if current counter has a value of 2 in hash
      push to results
  return results
*/

function solution(array) {
  let missing = null, duplicate = null, hash = {};
  for (let num of array) hash[num] = ++hash[num] || 1;
  for (let i = 1; i <= array.length; i++) {
    if (!(i in hash)) missing = i;
    else if (hash[i] === 2) duplicate = i;
    if (missing && duplicate) break;
  }
  return [missing, duplicate];
}