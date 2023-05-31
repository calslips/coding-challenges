/*
Consider a string of lowercase Latin letters and
space characters (" ").

First, rearrange the letters in each word alphabetically.

And then rearrange the words in ascending order of the sum of
their characters' ASCII values.

If two or more words have the same ASCII value, rearrange them
by their length in ascending order; If their length still
quals to each other, rearrange them alphabetically.

Finally, return the result.

Example
For s = "batman is bruce wayne", the result should be
  "is bceru aenwy aamntb".

  After rearranging the letters the string turns into
  "aamntb is bceru aenwy". The ASCII values of each word are:
  [627, 220, 529, 548]. After sorting the words the following
  string is obtained: "is bceru aenwy aamntb"
  (with ASCII values of [220, 529, 548, 627]).

For s = "peter parker is spiderman", the result should be
  "is eeprt aekprr adeimnprs"

(ASCII values: [220, 554, 645, 963])

Input/Output
[input] string s
  A string of lowercase words.
  Each word is separated by exactly one space character.
[output] a string

Parameters: a str
Returns: a str
  letters & words rearranged by criteria
Examples:
  revamp("batman is bruce wayne"), "is bceru aenwy aabmnt"
  revamp("peter parker is spiderman"), "is eeprt aekprr adeimnprs"
  revamp("codewars is great"), "is aegrt acdeorsw"
  revamp("airplanes in the night sky"), "in eht ksy ghint aaeilnprs"
Pseudocode:
  convert str into an array of words
  arrange the letters of each word alphabetically
  rearrange words in ascending order according to sum of their charcode vals
  if words have the same charcode vals
    rearrange by length ascending
  if word lengths are equal
    rearrange alphabetically
  return array of rearranged words as str joined on spaces
*/

function revamp(s) {
  return s
    .split(' ')
    .map(w => [...w].sort((a, b) => a.localeCompare(b)).join(''))
    .sort((a, b) =>
      [...a].reduce((s, c) => s + c.charCodeAt(), 0) - [...b].reduce((s, c) => s + c.charCodeAt(), 0)
      || a.length - b.length
      || a.localeCompare(b)
    ).join(' ');
}