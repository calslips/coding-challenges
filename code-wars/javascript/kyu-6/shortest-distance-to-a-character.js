/*
Given a string s and a character c, return an array of integers representing
the shortest distance from the current character in s to c.

Notes
All letters will be lowercase.
If the string is empty, return an empty array.
If the character is not present, return an empty array.

Examples
s = "lovecodewars"
c = "e"
result = [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]

s = "aaaabbbb"
c = "b"
result = [4, 3, 2, 1, 0, 0, 0, 0]

s = ""
c = "b"
result = []

s = "abcde"
c = ""
result = []

Parameters: 2 strings
  a word
  a letter
Returns: an array of numbers
  each element is the respective characters nearest
  distance to the input letter within the input word
Examples:
  shortesttoChar("lovecodewars", "e") // [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]
  shortesttoChar("aaaaa", "a") // [0, 0, 0, 0, 0]
  shortesttoChar("aabbaabb", "a") // [0, 0, 1, 1, 0, 0, 1, 2]
  shortesttoChar("aaaabbbb", "b") // [4, 3, 2, 1, 0, 0, 0, 0]
  shortesttoChar("aaaaa", "b") // []
  shortesttoChar("lovecoding", "") // []
  shortesttoChar("", "") // []
Pseudocode:
  if either input is empty or s does not contain c
    return an empty array
  initialize a distances var assigned to an empty array
  initialize a prev var assigned to -Infinity
  iniitalize a next var assigned to first index of c in s
  iterate over the length of s
    if current index equals next
      push 0 to distances
      reassign prev to next
      find next index of c in s
      reassign next to next index or Infinity if there is no next
    otherwise
      find abs diff b/w current and prev
      find abs diff b/w current and next
      push the lower amount to distances
  return distances
*/

function shortesttoChar(s, c) {
  const distances = [], ci = s.indexOf(c);
  if (!s || !c || ci < 0) return distances;
  for (let i = 0, prev = -Infinity, next = ci; i < s.length; i++) {
    if (i === next) distances.push(0), prev = next, next = (ni = s.indexOf(c, i + 1)) > i ? ni : Infinity;
    else distances.push(Math.min(i - prev, next - i));
  }
  return distances;
}