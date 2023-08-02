/*
You are given a string s. It's a string consist of letters,
numbers or symbols.

Your task is to find the Longest substring consisting of unique
characters in s, and return the length of it.

Note
1 <= s.length <= 10^7

5 fixed testcases

100 random testcases, testing for correctness of solution

100 random testcases, testing for performance of code

All inputs are valid.

Pay attention to code performance.

Example
For s="baacab", the output should be 3.

The non repeating substrings in s are:

"b","c","a","ba","ac","ca","ab","cab"

The longest one is "cab", its length is 3.

For s="abcd", the output should be 4.

The longest one is "abcd", its length is 4.

For s="!@#$%^&^%$#@!", the output should be 7.

The longest substring are "!@#$%^&" and "&^%$#@!",
their length both are 7.

Parameters: a str
Returns: a num
Examples:
  longestSubstringOf("hchzvfrkmlnozjk"), 11
  longestSubstringOf("baacab"), 3
  longestSubstringOf("abcd"), 4
  longestSubstringOf("!@#$%^&^%$#@!"), 7
Pseudocode:
  initialize a map assigned to an empty obj
  initialize a max var assigned to 0
  create a loop to iterate over the input str
  keep track of counter and start, both initialized as 0
  keep track of current char
  increment counter by 1 each loop
  & reassign current char to equal next char
    if current char is in map && its value is greater than start
      reassign start to equal chars value in map
    if sublength (difference b/w counter & start + 1) is greater than max
      reassign max to equal sublength
    set current char in map to have value of counter + 1
  return max
*/

function longestSubstringOf(str) {
  let max = 0;
  for (let i = 0, start = 0, c = str[i], map = {}; i < str.length; c = str[++i]) {
    if (c in map && map[c] > start) start = map[c];
    if (i - start + 1 > max) max = i - start + 1;
    map[c] = i + 1;
  }
  return max;
}

function longestSubstringOf(str) {
  let max = 0;
  for (let i = 0, start = 0, c = str[i], map = {}; i < str.length; c = str[++i]) {
    if (c in map && map[c] > start) start = map[c];
    max = Math.max(max, i - start + 1);
    map[c] = i + 1;
  }
  return max;
}