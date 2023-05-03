/*
Implement a function move_zeros which takes two arguments first
an array of numbers arrNum and second a Boolean value isRight
(default is true) and returns the array with all zero to right
if isRight is true else to left if isRight is false.

Example:

arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
move_zeros(arrNum, true)
  //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]

arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
move_zeros(arrNum, false)
  //=> returns [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]

arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
move_zeros(arrNum)
  //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]

Tips: Order of other numbers should not change.

Parameters:
  an array of nums
  a boolean
Returns: an array of nums
Examples:
  move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true),
    [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
  move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false),
    [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]
  move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0]),
    [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
Pseudocode:
  filter the zeros out of the input array
  find the difference in length between input array and filtered array
  if isRight is true or undefined
    return filtered array concatted with array of length difference filled with zeroes
  otherwise
    return array of length difference filled with zeros concatted with filtered array
*/

function move_zeros(arrNum, isRight) {
  const noZs = arrNum.filter(Boolean), zCt = arrNum.length - noZs.length;
  return isRight || isRight === undefined ? noZs.concat(Array(zCt).fill(0)) : Array(zCt).fill(0).concat(noZs);
}

function move_zeros(arrNum, isRight) {
  const noZs = arrNum.filter(Boolean), zCt = arrNum.length - noZs.length;
  return isRight || isRight === undefined ? [...noZs, ...Array(zCt).fill(0)] : [...Array(zCt).fill(0), ...noZs];
}