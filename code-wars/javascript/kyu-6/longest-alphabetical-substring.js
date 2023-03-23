/*
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in
  "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long
so your code will need to be efficient.

The input will only consist of lowercase characters and
will be at least one letter long.

If there are multiple solutions,
  return the one that appears first.

Parameters: a str
  all lowercase letters
Returns: a str
  longest alphabetical str
  contained within input str
Examples:
  longest('asd'), 'as'
  longest('nab'), 'ab'
  longest('abcdeapbcdef'), 'abcde'
  longest('asdfaaaabbbbcttavvfffffdf'), 'aaaabbbbctt'
  longest('asdfbyfgiklag'), 'fgikl'
  longest('z'), 'z'
  longest('zyba'), 'z'
Pseudocode:
  initialize longest var assigned to an empty str
  initialize current var assigned to an empty str
  iterate over the input str
    if current char code is less than previous char code
      if current length is greater than longest length
        reassign longest to current
      reassign current to current char
    otherwise
      concat current with current char
    if at the last char of input str and current length is greater than longest
      reassign longest to equal current
  return longest
*/

function longest(str) {
  let l = '';
  for (let i = 0, c = ''; i < str.length; i++) {
    if (str[i].charCodeAt() < str[i - 1]?.charCodeAt()) {
      if (c.length > l.length) l = c;
      c = str[i];
    } else c += str[i];
    if (i === str.length - 1 && c.length > l.length) l = c;
  }
  return l;
}