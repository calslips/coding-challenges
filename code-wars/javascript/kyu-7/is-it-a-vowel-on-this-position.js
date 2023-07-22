/*
Check if it is a vowel(a, e, i, o, u,) on the n position in a
string (the first argument). Don't forget about uppercase.

A few cases:

{
checkVowel('cat', 1)  ->   true // 'a' is a vowel
checkVowel('cat', 0)  ->   false // 'c' is not a vowel
checkVowel('cat', 4)  ->   false // this position doesn't exist
}

P.S. If n < 0, return false

Parameters:
  a str
  a num
Returns: a boolean
Examples:
  checkVowel('cat', 1), true
  checkVowel('cat', 0), false
  checkVowel('cat', 4), false
  checkVowel('Amanda', -2), false
  checkVowel('Amanda', 0), true
  checkVowel('Amanda', 2), true
Pseudocode:
  if position is less than 0
    return false
  initialize vowels var assigned to contain vowels
  return whether char at position in input str is a vowel or not
*/

function checkVowel(string, position) {
  if (position < 0) return false;
  const vowels = new Set('aeiou');
  return vowels.has(string[position]?.toLowerCase());
}