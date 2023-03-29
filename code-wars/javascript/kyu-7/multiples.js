/*
Make a program that takes a value (x) and returns "Bang" if the
number is divisible by 3, "Boom" if it is divisible by 5,
"BangBoom" if it divisible by 3 and 5, and "Miss" if it isn't
divisible by any of them.

Note: Your program should only return one value
Ex: Input: 105 --> Output: "BangBoom"
Ex: Input: 9 --> Output: "Bang"
Ex: Input: 25 --> Output: "Boom"

Parameters: a num
Returns: a str
Examples:
  multiple(30), "BangBoom"
  multiple(3), "Bang"
  multiple(98), "Miss"
  multiple(65), "Boom"
  multiple(23), "Miss"
  multiple(15), "BangBoom"
Pseudocode:
  if num is divisible by both 3 AND 5
    return 'BangBoom'
  if num is only divisible by 3
    return 'Bang'
  if num is only divisible by 5
    return 'Boom'
  otherwise
    return 'Miss'
*/

function multiple(x) {
  return !(x % 15) ? 'BangBoom' : !(x % 3) ? 'Bang' : !(x % 5) ? 'Boom' : 'Miss';
}