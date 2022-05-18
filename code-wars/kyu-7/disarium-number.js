/*
Disarium number is the number that The sum of its digits powered with their
respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"

Parameters: a single positive number value
Returns:
  return 'Disarium !!' if the sum of n's digits powered (to its position) equal n
  otherwise, return 'NOT !!';
Examples:
  disariumNumber(135) // "Disarium !!"
  disariumNumber(1024) // "Not !!"
  disariumNumber(89) // "Disarium !!"
  disariumNumber(136586) // "Not !!"
Pseudocode:
  convert n to string
  split string into an array, where each element is a single digit of n as a string
  iterate over the array
    convert each element to number and power it to its position (1 indexed)
  sum the new numbers
  check if sum equals n
    if so, return 'Disarium !!'
    otherwise, return 'Not !!'
*/

function disariumNumber(n) {
  return [...n.toString()].reduce((s, n, i) => s + Math.pow(+n, i + 1), 0) === n ? 'Disarium !!' : 'Not !!';
}