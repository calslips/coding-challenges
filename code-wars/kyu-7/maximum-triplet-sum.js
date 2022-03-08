/*
Given an array/list [] of n integers , find maximum triplet sum in the
array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are
  not included when summing).

Parameters: an array of numbers, min length of 3
Returns: max sum of 3 elements in array, without duplicates
Examples:
  maxTriSum([2,9,13,10,5,2,9,5]) // 32
  maxTriSum([-3,-27,-4,-2,-27,-2]) // -9
  maxTriSum([-14,-12,-7,-42,-809,-14,-12]) // -33
  maxTriSum([-13,-50,57,13,67,-13,57,108,67]) // 232
  maxTriSum([-2,0,2]) // 0
  maxTriSum([-2,-4,0,-9,2]) // 0
Pseudocode:
  remove duplicates from input array
  sort number elements from least to greatest
  create a new array from the last 3 elements of ascending array
  add the 3 elements together
  return the sum
*/

function maxTriSum(numbers) {
  return [...new Set(numbers)].sort((a, b) => a - b).slice(-3).reduce((s, n) => s + n);
}