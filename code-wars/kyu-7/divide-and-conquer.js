/*
Given a mixed array of number and string representations of integers,
add up the string integers and subtract this from the total of the
non-string integers.

Return as a number.

Parameters: an array containing string representations of integers and numbers
Returns: the string ints added together and subtracted from the sum of numbers
Examples:
  divCon([9, 3, '7', '3']) // 2
  divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]) // 14
  divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) // 13
Pseudocode:
  reduce the input array, initialize sum accumulator to 0
    check if current element is of string type
      if so, convert to number and subtract from accumulator
      else, add to accumulator
  return reduced value
*/

function divCon(x) {
  return x.reduce((s, n) => typeof n === 'string' ? s - +n : s + n, 0);
}