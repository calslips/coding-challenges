/*
Re-order the characters of a string, so that they are
concatenated into a new string in
"case-insensitively-alphabetical-order-of-appearance" order.
Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words
containing the english alphabet letters.

Parameters: a string
Returns: a string
  the input string sorted alphabetically
  (case-insensitive & by order of appearance)
Examples:
  alphabetized('The Holy Bible') // 'BbeehHilloTy'
Pseudocode:
  remove spaces & turn input into an array of chars
  remove any non-alpha chars
  sort the array of chars
    if current is equal to next (case insensitive)
      return 0
    otherwise
      return localecompare of current and next
  return sorted array joined into a string
*/

function alphabetized(s) {
  return [...s].filter(c => c.toLowerCase() !== c.toUpperCase()).sort((a, b) => a.toLowerCase() === b.toLowerCase() ? 0 : a.localeCompare(b)).join('');
}