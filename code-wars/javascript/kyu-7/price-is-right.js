/*
Given an array of integers, and a target integer, return the
largest integer from the array that is less than or equal to
the target.

If there is no number that is less than or equal to the target
number then return undefined.

The array of integers may be empty, but will always be an array.

Parameters:
  an array of nums
  a num
Returns:
  a num
    the largest number in array that is
    equal to or less than target num
  undefined
    if the above cannot be found
Examples:
  priceIsRight([1,2,3,4], 1), 1
  priceIsRight([1,2,3,4], 2), 2
  priceIsRight([1,2,3,4], 3), 3
  priceIsRight([1,2,3,4], 4), 4
  priceIsRight([1,2,3,4], 5), 4
  priceIsRight([1,2,3,4], 0), undefined
Pseudocode:
  sort the array descending
  iterate over the sorted array to find the value <= target
  return value
*/

function priceIsRight(numbers, target) {
  return [...numbers].sort((a, b) => b - a).find(n => n <= target);
}

function priceIsRight(numbers, target) {
  return Number.isFinite(max = Math.max(...numbers.filter(n => n <= target))) ? max : undefined;
}