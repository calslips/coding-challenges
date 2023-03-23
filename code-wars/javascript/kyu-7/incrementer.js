/*
Given an input of an array of digits, return the array with each digit
incremented by its position in the array: the first digit will be incremented
by 1, the second digit by 2, etc. Make sure to start counting your positions
from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with
its position gives you a multiple-digit number, only the last digit of the
number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that


Parameters: an array of numbers
Returns: array with each number incremented by its position in the array (starting at 1),
  each element can only contain a single digit so for any multi-digit element,
  only place the last digit as the element in the array
Examples:
  incrementer([]) // []
  incrementer([1, 2, 3]) // [2, 4, 6]
  incrementer([4, 6, 7, 1, 3]) // [5, 8, 0, 5, 8]
  incrementer([3, 6, 9, 8, 9]) // [4, 8, 2, 2, 4]
  incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]) // [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]
Pseudocode:
  iterate over array
    add elements position (index + 1) to each element
    check if this results in a number with > 1 digit
    if so,
      only return the last digit
    otherwise,
      return the number
*/

function incrementer(nums) {
  return nums.map((n, i) => (n += i + 1) > 9 ? +`${n}`.slice(-1) : n);
}

// function incrementer(nums) {
//   return nums.map((n, i) => (n + i + 1) % 10);
// }