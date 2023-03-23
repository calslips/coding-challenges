/*
Give you a sentence s. It contains some words and separated
by spaces. Another arguments is n, its a number(1,2 or 3).
You should convert s to camelCase n.

There are three kinds of camelCase:

camelCase 1: The first letter of each word should be capitalized.
              Except for the first word.

Example: "Hello world"  -->  "helloWorld"

camelCase 2: The last letter of each word should be capitalized.
              Except for the last word.

Example: "Hello world"  -->  "hellOworld"

camelCase 3: The first and last letters of each word should be capitalized.
              Except for the first and lasts letter of sentence.

Example: "Hello world"  -->  "hellOWorld"

You can assume that all of the input data is valid. That is:
s always be a string; It contains at least two words; Each word
contains only letters(a-zA-Z); Each word contains ar least three
letters; n always be 1,2 or 3.

Parameters:
  a string
  a number
Returns: a string
  casing modified according to number
Examples:
  toCamelCase("hello world", 1) // "helloWorld"
  toCamelCase("hello world", 2) // "hellOworld"
  toCamelCase("hello world", 3) // "hellOWorld"
  toCamelCase("Hello world", 1) // "helloWorld"
  toCamelCase("Each number plus one", 1) // "eachNumberPlusOne"
  toCamelCase("Each number plus one", 2) // "eacHnumbeRpluSone"
  toCamelCase("Each number plus one", 3) // "eacHNumbeRPluSOne"
Pseudocode:
  initialize words var to be input string split on space
  if n is 1
    map over words array
      lowercase first word
      any other word, uppercase 1st letter & lowercase the rest
  if n is 2
    map over the words array
      lower case last word
      any other word, uppercase last letter & lowercase the rest
  if n is 3
    map over the words array
      1st word, uppercase last letter & lowercase the rest
      last word, uppercase 1st letter & lower case the rest
      any other word, uppercase 1st & last letters, lowercase middle
  return words array joined on empty string
*/

function toCamelCase(s, n) {
  let words = s.split(' ');
  if (n === 1) {
    words = words.map((w, i) => !i
                      ? w.toLowerCase()
                      : w[0].toUpperCase() + w.slice(1).toLowerCase());
  } else if (n === 2) {
    words = words.map((w, i, a) => i === a.length - 1
                      ? w.toLowerCase()
                      : w.slice(0, -1).toLowerCase() + w.slice(-1).toUpperCase());
  } else if (n === 3) {
    words = words.map((w, i, a) => !i
                      ? w.slice(0, -1).toLowerCase() + w.slice(-1).toUpperCase()
                      : i === a.length - 1
                        ? w[0].toUpperCase() + w.slice(1).toLowerCase()
                        : w[0].toUpperCase() + w.slice(1, -1).toLowerCase() + w.slice(-1).toUpperCase());
  }
  return words.join('');
}