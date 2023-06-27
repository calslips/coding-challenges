/*
Given an array of integers arr, find the leftmost number that
has a decimal representation which doesn't contain any digit
more than once. If there is no such number, return -1 instead.

Input/Output
[input] array.integer arr
  Array of positive integers.
  2 ≤ inputArray.length ≤ 100000,
  10 ≤ inputArray[i] ≤ 10000000.
[output] an integer

Example
For arr = [22, 111, 101, 124, 33, 30], the output should be 124
For arr = [1111, 404], the output should be -1.

Parameters: an array of nums
Returns: a num
Examples:
  differentDigitsNumberSearch([22, 111, 101, 124, 33, 30]), 124
  differentDigitsNumberSearch([1111, 404]), -1
  differentDigitsNumberSearch([10, 11, 12, 13]), 10
Pseudocode:
  iterate over the input array
    convert current el to a set of digits and back to a num
    if current el equals above num
      return current el
  return -1
*/

function differentDigitsNumberSearch(arr) {
  return arr.find(n => +[...new Set(`${n}`)].join('') === n) || -1;
}