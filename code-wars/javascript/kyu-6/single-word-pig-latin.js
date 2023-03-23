/*
Pig Latin is an English language game where the goal is to hide
the meaning of a word from people not aware of the rules.

So, the goal of this kata is to wite a function that encodes a
single word string to pig latin.

The rules themselves are rather easy:

The word starts with a vowel(a,e,i,o,u) -> return the original
string plus "way".

The word starts with a consonant -> move consonants from the
beginning of the word to the end of the word until the first
vowel, then return it plus "ay".

The result must be lowercase, regardless of the case of the input.
If the input string has any non-alpha characters, the function
must return None, null, Nothing (depending on the language).

The function must also handle simple random strings and not just
English words.

The input string has no vowels ->
  return the original string plus "ay".

For example, the word "spaghetti" becomes "aghettispay" because
the first two letters ("sp") are consonants, so they are moved to
the end of the string and "ay" is appended.

Parameters: a string
Returns: a string
Examples:
  pigLatin("map") // "apmay"
  pigLatin("egg") // "eggway"
  pigLatin("tes3t5") // null
Pseudocode:
  convert input str to lowercase
  initialize a vowels var, assigned to a str of 'aeiou'
  if input contains any non alpha chars
    return null
  if input does not contain vowels
    return input concatted with 'ay'
  otherwise
    if input starts with a vowel
      return input concatted with 'way'
    otherwise
      while the 1st char is NOT a vowel
        reassign str to equal str sliced from 1 to end
        concatted with the 1st char
      return modified str concatted with 'ay'
*/

function pigLatin(string) {
  let vs = 'aeiou', s = string.toLowerCase();
  if ([...s].some(c => c.charCodeAt() < 97 || c.charCodeAt() > 122)) return null;
  if ([...vs].every(v => !s.includes(v))) return s + 'ay';
  else {
    if (vs.includes(s[0])) return s + 'way';
    else {
      while (!vs.includes(s[0])) s = s.slice(1) + s[0];
      return s + 'ay';
    }
  }
}