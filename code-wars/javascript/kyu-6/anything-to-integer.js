/*
Your task is to program a function which converts any input to
an integer.
Do not perform rounding, the fractional part should simply be
discarded.
If converting the input to an integer does not make sense
(with an object, for instance), the function should return 0
(zero).
Also, Math.floor(), parseInt() and parseFloat() are disabled
for your unconvenience.

Parameters: a value of any type
Returns: a num
Examples:
  toInteger("4.55"), 4
Pseudocode:
  if input can be converted to a finite num
    return int portion of input
  otherwise
    return 0
*/

function toInteger(n) {
  return isFinite(n) ? Math.trunc(n) : 0;
}

function toInteger(n) {
  return isFinite(n) && Math.trunc(n) || 0;
}