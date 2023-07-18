/*
Every Turkish citizen has an identity number whose validity can be
checked by these set of rules:

It is an 11 digit number
First digit can't be zero
Take the sum of 1st, 3rd, 5th, 7th and 9th digit and multiply it by 7.
Then subtract the sum of 2nd, 4th, 6th and 8th digits from this value.
Modulus 10 of the result should be equal to 10th digit.
Sum of first ten digits' modulus 10 should be equal to eleventh digit.

Example:

10167994524
//  1+1+7+9+5= 23   // "Take the sum of 1st, 3rd, 5th, 7th and 9th digit..."
//    23 * 7= 161   //  "...and multiply it by 7"
//   0+6+9+4 = 19   // "Take the sum of 2nd, 4th, 6th and 8th digits..."
// 161 - 19 = 142   // "...and subtract from first value"
// "Modulus 10 of the result should be equal to 10th digit"
10167994524
         ^ = 2 = 142 % 10
// 1+0+1+6+7+9+9+4+5+2 = 44
// "Sum of first ten digits' modulus 10 should be equal to eleventh digit"
10167994524
          ^ = 4 = 44 % 10

Your task is to write a function to check the validity of a given number.
Return true or false accordingly.

Note: The input can be a string in some cases.

Parameters: a num or str
Returns: a boolean
Examples:
  checkValidTrNumber(6923522112), false
  checkValidTrNumber(692352217312), false
  checkValidTrNumber('x5810a78432'), false
  checkValidTrNumber(36637640050), true
  checkValidTrNumber(12762438338), true
Pseudocode:
  if input is a str & any digit is NOT valid
    return false
  otherwise if input is of type number
    convert input to str
  if first digit is zero or length of input is NOT equal to 11
    return false
  obtain the sum of all even indexed digits (NOT 10th) and multiply by 7
  obtain sum of all odd indexed digits (NOT 9th) and subtract from above
  if above modulus 10 does NOT equal 9th indexed digit
    return false
  obtain sum of 1st 10 digits modulo 10
  return if above equals last digit
*/

function checkValidTrNumber(n) {
  if (isNaN(n)) return false;
  if (typeof n === 'number') n = `${n}`;
  if (!+n[0] || n.length !== 11) return false;
  const [evens, odds] = [...n.slice(0, -2)].reduce((s, n, i) => (s[i % 2] += +n, s), [0, 0]);
  if ((evens * 7 - odds) % 10 !== +n[9]) return false;
  return (evens + odds + +n[9]) % 10 === +n[10];
}