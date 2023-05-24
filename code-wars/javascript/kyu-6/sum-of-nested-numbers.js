/*
Build a function sumNestedNumbers/sum_nested_numbers that finds
the sum of all numbers in a series of nested arrays raised to
the power of their respective nesting levels. Numbers in the
outer most array should be raised to the power of 1.

Parameters: an array of nums
Returns: a num
Examples:
  sumNestedNumbers([1, [2], 3, [4, [5]]]), 149
Pseudocode:
  keep track of nested level, starting at 1
  initialize sum as 0
  iterate over the length of the input array
    if current el is a num
      add current num to the power of nested level to sum
    otherwise if current el is an array
      add result of recursive call to fn with current el array passed in
      and nested level incremented to sum
  return sum
*/

function sumNestedNumbers(arr, depth = 1) {
  let sum = 0;
  arr.forEach(e => sum += Array.isArray(e) ? sumNestedNumbers(e, depth + 1) : Math.pow(e, depth));
  return sum;
}