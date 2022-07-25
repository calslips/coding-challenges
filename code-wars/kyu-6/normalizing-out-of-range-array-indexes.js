/*
Implement a function that normalizes out of range sequence indexes
(converts them to 'in range' indexes) by making them repeatedly 'loop'
around the array. The function should then return the value at that index.
Indexes that are not out of range should be handled normally and indexes
to empty sequences should return undefined/None depending on the language.

For positive numbers that are out of range, they loop around starting at
the beginning, so
normIndex(arr, arr.length);     //Returns first element
normIndex(arr, arr.length + 1); //Returns second element
normIndex(arr, arr.length + 2); //Returns third element
//And so on...
normIndex(arr, arr.length * 2); //Returns first element

For negative numbers, they loop starting from the end, so
normIndex(arr, -1);    //Returns last element
normIndex(arr, -2);    //Returns second to last element
normIndex(arr, -3);    //Returns third to last element
//And so on...
normIndex(arr, -arr.length); //Returns first element

Parameters: an array and a number (index)
Returns: the element at the specified index in the input array
  (the index will never be out of range, it will loop around the
  length of the array an always return an element from the array)
Examples:
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  normIndex(array, arr.length) // 0
  normIndex(array, arr.length + 1) // 1
  normIndex(array, arr.length + 2) // 2
  normIndex(array, arr.length * 2) // 0
  normIndex(array, -1) // 9
  normIndex(array, -2) // 8
  normIndex(array, -3) // 7
  normIndex(array, -arr.length) // 0
Pseudocode:
  get the remainder of the input index divided by the input array length
  if the remainder is negative
    return the element at the index value of the remainder plus the array length
  otherwise
    return the element at the index value of the remainder
*/

function normIndex(array, index) {
  return (r = index % array.length) < 0 ? array[r + array.length] : array[r];
}