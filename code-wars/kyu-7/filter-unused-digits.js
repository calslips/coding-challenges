/*
Given a varying number of integer arguments, return the digits that are not
present in any of them.
Note: the digits in the resulting string should be sorted.

Parameters: multiple integer values
Returns: sorted string of digits not present in input values
Examples:
  unusedDigits(12, 34, 56, 78) // "09"
  unusedDigits(2015, 8, 26) // "3479"
Pseudocode:
  initialize result variable as empty string
  place arguments into an array & join args into a single string
  iterate over input str, loop count start at 0 end at 9
    check if current count is included in input str
      if it is NOT, add digit to result variable
    otherwise
      continue
  return result
*/

function unusedDigits() {
  let result = '';
  let inputStr = [...arguments].join('');
  for (let i = 0; i < 10; i++) {
    if (!inputStr.includes(i)) result += i;
  }
  return result;
}