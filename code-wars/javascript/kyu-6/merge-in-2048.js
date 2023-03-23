/*
The main part of this game is merging identical tiles in a row.
Implement a function that models the process of merging all of
the tile values in a single row.
This function takes the array line as a parameter and returns a
new array with the tile values from line slid towards the front
of the array (index 0) and merged.
A given tile can only merge once.
Empty grid squares are represented as zeros.
Your function should work on arrays containing arbitrary number
of elements.

Examples
merge([2,0,2,2])  -->  [4,2,0,0]

Another example with repeated merges:
merge([4,4,8,16])  -->  [8,8,16,0]
merge([8,8,16,0])  -->  [16,16,0,0]
merge([16,16,0,0]) -->  [32,0,0,0]

Parameters: an array of numbers
Returns: an array of numbers
  values slide to the front and
  values that repeat are merged,
  numbers can only merge once, 0 value is
  added to the end to fill missing space
Examples:
    merge([2,0,2,2]) // [4,2,0,0]
    merge([2,0,2,4]) // [4,4,0,0]
    merge([0,0,2,2]) // [4,0,0,0]
Pseudocode:
  initialize a result variable assigned to input array without 0's
  iterate over the result array (stopping before last)
    if current number equals next number
      replace current with sum of current and next
      remove next
  return result array with missing values filled with 0's
  (maintain original input array length)
*/

function merge(line) {
  const result = line.filter(n => n);
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] === result[i + 1]) {
      result[i] += result[i + 1];
      result.splice(i + 1, 1);
    }
  }
  while (result.length < line.length) result.push(0);
  return result;
};