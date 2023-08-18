/*
Many people know that Apple uses the letter "i" in almost all of
its devices to emphasize its personality.

And so John, a programmer at Apple, was given the task of making
a program that would add that letter to every word. Let's help
him do it, too.

Task:
Your task is to make a function that takes the value of word and
returns it with an "i" at the beginning of the word.
For example we get the word "Phone", so we must return "iPhone".
But we have a few rules:

The word should not begin with the letter "I", for example Inspire.
The number of vowels should not be greater than or equal to the
number of consonants, for example East or Peace.
("y" is considered a consonant)
The first letter should not be lowercase, for example road.
If the word does not meet the rules, we return "Invalid word".

Parameters: a str
Returns: a str
Examples:
  i('Phone'), 'iPhone'
  i('World'), 'iWorld'
  i('Human'), 'iHuman'
  i('Programmer'), 'iProgrammer'
  i(''), 'Invalid word'
  i('Inspire'), 'Invalid word'
  i('East'), 'Invalid word'
  i('Peace'), 'Invalid word'
  i('road'), 'Invalid word'
Pseudocode:
  if word does NOT start with the letter 'I' AND
  if vowel count in word is less than half its length AND
  if the 1st letter is uppercase
    concat 'i' with word
    return modified word
  otherwise
    return 'Invalid word'
*/

const i = word => !word.startsWith('I') && countVowels(word) < word.length / 2 && word.charCodeAt() < 97 ? 'i' + word : 'Invalid word';

const countVowels = word => [...word].reduce((c, l) => 'aeiou'.includes(l.toLowerCase()) ? ++c : c, 0);