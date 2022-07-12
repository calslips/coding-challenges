/*
Find the sum of the digits of all the numbers from 1 to N (both ends included).

Parameters: a single integer
  (the limit to the number range of which to sum)
Returns: a single integer
  (the sum of all digits of numbers between 1 and input number, N)
Examples:
  twistedSum(3) // 6
  twistedSum(10) // 46
  twistedSum(11) // 48
  twistedSum(12) // 51
Pseudocode:
  initialize sum variable assigned to 0
  initialize a range array that contains all the number values from 1 to input N
  iterate over the range array
    check if value is greater than 9
      if it is
        convert number to string
        split string into an array
        (each element to be string representation of individual digits)
        iterate over array of string digits
          convert element to number
          add number to sum
      if not
        add numnber to sum
  return sum
*/

function twistedSum(n) {
  return [...Array(n)].reduce((s, _, i) => s + [...++i + ''].reduce((p, c) => p + +c, 0), 0);
}

// function twistedSum(n) {
//   return Array.from({length: n}, (e, i) => i + 1).reduce((s, n) => n > 9 ? s + [...n.toString()].reduce((p, c) => p + +c, 0) : s + n, 0);
// }