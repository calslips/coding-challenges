/*
Write a function that takes a string and returns an array
containing binary numbers equivalent to the ASCII codes of the
characters of the string. The binary strings should be eight
digits long.

Parameters: a str
Returns: an array of strs (binary)
Examples:
  wordToBin('man'),
    [ '01101101', '01100001', '01101110' ]
  wordToBin('AB'),
    ['01000001', '01000010']
  wordToBin('wecking'),
    ['01110111', '01100101', '01100011', '01101011', '01101001', '01101110', '01100111']
  wordToBin('Ruby'),
    ['01010010', '01110101', '01100010', '01111001']
  wordToBin('Yosemite'),
    ['01011001', '01101111', '01110011', '01100101', '01101101', '01101001', '01110100', '01100101']
Pseudocode:
  convert input str into an array of chars
  map over the array of chars
    convert char to its unicode then to binary
  return binary array
*/

const wordToBin = s => [...s].map(c => c.charCodeAt().toString(2).padStart(8, 0));

function wordToBin(str) {
  return [...str].map(c => c.charCodeAt().toString(2).padStart(8, 0));
}