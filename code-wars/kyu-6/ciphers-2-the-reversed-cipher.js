/*
This is a lame method I use to write things such that my friends don't
understand. It's still fairly readable if you think about it.

How this cipher works
First, you need to reverse the string. Then, the last character in the
original string (the first character in the reversed string) needs to be
moved to the back. Words will be separated by spaces, and punctuation marks
can be counted as part of the word.

Example
encode("Hello World!"); // => "lleHo dlroW!"
This is because "Hello" reversed is "olleH" and "o" is moved to the back,
and so on. The exclamation mark is considered to be part of the word "World".

Parameters: a string
  (a sentence with space-separated words)
Returns: a string
  (each word in the input string is reversed,
  but the last char stays in place)
Examples:
  encode('Hello World!')
    // 'lleHo dlroW!'
  encode('Where am I?')
    // 'rehWe am I?'
  encode('Help, I have fallen and I cannot get up!')
    // 'pleH, I vahe ellafn nad I onnact egt pu!'
Pseudocode:
  split the sentence into an array of words
  further split each word into an array of letters
  for each array of letters (a word)
    slice the array of letters from beginning to end (not including)
      reverse the order
    concat with slice of array of letters last character
  join the letters on an empty string
  join the words on a space
  return newly ordered sentence string
*/

function encode(plaintext) {
  return plaintext.split(' ').map(w => w.split('').slice(0, -1).reverse().concat(w.slice(-1)).join('')).join(' ');
}