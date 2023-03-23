/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before
and after each odd integer, but do not begin or end the
string with a dash mark. If n is negative, then the negative
sign should be removed.

If n is not an integer, return the string "NaN".

Ex:
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'

Parameters: a num
Returns: a str
  dashes added before & after odd digits,
  except for beginning and end,
  if n is neg, remove the sign
  if n is NOT a num, return str 'NaN'
Examples:
  dashatize(274), "2-7-4"
  dashatize(5311), "5-3-1-1"
  dashatize(86320), "86-3-20"
  dashatize(974302), "9-7-4-3-02"
  dashatize(NaN), "NaN"
  dashatize(0), "0"
  dashatize(-1), "1"
  dashatize(-28369), "28-3-6-9"
Pseudocode:
  if input is NOT a num
    return str NaN
  initialize a result var assigned to an empty str
  get the absolute value of input num & convert to str
  iterate over str num
    if current digit is odd
      if last char in result is a '-'
        concat digit plus '-' to result
      otherwise
        concat '-' plus digit plus '-' to result
    otherwise
      concat result with digit as is
  if result contains '-' on either end, remove it
  return result
*/

function dashatize(num) {
  if (isNaN(num)) return 'NaN';
  let result = '', numStr = Math.abs(num).toString();
  for (const d of numStr) {
    if (d % 2) {
      if (result[result.length - 1] === '-') result += d + '-';
      else result += '-' + d + '-';
    } else result += d;
  }
  return result.startsWith('-') && result.endsWith('-')
    ? result.slice(1, -1)
    : result.startsWith('-')
    ? result.slice(1)
    : result.endsWith('-')
    ? result.slice(0, -1)
    : result;
}