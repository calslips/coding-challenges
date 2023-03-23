/*
For a given DNA genetic code represented by a string, count the number of
times the letters A (adenine), C (cytosine), G (guanine) and T (thymine)
appears and return and object.

The input string may contain both upper and lower case characters.

For example:

var genCode = 'aCCggT';
getCountedNucleotides(genCode); // return {A: 1, C: 2, G: 2, T: 1}

Also, should a nucleotide type not be present within the string, it should
still be present in the object returned with it's value as 0. For example:

var genCode = 'ACG';
getCountedNucleotides(genCode); // return {A: 1, C: 1, G: 1, T: 0}

Parameters: a string containing letters that represent DNA nucleotides in either case
Returns: an object where keys are the nucleotides uppercased and
  the value is the number of times it appears in the input string
Examples:
  genCode('') // {A:0, C:0, G:0, T:0}
  genCode('ACG') // {A:1, C:1, G:1, T:0}
  genCode('aCCggT') // {A:1,C:2,G:2,T:1}
Pseudocode:
  initialize nucleotide object
    (each key is a nucleotide capitalized, initial value 0)
  uppercase input string
  convert input string into an array (each letter as an element)
  iterate over each element
    increment value of key in object that matches the element
  return object
*/

function getCountedNucleotides(genCode){
  return [...genCode.toUpperCase()].reduce((o, c) => ++o[c] && o, {A:0, T:0, C:0, G:0});
}