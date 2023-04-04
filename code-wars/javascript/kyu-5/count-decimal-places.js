/*
Can you write an algorithm to determine the number of decimal
places of a number?
Consider the decimal places to be the number of digits after
the decimal separator when the number is expressed in ordinary
decimal notation.

Parameters: a num
Returns: a num
  decimal places of input
  0 if cant be calculated
Examples:
  decimalPlaces(3.14), 2
  decimalPlaces(2.e-14), 14
  decimalPlaces(-3.14e-21), 23
  decimalPlaces(10.75), 2
  decimalPlaces(NaN), 0
  decimalPlaces(Infinity), 0
Pseudocode:
  separate input into integer and decimal portions
  if there is a decimal portion
    separate portions before and after exponential notation (if exists)
    return before length plus after converted to number (or 0 if undefined)
  otherwise if there is no decimal portion
    separate int portions into before and after exponential notation (if exists)
    return after converted to number (or 0 if undefined)
*/

function decimalPlaces(n) {
  const [int, dec] = n.toString().split('.'),
        [f, b = 0] = (dec || int).split('e-');
  return (dec ? f.length : 0) + +b;
}

function decimalPlaces(n) {
  const [int, dec] = n.toString().split('.');
  if (dec) {
    const [f, b] = dec.split('e-');
    return f.length + (+b || 0);
  }
  const [f, b] = int.split('e-');
  return +b || 0
}