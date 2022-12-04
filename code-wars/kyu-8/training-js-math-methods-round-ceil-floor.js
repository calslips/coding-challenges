/*
Coding in function roundIt. function accept 1 parameter n.
It's a number with a decimal point. Please use different
methods based on the location of the decimal point, turn
the number into an integer.

If the decimal point is on the left side of the number
(that is, the count of digits on the left of the decimal
  point is less than that on the right), Using ceil() method.
roundIt(3.45) should return 4

If the decimal point is on the right side of the number
(that is, the count of digits on the left of the decimal
  point is more than that on the right), Using floor() method.
roundIt(34.5) should return 34

If the decimal point is on the middle of the number
(that is, the count of digits on the left of the decimal
  point is equals that on the right), Using round() method.
roundIt(34.56) should return 35

Parameters: a num (float)
Returns: a num (int)
Examples:
  roundIt(3.45), 4
  roundIt(34.5), 34
  roundIt(34.56), 35
Pseudocode:
  separate the portions of the input num into int / float portions
  if the int portion of input has LESS digits than the float portion
    call ceil on the input num and return the result
  if the int portion of the input has MORE digits than the float portion
    call floor on the input num and return the result
  if the int portion and the float portion contain the SAME number of digits
    call round on the input num and return the result
*/

function roundIt(n) {
  const [int, float] = n.toString().split('.');
  return int.length < float.length ? Math.ceil(n) : int.length > float.length ? Math.floor(n) : Math.round(n);
}