/*
Complete the method so that it formats the words into a single comma separated
value. The last word should be separated by the word 'and' instead of a comma.
The method takes in an array of strings and returns a single formatted string.

Note:
Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result
in an empty string being returned.

Example: (Input --> output)
['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""

Parameters: an array of strings
Returns: a single string, each word in the string is an element from input array
  (with words separated by commas, except last word separated by 'and')
Examples:
  formatWords(['one', 'two', 'three', 'four']) // 'one, two, three and four'
  formatWords(['one']) // 'one'
  formatWords(['one', '', 'three']) // 'one and three'
  formatWords(['', '', 'three']) // 'three'
  formatWords(['one', 'two', '']) // 'one and two'
  formatWords([]) // ''
  formatWords(null) // ''
  formatWords(['']) // ''
Pseudocode:
  if input is null or empty
    return '' (empty string)
  otherwise
    filter out falsy elements from input array
    iterate over array, reducing array into string
      if the current element's index is less than the array length - 2
        concat current element with accumulating string, end with a comma and space
      if the current element's index IS equal to array length - 2
        concat current element with accumulating string, end wirh ' and '
      if the current element is the last element
        concat current element with accumulating string
    return accumulated string
*/

function formatWords(words) {
  return !words || !words.length ? '' : words.filter(e => e).reduce((s, c, i, a) => i === a.length - 1 ? s += c : i === a.length - 2 ? s += c + ' and ' : s += c + ', ', '');
}

// function formatWords(words) {
//   if (!words || !words.length) return '';
//   return words.filter(e => e).reduce((s, c, i, a) => {
//     if (i === a.length - 1) {
//       return s += c;
//     } else if (i === a.length - 2) {
//       return s += c + ' and ';
//     } else {
//       return s += c + ', ';
//     }
//   }, '');
// }