/*
Take a string and return a hash with all the ascii values of the
characters in the string. Returns nil if the string is empty.
The key is the character, and the value is the ascii value of
the character. Repeated characters are to be ignored and
non-alphebetic characters as well.

Parameters: a str
Returns: an obj
  key is the char
  value is the char code
Examples:
  charToAscii(""), null
  charToAscii("a"), {"a":97}
  charToAscii("aaa"), {"a":97}
  charToAscii("hello world"), {"h":104, "e":101, "l":108, "o":111, "w":119, "r":114, "d":100}
  charToAscii("ABaa ^"), {"A":65, "B":66, "a":97}
Pseudocode:
  remove all non letter chars from str
  if str is empty
    return null
  otherwise
    initialize an empty obj
    iterate over the letters of str
      set char as key in obj with the value as its char code
    return obj
*/

function charToAscii(string) {
  string = [...string].filter(c => c.toLowerCase() !== c.toUpperCase()).join('');
  return string ? [...string].reduce((o, k) => (o[k] = k.charCodeAt(), o), {}) : null;
}