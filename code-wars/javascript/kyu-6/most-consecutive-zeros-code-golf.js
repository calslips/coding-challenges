/*
Your program must find the longest sequence of consecutive zeroes
in an integer number.

For example, the number 10002030000 has three sequences of zeroes
with lengths 3, 1 and 4. So the longest sequence is 4.

Input :
A positive integer

Output :
The max number of consecutive zeros in that number

Restrictions :
Do it in less than 60 (59 or less) chars.

Note :
The number will always have 1 or more zeroes

Parameters: a num
Returns: a num
  max count of consecutive 0's
  within input num
Examples:
  f(1002000), 3
  f(10002030000), 4
  f(10), 1
Pseudocode:
  convert input num into a str
  split str on any value other than 0 (using regex)
  map over array, replacing elements with their length
  find and return max length
*/

f=n=>Math.max(...`${n}`.split(/[^0]/).map(e=>e.length))