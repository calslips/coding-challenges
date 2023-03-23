/*
Your task is to sort the characters in a string according to the following rules:

- Rule1: English alphabets are arranged from A to Z, case insensitive.
  ie. "Type" --> "epTy"
- Rule2: If the uppercase and lowercase of an English alphabet exist
  at the same time, they are arranged in the order of oringal input.
  ie. "BabA" --> "aABb"
- Rule3: non English alphabet remain in their original position.
  ie. "By?e" --> "Be?y"

Input/Output
[input] string s

A non empty string contains any characters
(English alphabets or non English alphabets).

[output] a string

A sorted string according to the rules above.

Example
For s = "cba", the output should be "abc".

For s = "Cba", the output should be "abC".

For s = "cCBbAa", the output should be "AaBbcC".

For s = "c b a", the output should be "a b c".

For s = "-c--b--a-", the output should be "-a--b--c-".

For s = "Codewars", the output should be "aCdeorsw".

Parameters: a string
Returns: a string
  the input str sorted, case insensitive,
  non-alphabetical chars left alone
Examples:
  sortString("cba"), "abc"
  sortString("Cba"), "abC"
  sortString("cCBbAa"), "AaBbcC"
  sortString("c b a"), "a b c"
  sortString("-c--b--a-"), "-a--b--c-"
  sortString("Codewars"), "aCdeorsw"
Pseudocode:
  split input str into an array of chars
  create a new array containing only the letters of chars array
  sort the filtered letters
  create a loop to iterate over chars array
    replace each letter with the respective filtered letter
  return modified chars array joined into a str
*/

function sortString(s) {
  const cs = [...s],
        ls = cs.filter(c => c.toLowerCase() !== c.toUpperCase());
  ls.sort((a, b) => a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt());
  for (let i = 0, j = 0; i < cs.length; i++) if (cs[i].toLowerCase() !== cs[i].toUpperCase()) cs[i] = ls[j], j++;
  return cs.join('');
}