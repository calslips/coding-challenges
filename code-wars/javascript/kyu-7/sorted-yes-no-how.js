/*
Complete the method which accepts an array of integers,
and returns one of the following:

"yes, ascending"
  - if the numbers in the array are sorted in an ascending order
"yes, descending"
  - if the numbers in the array are sorted in a descending order
"no"
  - otherwise

You can assume the array will always be valid,
and there will always be one correct answer.

Parameters: an arr of nums
Returns: a str
  stating if input arr is sorted and in which direction
Examples:
  isSortedAndHow([1, 2]), 'yes, ascending'
  isSortedAndHow([15, 7, 3, -8]), 'yes, descending'
  isSortedAndHow([4, 2, 30]), 'no'
Pseudocode:
  if every current element is greater than or equal to the last
  (account for value before 0th index to be undefined)
    return 'yes, ascending'
  otherwise if every current element is greater than or equal to the next
  (account for value after last index to be undefined)
    return 'yes, descending'
  return 'no'
*/

function isSortedAndHow(array) {
  if (array.every((n, i, a) => n >= (a[i - 1] === undefined ? -Infinity : a[i - 1]))) return 'yes, ascending';
  else if (array.every((n, i, a) => n >= (a[i + 1] === undefined ? -Infinity : a[i + 1]))) return 'yes, descending';
  return 'no';
}