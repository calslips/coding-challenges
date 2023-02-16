/*
Write a method that returns true if a given parameter is a power
of 4, and false if it's not. If parameter is not an Integer
(eg String, Array) method should return false as well.

Examples
powerOf4(1024) // returns true
powerOf4(44) // returns false
powerOf4("not a positive integer") // returns false

Parameters: a num
Returns: a boolean
  if input num is a power of 4
Examples:
  powerOf4(4), true
  powerOf4(16), true
  powerOf4(1), true
  powerOf4(3.1415), false
  powerOf4('4'), false
  powerOf4(null), false
  powerOf4(undefined), false
  powerOf4(function() {}), false
Pseudocode:
  initialize exp var assigned to 0
  create a loop to run as long as 4 to the power of exp is less than or equal input num
    if current power is equal to input num
      return true
    otherwise
      increment exp
  return false
    (conditional in loop is not satisfied before the value
    is greater than input, meaning it is NOT a power of 4)
*/

function powerOf4(n) {
  for (let e = 0, p = 1; p <= n; p = 4 ** ++e) if (p === n) return true;
  return false;
}