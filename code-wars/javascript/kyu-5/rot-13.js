/*
ROT13 is a simple letter substitution cipher that replaces a
letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string
ciphered with Rot13. If there are numbers or special characters
included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted,
like in the original Rot13 "implementation".

Parameters: a str
Returns: a str
  letters replaced with letter 13 places after it, circularly
  any other chars are left alone
Examples:
  rot13('test'), 'grfg'
  rot13('Test'), 'Grfg'
Pseudocode:
  initialize a rotated var assigned to an empty str
  iterate over the input str
    if current char is a letter
      retrieve current char code & store in a var
      if current char is lowercase
        if current char code is less than 110
          concat rotated with char from char code + 13
        otherwise
          concat rotated with char from char code - 13
      otherwise if current char is uppercase
        if current char code is less than 78
          concat rotated with char from char code + 13
        otherwise
          concat rotated with char from char code - 13
    otherwise
      concat rotated with current char as is
  return rotated
*/

function rot13(m) {
  return [...m].reduce((r, c) => c.toUpperCase() !== c.toLowerCase() ? r += String.fromCharCode((n = c.charCodeAt()) < (c === c.toLowerCase() ? 110 : 78) ? n + 13 : n - 13) : r += c, '');
}