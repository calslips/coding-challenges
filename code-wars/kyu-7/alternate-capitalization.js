/**
 * Given a string, capitalize the letters that occupy even indexes and odd
 * indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].
See test cases for more examples.

The input will be a lowercase string with no spaces.
 */

function capitalize(s) {
  return Array.from({length: 2}, (_, i) => i + 1).map(e => s.split('').map((c, i) => (i + e) % 2 ? c.toUpperCase() : c).join(''));
};