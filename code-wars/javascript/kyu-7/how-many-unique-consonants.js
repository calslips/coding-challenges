/*
Complete the function that counts the number of unique consonants
in a string (made up of printable ascii characters).

Consonants are letters used in English other than "a", "e", "i", "o", "u".
We will count "y" as a consonant.

Remember, your function needs to return the number of unique consonants -
disregarding duplicates. For example, if the string passed into the
function reads "add", the function should return 1 rather than 2,
since "d" is a duplicate.

Similarly, the function should also disregard duplicate consonants of
differing cases. For example, "Dad" passed into the function should
return 1 as "d" and "D" are duplicates.

Parameters: a str
Returns: a num
  count of unique consonants, case ignored
Examples:
  countConsonants("add"), 1
  countConsonants("Dad"), 1
  countConsonants("aeiou"), 0
  countConsonants("sillystring"), 7
  countConsonants("abcdefghijklmnopqrstuvwxyz"), 21
  countConsonants("Count my unique consonants!!"), 7
Pseudocode:
  convert input str to a set of unique lowercase chars & remove non letters
  iterate over 'aeiou'
    if the set contains any of the vowels
      delete them
  iterate over the set
    if there is a char that is not a letter
      delete it
  return length of set
*/

function countConsonants(str) {
  const uniques = new Set([...str.toLowerCase()].filter(c => c !== c.toUpperCase()));
  for (const vowel of 'aeiou') if (uniques.has(vowel)) uniques.delete(vowel);
  return uniques.size;
}