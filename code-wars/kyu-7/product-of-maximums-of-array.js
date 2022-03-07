/*
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.


Parameters: an array of numbers (min length of 3),
  the number (k) of maximal elements in the array to multiply against eachother
Returns: single number (product of k maximal values)
Examples:
  maxProduct([8,6,4,6], 3) // 288
  maxProduct([13,12,-27,-302,25,37,133,155,-14], 5) // 247895375
  maxProduct([-17,-8,-102,-309], 2) // 136
  maxProduct([14,29,-28,39,-16,-48], 4) // -253344
  maxProduct([1], 1) // 1
Pseudocode:
  sort input array in ascending order
  create a new array to include the last k elements of the sorted array
  multiply the elements within the new array
  return the product
*/

function maxProduct(numbers, size) {
  return numbers.sort((a, b) => a - b).slice(-size).reduce((p, n) => p * n);
}