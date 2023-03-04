/*
Today's task is to write a function empty(), which take an array
as argument. This function should return the same array, but empty.

To make it even more fun, you are not allowed to use any kind of
loop (nor recursion)

Parameters: an array
Returns: an empty array (the same input array)
Examples:
  const arr = [1, 2, 3];
  empty(arr) === arr && arr.length === 0
Pseudocode:
  splice passed in array with delete count equal to array length
  return array
*/

function empty(array) {
  return array.splice(0, Infinity), array;
}