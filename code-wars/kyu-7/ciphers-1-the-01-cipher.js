/*
This cipher doesn't exist, I just created it by myself. It can't actually
be used, as there isn't a way to decode it. It's a hash. Multiple sentences
may also have the same result.

How this cipher works
It looks at the letter, and sees it's index in the alphabet, the alphabet
being a-z, if you didn't know. If it is odd, it is replaced with 1, if it's
even, its replaced with 0. Note that the index should start from 0. Also,
if the character isn't a letter, it remains the same.

Example
encode("Hello World!"); // => "10110 00111!"
This is because H's index is 7, which is odd, so it is replaced by 1,
and so on.

Parameters: a string
  (a sentence of space separated words)
Returns: a string
  (letters replaced by 0 or 1,
  letters a-z, find their index
  if index is odd, replace with 1
  if index is even, replace with 0
  if current char is NOT a letter,
  keep it the same)
Examples:
  encode('Hello World!') // '10110 00111!'
Pseudocode:
  intialize alphabet variable to equal string 'a-z'
  convert string to an array
    (each char is its own element)
  map over string array
    if current char exists in alphabet,
      replace with value of its index modulo 2
    otherwise
      keep char the same
  return string array joined on empty string
*/

function encode(plaintext) {
  return ab = 'abcdefghijklmnopqrstuvwxyz', [...plaintext.toLowerCase()].map(c => (i = ab.indexOf(c)) >= 0 ? i % 2 : c).join('');
}