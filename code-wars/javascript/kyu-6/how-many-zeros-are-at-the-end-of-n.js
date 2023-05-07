/*
Define n!! as

n!! = 1 * 3 * 5 * ... * n if n is odd,

n!! = 2 * 4 * 6 * ... * n if n is even.

Hence 8!! = 2 * 4 * 6 * 8 = 384, there is no zero at the end.
30!! has 3 zeros at the end.

For a positive integer n, please count how many zeros are there
at the end of n!!.

Example:
30!! = 2 * 4 * 6 * 8 * 10 * ... * 22 * 24 * 26 * 28 * 30
30!! = 42849873690624000 (3 zeros at the end)

Parameters: a num
Returns: a num
Examples:
  countZeros(8), 0
  countZeros(14), 1
  countZeros(30), 3
Pseudocode:
  initialize var num as 1n
  initialize var zero count as 0;
  create a loop starting at 1 if odd or 2 if even,
  to run up to / including input,
  increment by 2
    reassign num to equal itself times current counter converted to bigint
  convert num to str
  while num str ends with 0
    increment zero count
    remove last char from num str
  return zero count
*/

function countZeros(n) {
  let num = 1n, zeros = 0;
  for (let i = n % 2 ? 1 : 2; i <= n; i += 2) num *= BigInt(i);
  let numStr = num.toString();
  while(numStr.endsWith(0)) zeros++, numStr = numStr.slice(0, -1);
  return zeros;
}