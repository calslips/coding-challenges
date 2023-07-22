/*
Given a string as input, move all of its vowels to the end of
the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"

Parameters: a str
Returns: a str
Examples:
  moveVowel("day"),"dya"
  moveVowel("apple"),"pplae"
  moveVowel("peace"),"pceae"
  moveVowel("maker"),"mkrae"
Pseudocode:
  initialize a vowels var to contain all vowels
  initialize a noVowels var to contain all non-vowel chars from input
  initialize an allVowels var to contain all vowel chars from input
  concat noVowels with allVowels and return
*/

function moveVowel(input) {
  return [...input].reduce((r, c) => (r[+'aeiou'.includes(c)] += c, r), ['', '']).join('');
}

function moveVowel(input) {
  return [...input].reduce((r, c) => ('aeiou'.includes(c) ? r[1] += c : r[0] += c, r), ['', '']).join('');
}