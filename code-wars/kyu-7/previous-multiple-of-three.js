/*
Given a positive integer n: 0 < n < 1e6, remove the last digit
until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no
such number exists, return null, a similar empty value, or -1.

Parameters: a num
Returns: a num or null
  if remaining num is a multiple of 3 or not
Examples:
  prevMultOfThree(1), null
  prevMultOfThree(25), null
  prevMultOfThree(36), 36
  prevMultOfThree(1244), 12
  prevMultOfThree(952406), 9
Pseudocode:
  // base case
    if input num is a multiple of 3
      return num
    otherwise if input num is a single digit
      retun null
  // recursive case
    return recursive call to fn where arg is
      input num with last digit removed
*/

const prevMultOfThree = n => {
  if (!(n % 3)) return n;
  else if (`${n}`.length < 2) return null;
  return prevMultOfThree(+`${n}`.slice(0, -1));
}