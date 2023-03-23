/*
If we alternate the vowels and consonants in the string "have",
we get the following list, arranged alphabetically:
['ahev', 'aveh', 'ehav', 'evah', 'have', 'heva', 'vahe', 'veha'].
These are the only possibilities in which vowels and consonants
are alternated. The first element, ahev, is alphabetically lowest.

Given a string:
alternate the vowels and consonants and return the lexicographically
lowest element in the list
If any two or more vowels or consonants must follow each other,
return "failed"
if the number of vowels and consonants are equal,
the first letter of the result must be a vowel.

Examples:
solve("codewars") = "failed".
  However you alternate vowels and consonants,
  two consonants must follow each other
solve("oruder") = "edorur"
solve("orudere") = "ederoru".
  This is the only option that allows you to alternate vowels & consonants.

Vowels will be any of "aeiou".
Input will be a lowercase string, no spaces.
See test cases for more examples.

Parameters: a string (lowercase letters, no spaces)
Returns: a string
  the lowest alphabetical version of input string
  modified to have alternating vowels & consonants
Examples:
  solve("java") // 'ajav'
  solve("oruder") // 'edorur'
  solve("zodiac") // 'acidoz'
  solve("apple") // 'lapep'
  solve("acidity") // 'caditiy'
  solve("codewars") // 'failed'
  solve("orudere") // 'ederoru'
Pseudocode:
  initialize a result variable assigned to an empty string
  initialize a vowelRef variable assigned to a string of vowels
  convert input string into an array of letters
  sort array of letters alphabetically
  initialize a vowels variable assigned to an array of vowels
    filtered from array of letters
  initialize a consonant variable assigned to an array of consonants
    filtered from array of letters
  if the difference in length between vowels and consonants is greater than 1
    return 'failed'
  otherwise if consonants length is greater than vowels length
    zipper merge consonants and vowels into result, starting with consonants
  otherwise
    zipper merge vowels and consonants into result, starting with vowels
  return result string
*/

function solve(s) {
  const vRef = 'aeiou',
        sorted = s.split('').sort(),
        vs = sorted.filter(l => vRef.includes(l)),
        cs = sorted.filter(l => !vRef.includes(l));
  return Math.abs(vs.length - cs.length) > 1
    ? 'failed'
    : (vs.length < cs.length ? cs : vs).reduce((s, e, i, a) => s + e + ((a === vs ? cs : vs)[i] || ''), '');
};