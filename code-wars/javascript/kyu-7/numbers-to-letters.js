/*
Given an array of numbers (in string format), you must return a
string. The numbers correspond to the letters of the alphabet in
reverse order: a=26, z=1 etc. You should also account for '!', '?'
and ' ' that are represented by '27', '28' and '29' respectively.
All inputs will be valid.

Parameters: an array of strs (nums)
Returns: a str
  the strNums map to letters of the alphabet in reverse order
  & chars '!', '?', ' '
Examples:
  switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars'
  switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'
  switcher(['4', '24']), 'wc'
Pseudocode:
  initialize a map str containing alphabet z-a and '!? '
  reduce the input array into a str
    concat accumulating str with char at current strNum - 1 index of map
  return reduced str
*/

function switcher(x) {
  return x.reduce((s, i) => s + 'zyxwvutsrqponmlkjihgfedcba!? '[--i], '');
}