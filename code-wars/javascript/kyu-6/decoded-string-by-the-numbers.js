/*
This is a simple string decoding algorithm. The idea is to take
a string of characters and decode it into an array. Each
character is a single element in the result unless a backslash
followed by a positive number is encountered.

When a backslash followed by a positive number is found, the
number indicates how many of the next characters are grouped
together as one element.

Example:

"abc\5defghi\2jkl" => [ "a", "b", "c", "defgh", "i", "jk", "l" ]

If the number is larger than the count of remaining characters,
treat it as reading the remaining characters.

If you are reading characters, and you find an escape inside a
string, they should be tallied into the string:

"\5ab\3cde" => [ "ab\3c", "d", "e" ]

Parameters: a str
Returns: an array of strs
Examples:
  decode(''), []
  decode('abc'), ['a','b', 'c']
  decode("\\1abc"), ['a', 'b', 'c']
  decode("\\1a\\1bc"), ['a', 'b', 'c']
  decode("\\3a\\1bc"), ['a\\1', 'b', 'c']
  decode("\\10a\\1bc"), ['a\\1bc']
Pseudocode:
  initialize result var assigned to an empty array
  iterate over the chars of str
    if current is a back slash
      increment counter by 1
      initialize length var assigned to parsed int from str starting at counter
      increment counter by digit count of length num
      slice str from counter to counter plus length & push to result
      increment counter by length - 1
    otherwise
      slice str from counter to counter plus 1 & push to result
  return result
*/

function decode(s) {
  const res = [];
  for (let i = 0; i < s.length; ) {
    if (s[i] === '\\') {
      let l = parseInt(s.slice(++i));
      res.push(s.slice(i += `${l}`.length, i += l));
    } else res.push(s.slice(i, ++i));
  }
  return res;
}