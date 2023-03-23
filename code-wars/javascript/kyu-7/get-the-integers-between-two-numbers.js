/*
Build a function that can get all the integers between two given numbers.

Example:

(2,9)

Should give you this output back:

[ 3, 4, 5, 6, 7, 8 ]

If startNum is the same as endNum, return an empty array.


Parameters: 2 number values
Returns:
  an array of numbers between the 2 input numbers
Examples:
  range(2,9) // [3,4,5,6,7,8]
  range(6,8) // [7]
  range(2,9) // [3,4,5,6,7,8]
Pseudocode:
  initialize a result variable assigned to an empty array
  create a loop, count equals 1st arg + 1, ends at 2nd arg, increment count by 1
    push count to result loop
  return result
*/

function range(startNum, endNum) {
  const result = [];
  for (let i = ++startNum; i < endNum; i++) {
    result.push(i);
  }
  return result;
}