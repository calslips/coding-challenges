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
*/

function last(x) {
  return x.split(' ').sort((a, b) => a ? a[a.length - 1].localeCompare(b[b.length - 1]) : a);
}