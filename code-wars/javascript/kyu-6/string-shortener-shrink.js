/*
Write a function that shortens a string to a given length. Instead of
cutting the string from the end, your function will shorten it from the
middle like shrinking.

For example:
sentence = "The quick brown fox jumps over the lazy dog"
res = shorten(sentence, 27)
res === "The quick br...the lazy dog"

Your function should also accept an optional argument glue to get the parts
together.
sentence = "The quick brown fox jumps over the lazy dog"
res = shorten(sentence, 27, '---')
res === "The quick br---the lazy dog"

Rules are simple:
Result must always be equal to the given length
Only exception to above rule is, when string is already shorter than given
length. In that case string should be returned untouched.
If no glue is sent ... should be used by default
If glue cannot go exactly in the middle, second part should be longer
If glue cannot fit in the shortened string, string should be shortened
without shrinking.
meaning; shorten('hello world', 5, '....') should return hello because 4
char glue cannot fit in the shortened string.
glue must have at least 1 char on both ends.
Example minimum h...d, results ....d or h.... are not excepted.
You can assume you'll always receive a string as the sentence and the glue.
And integer number for the length.
Think about other possible edge cases, there are some surprises.

Parameters: a string, a number, a string
  1st arg is the string to shorten
  2nd arg is what the length of the shortened string should be
  3rd arg is the value that will sit between the front & end of abbreviated string
Returns:
  the input string shortened to match the length of the number arg with the 3rd arg
    in placed in the middle of the string (if there is no even middle, the 2nd half
    should be longer)
Examples:
  let sentence = 'The quick brown fox jumps over the lazy dog';
  shorten(sentence, 27) // 'The quick br...the lazy dog';
  shorten(sentence, 27, '----') // 'The quick b----the lazy dog'
Pseudocode:
  check if length arg is greater than string length
    if it is
      return input string as is
  check if difference between length arg and glue length is less than 2
    if it is
      return the first (length) characters of the input string instead of shortening
      (need to have at least 1 char on each side of the glue to be properly shortened)
  initialize target variable to equal length minus glue length
  initialize head to equal input string sliced from 0 to target / 2 rounded down
  initialize tail to equal input string sliced (target / 2 rounded up) characters from the end
  concat head, glue, tail
  return concatted result
*/

function shorten(s, l, g = '...') {
  return s.length < l || (t = l - g.length) < 2 ? s.slice(0, l) : s.slice(0, Math.floor(t / 2)) + g + s.slice(-Math.ceil(t / 2));
}

// function shorten(string, length, glue = '...') {
//   if (string.length < length) return string;
//   if ((target = length - glue.length) < 2) return string.slice(0, length);
//   return string.slice(0, Math.floor(target / 2)) + glue + string.slice(-Math.ceil(target / 2));
// }

// function shorten(string, length, glue = '...') {
//   if (string.length < length) return string;
//   if (length - glue.length < 2) return string.slice(0, length);
//   const target = length - glue.length;
//   const head = string.slice(0, Math.floor(target / 2));
//   const tail = string.slice(-Math.ceil(target / 2));
//   return head + glue + tail;
// }