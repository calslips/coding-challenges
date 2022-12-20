/*
Parameters: an array of nums
Returns: an array of nums
  (0's & 1's)
Examples:
  convertPalindromes([22, 303, 76, 411, 89]), [1, 1, 0, 0, 0]
  convertPalindromes([653, 808, 5]), [0, 1, 1]
  convertPalindromes([4, 23, 441, 565, 19, 818]), [1, 0, 0, 1, 0, 1]
Pseudocode:
  map over the input nums arr
    if current num equals itself reversed
      return 1
    otherwise
      return 0
  return mapped arr
*/

function convertPalindromes(numbers) {
  return numbers.map(n => n === +[...`${n}`].reverse().join('') ? 1 : 0);
};