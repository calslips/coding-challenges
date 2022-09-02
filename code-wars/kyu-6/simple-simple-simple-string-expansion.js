/*
Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of
that string: The numeric values represent the occurrence of each letter preceding that
numeric value. There should be no numeric characters in the final string. Empty strings
should return an empty string.

The first occurrence of a numeric value should be the number of times each character
behind it is repeated, until the next numeric value appears.

stringExpansion('3D2a5d2f') === 'DDDaadddddff'
stringExpansion('3abc') === 'aaabbbccc'      // correct
stringExpansion('3abc') !== 'aaabc'          // wrong
stringExpansion('3abc') !== 'abcabcabc'      // wrong
If there are two consecutive numeric characters the first one is ignored.

stringExpansion('3d332f2a') === 'dddffaa'
If there are two consecutive alphabetic characters then the first character has no effect
on the one after it.

stringExpansion('abcde') === 'abcde'
Your code should be able to work for both lower and capital case letters.

stringExpansion('') === ''

Parameters: a string (containing alphanumeric chars)
Returns: the input string modified
  (numbers before letters determine the amount of times letter repeats)
Examples:
  stringExpansion('3abc') // 'aaabbbccc'
  stringExpansion('3D2a5d2f') // 'DDDaadddddff'
  stringExpansion('0d0a0v0t0y') // ''
  stringExpansion('3d332f2a') // 'dddffaa'
  stringExpansion('abcde') // 'abcde'
  stringExpansion('a2bcde') // 'abbccddee'
Pseudocode:
  initialize count variable assigned to 1
  initialize result variable assigned to an empty string
  convert input string into an array of characters
  iterate over input string array
    if current element is a number
      replace count with number
      continue to next iteration
    concat result string with current char repeated count times
  return result
*/

function stringExpansion(s) {
  let count = 1;
  return [...s].reduce((r, c) => isNaN(c) ? r += c.repeat(count) : (count = c, r), '');
}