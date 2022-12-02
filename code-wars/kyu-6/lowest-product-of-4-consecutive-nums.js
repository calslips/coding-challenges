/*
Create a function that returns the lowest product of 4
consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more.
If not, return "Number is too small".

Example
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"

Parameters: a str of digits
Returns:
  a num
  a str if input does NOT have 4 consecutive digits
Examples:
  lowestProduct("123456789"), 24
  lowestProduct("234567899"), 120
  lowestProduct("2345611117899"), 1
  lowestProduct("333"), "Number is too small"
  lowestProduct("1234111"), 4
Pseudocode:
  initialize a lowest var assigned to Inifinity
  iterate over the input str,
  start at counter 0
  run as long as counter is less than/equal to str length minus 4
  increment counter by 1
    slice input str from counter to counter + 4
    spread sliced str into an array of str digits
    obtain the product of multiplying the str digits with each other
    if product is less than lowest
      reassign lowest to equal product
  if lowest equals infinity (never entered loop, input length < 4)
    return str 'Number is too small'
  otherwise
    return lowest
*/

function lowestProduct(input) {
  let lowest = Infinity;
  for (let i = 0; i <= input.length - 4; i++) {
    const product = [...input.slice(i, i + 4)].reduce((p, n) => p * n);
    if (product < lowest) lowest = product;
  }
  return lowest === Infinity ? 'Number is too small' : lowest;
}