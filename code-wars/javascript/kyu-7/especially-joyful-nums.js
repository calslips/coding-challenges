/*
Positive integers that are divisible exactly by the sum of their
digits are called Harshad numbers. The first few Harshad numbers
are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

We are interested in Harshad numbers where the product of its
digit sum s and s with the digits reversed, gives the original
number n. For example consider number 1729:

its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729 --> the number that we started with.

Complete the function which tests if a positive integer n is
Harshad number, and returns True if the product of its digit sum
and its digit sum reversed equals n; otherwise return False.

Parameters: a num
Returns: a boolean
  whether the the input is a harshad num
  and the product of its digital sum and
  the reverse of its digit sum equals itself
Examples:
  numberJoy(1997), false
  numberJoy(1998), false
  numberJoy(1729), true
  numberJoy(18), false
  numberJoy(1), true
  numberJoy(81), true
  numberJoy(1458), true
Pseudocode:
  calculate the digit sum
    separate the digits of input and sum them
  if input is NOT divisible by digit sum
    return false
  if digit sum times digit sum reversed does NOT equal input
    return false
  otherwise
    return true
*/

function numberJoy(n) {
  const digitSum = [...`${n}`].reduce((s, n) => s + +n, 0);
  return !(n % digitSum) && digitSum * +[...`${digitSum}`].reverse().join('') === n;
}