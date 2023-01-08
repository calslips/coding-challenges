/*
Given an unsorted array of integers, find the smallest number
in the array, the largest number in the array, and the smallest
number between the two array bounds that is not in the array.

For instance, given the array [-1, 4, 5, -23, 24], the smallest
number is -23, the largest number is 24, and the smallest number
between the array bounds is -22. You may assume the input is
well-formed.

You solution should return an array
  [smallest, minimumAbsent, largest]

The smallest integer should be the integer from the array with
the lowest value.

The largest integer should be the integer from the array with
the highest value.

The minimumAbsent is the smallest number between the largest and
the smallest number that is not in the array.

Parameters: an array of nums
Returns: an array of nums
  the lowest num within input array
  the lowest num NOT in input between min and max range of array nums
  the greatest num within input array
Examples:
  minMinMax([-1, 4, 5, -23, 24]), [-23, -22, 24]
  minMinMax([1, 3, -3, -2, 8, -1]), [-3, 0, 8]
  minMinMax([2, -4, 8, -5, 9, 7]), [-5, -3, 9]
Pseudocode:
  initialize min var assigned to min value IN input array
  initialize max var assigned to max value IN input array
  iterate between min & max values
    if current counter does not exist in input array
      return an array containing min, current counter, max
*/

function minMinMax(array) {
  const min = Math.min(...array), max = Math.max(...array);
  for (let i = min + 1; i < max; i++) if (!array.includes(i)) return [min, i, max];
}