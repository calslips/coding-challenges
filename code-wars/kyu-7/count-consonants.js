/*
Write a function consonantCount, consonant_count or ConsonantCount
that takes a string of English-language text and returns the
number of consonants in the string.

Consonants are all letters used to write English excluding the
vowels a, e, i, o, u.

Parameters: a str
Returns: a num
  count of consonants in input
Examples:
  consonantCount(''), 0
  consonantCount('aaaaa'), 0
  consonantCount('XaeiouX'), 2
  consonantCount('Bbbbb'), 5
  consonantCount('helLo world'), 7
  consonantCount('h^$&^#$&^elLo world'), 7
  consonantCount('0123456789'), 0
  consonantCount('012345_Cb'), 2
Pseudocode:
  convert str to an array of chars
  filter out any vowels and chars that are NOT letters
    account for casing
  return the length of filtered array
*/

function consonantCount(str) {
  return [...str.toLowerCase()].filter(c => c !== c.toUpperCase() && !'aeiou'.includes(c)).length;
}