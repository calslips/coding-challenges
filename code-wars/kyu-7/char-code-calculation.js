/*
Given a string, turn each character into its ASCII character code and join
them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1,
and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6

Parameters: a string
Returns:
  the difference of the string with each char converted to ascii char code
    minus the same char code with 7's replaced with 1's
Examples:
  calc('abcdef') // 6
  calc('ifkhchlhfd') // 6
  calc('aaaaaddddr') // 30
  calc('jfmgklf8hglbe') // 6
  calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') // 96
Pseudocode:
  split input string into an array (each char is its own element)
  iterate over char array
    replace each element with its ascii char code representation
  initialize a new array from the char code array
    replacing any occurrence of 7 with 1
  reduce both charcode arrays into a sum of digits
  subtract the sums
  return the difference
*/

function calc(x) {
  const digits = x.split('').map(c => c.charCodeAt()).join('').split('');
  const digits7sTo1s = digits.map(e => e === '7' ? '1' : e);
  const sum1 = digits.reduce((s, n) => +s + +n);
  const sum2 = digits7sTo1s.reduce((s, n) => +s + +n);
  return sum1 - sum2;
}