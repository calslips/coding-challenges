/*
John is a typist. He has a habit of typing: he never use
the Shift key to switch case, just using only Caps Lock.

Given a string s. Your task is to count how many times
the keyboard has been tapped by John.

You can assume that,
at the beginning the Caps Lock light is not lit.

Input/Output
[input] string s

A non-empty string.
It contains only English letters(uppercase or lowercase).

1 ≤ s.length ≤ 10000

[output] an integer

The number of times John tapped the keyboard.

Example
For s = "a", the output should be 1.

John hit button a.

For s = "aa", the output should be 2.

John hit button a, a.

For s = "A", the output should be 2.

John hit button Caps Lock, A.

For s = "Aa", the output should be 4.

John hit button Caps Lock, A, Caps Lock, a.

Parameters: a str
Returns: a num
Examples:
  typist("a"), 1
  typist("aa"), 2
  typist("A"), 2
  typist("AA"), 3
  typist("aA"), 3
  typist("Aa"), 4
  typist("BeiJingDaXueDongMen"), 31
  typist("AAAaaaBBBbbbABAB"), 21
  typist("AmericanRAILWAY"), 18
  typist("AaAaAa"), 12
  typist("DFjfkdaB"), 11
Pseudocode:
  initialize a count var assigned to 0
  loop over the chars of the input str
    if its index 0
    AND current char is uppercase
    OR index is greater than 0
    AND current char is lowercase AND last char was uppercase
    OR if current char is uppercase AND last char was lowercase
      increment count by 2
    otherwise
      increment count by 1
  return count
*/

function typist(s) {
  return [...s].reduce((c, l, i) => !i && l === l.toUpperCase() || i && l === l.toLowerCase() && s[i - 1] === s[i - 1].toUpperCase() || l === l.toUpperCase() && s[i - 1] === s[i - 1].toLowerCase() ? c + 2 : ++c, 0);
}