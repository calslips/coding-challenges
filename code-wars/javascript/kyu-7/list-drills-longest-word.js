/**
 * Complete the function that takes one argument, a list of words, and
 * returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7
Do not modify the input list.
 */

function longest(words) {
  return words.sort((a, b) => b.length - a.length)[0].length;
}