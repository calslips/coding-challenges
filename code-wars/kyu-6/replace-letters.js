/*
In input string word(1 word):

replace the vowel with the nearest left consonant.
replace the consonant with the nearest right vowel.
P.S. To complete this task imagine the alphabet is a circle
(connect the first and last element of the array in the mind).
For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)

For example:

'codewars' => 'enedazuu'
'cat' => 'ezu'
'abcdtuvwxyz' => 'zeeeutaaaaa'
It is preloaded:

const alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];
const consonants = [
  'b','c','d','f','g','h','j','k','l','m','n',
  'p','q','r','s','t','v','w','x','y','z'
];
const vowels = ['a','e','i','o','u'];

P.S. You work with lowercase letters only.

Parameters: a string (all lowercase letters)
Returns: a string
  vowels replaced with the 1st consonant to the left
  consonants replaced with the 1st vowel to the right
Examples:
  replaceLetters('cat') // 'ezu'
  replaceLetters('codewars') // 'enedazuu'
  replaceLetters('abcdtuvwxyz') // 'zeeeutaaaaa'
Pseudocode:
  initialize a result var assigned to an empty string
  iterate over the input str
    if current char is a vowel
      initialize a leftIndex var to hold the left char's index from alphabet
      while the char at leftIndex is NOT a consonant (circular)
        decrement leftIndex
      concat left consonant with result
    otherwise if it is a consonant
      initialize a rightIndex var to hold the right char's index from alphabet
      while the char at rightIndex is NOT a vowel (circular)
        increment rightIndex
      concat right vowel with result
  return result
*/

function replaceLetters(word) {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      let leftIndex = alphabet.indexOf(word[i]) - 1;
      while (!consonants.includes(alphabet[leftIndex])) {
        leftIndex > 0 ? leftIndex-- : leftIndex = 25;
      }
      result += alphabet[leftIndex];
    } else {
      let rightIndex = alphabet.indexOf(word[i]) + 1;
      while (!vowels.includes(alphabet[rightIndex])) {
        rightIndex < 20 ? rightIndex++ : rightIndex = 0;
      }
      result += alphabet[rightIndex];
    }
  }
  return result;
}