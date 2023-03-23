/*
Given two words,
how many letters do you have to remove from them to make them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints
A word is an anagram of another word if they have the same letters
(usually in a different order).
Do not worry about case. All inputs will be lowercase.

Parameters: 2 strings
Returns: a number
  the number of letters removed from BOTH
  strings to make them anagrams
Examples:
  anagramDifference("","") // 0
  anagramDifference("a","") // 1
  anagramDifference("", "a") // 1
  anagramDifference("ab","a") // 1
  anagramDifference("ab","cd") // 4
  anagramDifference("aab","a") // 2
  anagramDifference("a","aab") // 2
  anagramDifference("codewars","hackerrank") // 10
Pseudocode:
  identify the longer of the two input words
  convert both words into arrays of letters
  iterate over the longer array
    if the shorter array contains the current letter,
      remove it from both arrays
    otherwise
      continue
  return both array lengths added together
*/

function anagramDifference(w1,w2) {
  let l = w1.length > w2.length ? [...w1] : [...w2], s = w2.length < w1.length ? [...w2] : [...w1];
  for (let i = 0; i < l.length; i++) if ((j = s.indexOf(l[i])) >= 0) l.splice(i, 1), s.splice(j, 1), i--;
  return l.length + s.length;
}
