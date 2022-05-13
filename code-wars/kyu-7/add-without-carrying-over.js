/**
 * For this kata you will have to forget how to add two numbers.

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Parameters: two separate positive number values
Return:
  sum parameter digits located in the same place and concat into total value /
  sum of parameters without use of carry over principles
Examples:
  add(14, 18) // 212
  add(555, 88) //  51313
  add(654, 678) // 121212
Pseudocode:

  change input types from number to string
  split string into an array
  reverse array

  define empty sum array to contain sum of respective digits at same index
  define length variable to store longest input

  loop over the longest input length
    for both inputs convert the value located at the same index to num or 0 if undefined/NaN,
    add them together,
    then insert the value into the front of sum array
  return joined sum array converted to number type
​
 */

function add(num1, num2) {
  num1 = num1.toString().split('').reverse();
  num2 = num2.toString().split('').reverse();
  const sum = [];
  const length = num1.length > num2.length ? num1.length : num2.length;
  for (let i = 0; i < length; i++) {
    sum.unshift((+num1[i] || 0) + (+num2[i] || 0));
  }
  return +sum.join('');
}