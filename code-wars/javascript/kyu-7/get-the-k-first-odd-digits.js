/*
You're given two integers – n and k. n is always positive,
while k >= 0.
Write a function that returns first k odd digits in a number n.

The output should also be an integer.

In the following cases a function should return 0:

there are no odd digits in a number n;
k is bigger than a number of digits in n;
k = 0;
k is bigger than a number of odd digits in n.
BTW, is 0 an odd number or an even one?

Parameters: 2 nums
Returns: a num
  (the first 2nd arg amount of odd digits
  found within the 1st arg)
Examples:
  findOddDigits(123456789111, 5), 13579
  findOddDigits(7459274655920285, 8), 75975595
  findOddDigits(0, 100), 0
  findOddDigits(103756254800023, 2), 13
  findOddDigits(20406886, 6), 0
  findOddDigits(11111333333307, 13), 1111133333337
  findOddDigits(30982, 3), 0
Pseudocode:
  if k is zero
    return 0
  initalize nStr var assigned to n converted into a str
  if k is greater than the length of nStr
    return 0
  initialize oddStr var assigned to an empty str
  create a loop to run over the length of nStr
    if current digit in nStr is odd
      concat with oddStr
  reassign oddStr to be a slice from beginning to kth char
  if k is greater than the length of oddStr
    return 0
  return oddStr converted to num
*/

function findOddDigits(n, k) {
  if (!k) return 0;
  const nStr = n.toString();
  if (k > nStr.length) return 0;
  let oddStr = '';
  for (const d of nStr) if (d % 2) {
    oddStr += d;
    if (oddStr.length === k) break;
  }
  return k > oddStr.length ? 0 : +oddStr;
}