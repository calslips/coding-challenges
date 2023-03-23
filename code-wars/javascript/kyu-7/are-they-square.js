/*
Write a function that checks whether all elements in an array
are square numbers. The function should be able to take any
number of array elements.

Your function should return true if all elements in the array
are square numbers and false if not.

An empty array should return undefined / None / nil /false
(for C). You can assume that all array elements will be
positive integers.

Examples:
isSquare([1, 4, 9, 16]) --> true
isSquare([3, 4, 7, 9]) --> false
isSquare([]) --> undefined

Parameters: an array of nums
Returns: a boolean
  whether all nums in array are square nums
  if array is empty
    return undefined
Examples:
  isSquare([1, 4, 9, 16, 25, 36]), true
  isSquare([1, 2, 3, 4, 5, 6]), false
  isSquare([]), undefined
  isSquare([1, 2, 4, 15]), false
Pseudocode:
  if input array length is zero
    return undefined
  otherwise
    iterate over the input array
      if every element has a sqrt that's an int
        return true
      otherwise
        return false
*/

const isSquare = function(arr) {
  return arr.length ? arr.every(n => Number.isInteger(Math.sqrt(n))) : undefined;
}