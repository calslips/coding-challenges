/*
Given an array containing only integers, add all the elements
and return the binary equivalent of that sum.

If the array contains any non-integer element
(e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == false

Parameters: an array of nums
  (may contain non nums)
Returns:
  a str (binary)
  OR a boolean (if input array contains non nums)
Examples:
  arr2bin([1,2]), "11"
  arr2bin([1,2,3,4,5]), "1111"
  arr2bin([1,10,100,1000]), "10001010111"
Pseudocode:
  initialize a sum var assigned to 0
  iterate over the input array
    if current element is a num
      add num to sum
    otherwise
      return false
  convert sum to binary
  return binary sum
*/

function arr2bin(arr) {
  let sum = 0;
  for (const e of arr) {
    if (Number.isInteger(e)) sum += e;
    else return false;
  }
  return sum.toString(2);
}