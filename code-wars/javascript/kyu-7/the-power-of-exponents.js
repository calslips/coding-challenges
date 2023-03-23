/*
This kata is based on: Exponent Method

Create a method called power that takes two integers and returns
the value of the first argument raised to the power of the second.

Unlike the Exponent Method, you should also take in account
negative exponents.

Your solution won't be tested against special cases leading to
undefined values (0**-2 for example)

Note: The ** operator (JS: Math.pow) has been disabled.

Parameters: 2 nums
Returns: a num
  1st input raised to the 2nd input power
  (cannot use Math.pow or **)
Examples:
  power(2, 3), 8
  power(4, -2), 0.0625
Pseudocode:
  initialize an array the size of the abs value of 2nd arg, filled with first arg
  reduce array into a single value multiplying an accumulating value against each element
  if 2nd arg was negative
    return 1 divided by reduced value
  otherwise
    return reduced value
*/

function power(base, exponent) {
  const pow = Array(Math.abs(exponent)).fill(base).reduce((p, b) => p * b, 1);
  return exponent < 0 ? 1 / pow : pow;
}