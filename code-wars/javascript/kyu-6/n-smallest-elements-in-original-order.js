/*
Your task is to write a function that does just what the title suggests
(so, fair warning, be aware that you are not getting out of it just
  throwing a lame bas sorting method there) with an array/list/vector
  of integers and the expected number n of smallest elements to return.

Also:
the number of elements to be returned cannot be higher than the
array/list/vector length;
elements can be duplicated;
in case of duplicates, just return them according to the original order
(see third example for more clarity).

Parameters:
  an array
  a number
Returns: an array
  (containing the n lowest numbers from
  the input array in original order)
Examples:
  firstNSmallest([1,2,3,4,5],3) // [1,2,3]
  firstNSmallest([5,4,3,2,1],3) // [3,2,1]
  firstNSmallest([1,2,3,4,1],3) // [1,2,1]
  firstNSmallest([1,2,3,-4,0],3) // [1,-4,0]
  firstNSmallest([1,2,3,4,5],0) // []
Pseudocode:
  if array is empty or n is 0, return an empty array
  create a loop, while array length is greater than n
    find the max number and remove it from the array
    (remove the last occurrence to maintain L-R order)
  return modified array
*/

function firstNSmallest(array, n) {
  if (!array.length || !n) return [];
  while (array.length > n) array.splice(array.lastIndexOf(Math.max(...array)), 1);
  return array;
}