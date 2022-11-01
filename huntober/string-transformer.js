// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.
// For example:
// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// takes in a string. will only contain english alphabet letters and spaces
// will the input always be a string? never another data type or empty
// returns the string with each letter's casing switched
// upper to lower / lower to upper
// then have the order of words reversed
// invert casing, reverse order of words

function stringTransformer(s) {
  // convert input string into an array of chars
  // map over the chars array
    // invert the casing of the char
  // convert the inverted case array into an array of words
  // reverse the array of words
  // convert reversed array of words into a string of space-separated words
  // return the string of space-separated words

  return [...s]
    .map(c => c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase())
    .join('')
    .split(' ')
    .reverse()
    .join(' ');
}

console.log(stringTransformer('Example Input'), 'iNPUT eXAMPLE');
console.log(stringTransformer('Hello World'), 'wORLD hELLO');
console.log(stringTransformer('pEN aPPLE pINEAPPLE pEN'), 'Pen Pineapple Apple Pen');