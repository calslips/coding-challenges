/*
You need to write a function, that returns the first
non-repeated character in the given string.

If all the characters are unique,
  return the first character of the string.
If there is no unique character,
  return null in JS or Java, and None in Python.

You can assume,
  that the input string has always non-zero length.

Example
firstNonRepeated("test")
  // returns "e"
firstNonRepeated("teeter")
  // returns "r"
firstNonRepeated("trend")
  // returns "t" (all the characters are unique)
firstNonRepeated("aabbcc")
  // returns null (all the characters are repeated)

Parameters: a str (of non-zero length)
Returns:
  a str (1 char)
  OR null if there are NO unique chars
Examples:
  firstNonRepeated("test"), 'e'
  firstNonRepeated("teeter"), 'r'
  firstNonRepeated("1122321235121222"), '5'
  firstNonRepeated("rend"), 'r'
Pseudocode:
  initialize a hash
  iterate over input str
    if current char exists in hash as a key
      increment its value
    otherwise
      set char as a key in hash with a value of 1
  iterate over the keys within hash
    if current key has a value of 1
      return key
  return null
*/

function firstNonRepeated(s) {
  const hash = {};
  for (const char of s) hash[char] = ++hash[char] || 1;
  for (const key in hash) if (hash[key] === 1) return key;
  return null;
}