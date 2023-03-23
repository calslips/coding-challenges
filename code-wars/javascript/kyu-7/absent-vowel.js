/*
Your job is to figure out the index of which vowel is missing
from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.

Notes: There is no need for string validation and every sentence
given will contain all vowels but one. Also, you won't need to
worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ;
  missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ;
  missing: "o"

Parameters: a str
Returns: a num
  the index of the missing vowel
Examples:
  absentVowel("John Doe hs seven red pples under his bsket"), 0
  absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3
Pseudocode:
  initialize a vowels var containing the vowels aeiou
  iterate over the vowels str
    if current vowel is NOT within input str
      return current vowel index
*/

function absentVowel(x) {
  for (let i = 0, vowels = 'aeiou'; i < vowels.length; i++) if (!x.includes(vowels[i])) return i;
}