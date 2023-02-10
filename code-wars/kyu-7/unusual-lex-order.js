/*
The citizens of Codeland read each word from right to left,
meaning that lexicographical comparison works differently in
their language. Namely, string a is lexicographically smaller
than string b if either: a is a suffix of b (in common sense,
i.e. b ends with a substring equal to a); or their last k
characters are the same but the (k + 1)th character from the
right in string a is smaller than the same character in string b.

Given an array of words in Codeland language, sort them
lexicographically according to Codeland's unique rules.

For words = ["nigeb", "ta", "eht", "gninnigeb"],
the output should be
unusualLexOrder(words) = ["ta", "nigeb", "gninnigeb", "eht"].

In particular, "ta" < "nigeb" because 'a' < 'b' and
"nigeb" < "gninnigeb" because the former word is a suffix of the
latter.

Parameters: an array of strs
Returns: an array of strs
  sorted according to codeland criteria
  (letters of the word from right to left)
Examples:
  unusualLexOrder(["nigeb", "ta", "eht", "gninnigeb"]), ["ta", "nigeb", "gninnigeb", "eht"]
  unusualLexOrder(["a", "b", "a", "d", "c"]), ["a", "a", "b", "c", "d"]
Pseudocode:
  return input array sorted alphabetically according to words reversed
*/

function unusualLexOrder(arr) {
  return arr.sort((a, b) => [...a].reverse().join('').localeCompare([...b].reverse().join('')));
}