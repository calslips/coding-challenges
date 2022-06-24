/*
Create a function isAlt() that accepts a string as an argument and validates
whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.

Parameters: a string (only containing lowercase letters)
Returns: a boolean (determining whether vowels & consonants alternate in arg)
Examples:
  isAlt("amazon") // true
  isAlt("apple") // false
  isAlt("banana") // true
Pseudocode:
  split input string into array (each element is a single letter)
  iterate over strArr
    if strArr starts with a vowel
      check if every even index is a vowel and every odd index is a consonant
    otherwise
      check if every even index is a consonant and every odd index is a vowel
  return result of loop conditional
*/

function isAlt(word) {
  return [...word].every((e, i, a) => i ? 'aeiou'.includes(e) !== 'aeiou'.includes(a[i - 1]) : e);
}

// function isAlt(word) {
//   return [...word].every((e, i, a) => 'aeiou'.includes(a[0]) ? i % 2 ? !('aeiou'.includes(e)) : 'aeiou'.includes(e) : i % 2 ? 'aeiou'.includes(e) : !('aeiou'.includes(e)));
// }

// function isAlt(word) {
//   return [...word].every((e, i, a) => {
//     if ('aeiou'.includes(a[0])) {
//       return i % 2 ? !('aeiou'.includes(e)) : 'aeiou'.includes(e);
//     } else {
//       return i % 2 ? 'aeiou'.includes(e) : !('aeiou'.includes(e));
//     }
//   });
// }