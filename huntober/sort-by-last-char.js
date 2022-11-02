/*
Given a string of words (x), you need to return an array of
the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array
should show them in the order they appeared in the given string.

All inputs will be valid.

Parameters: a string of words
Returns: an array of the words
  sorted alphabetically (last letter)
Examples:
  last('man i need a taxi up to ubud')
    // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
  last('what time are we climbing up the volcano')
    // ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
  last('take me to semynak')
    // ['take', 'me', 'semynak', 'to']
Pseudocode:
  split the input string into an array of words (on ' ')
  sort the array of words alphabetically by their last letter
    (if a word is falsy, return it
      otherwise compare last char of a with last char of b)
  return sorted array of words

will the input always contain words or alphabetically sortable chars? never empty?
  always a string? always contain valid chars?
will return an array of the words found in the input string, sorted by last char value
  if last char values are contained in multiple words, keep original order
*/

function last(x) {
  return x.split(' ').sort((a, b) => a ? a[a.length - 1].localeCompare(b[b.length - 1]) : a);
  // return x.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
}

console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);
console.log(last('   '), ['', '', '', '']);