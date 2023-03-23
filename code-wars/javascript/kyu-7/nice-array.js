/*
A Nice array is defined to be an array where for every value n in the array,
there is also an element n - 1 or n + 1 in the array.

Write a function named isNice/IsNice that returns true if its array argument
is a Nice array, else false. An empty array is not considered nice.

Parameters: an array of numbers
Returns: boolean
  true if the array contains every element +/- 1
  false if it does NOT
Examples:
  isNice([2,10,9,3]) // true
  isNice([3,4,5,7]) // false
Pseudocode:
  if input array is empty
    return false
  otherwise
    iterate over each element of the array
      check if the array contains either the element + 1 OR -1
        if it does
          return true
        if not
          return false
*/

function isNice(arr) {
  return !!arr.length && arr.every(n => arr.includes(n + 1) || arr.includes(n - 1));
}