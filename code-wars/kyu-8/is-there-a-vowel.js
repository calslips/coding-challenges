/**
 * Given an array of numbers, check if any of the numbers are the character
 * codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
 */

function isVow(a){
  const vowels = 'aeiou';
  const codeBank = {};
  for (let i = 0; i < vowels.length; i++) {
    codeBank[vowels.charCodeAt(i)] = vowels[i];
  }
  return a.map(n => (n in codeBank) ? codeBank[n] : n);
}

// function isVow(a){
//   return a.map(n => 'aeiou'.includes(String.fromCharCode(n)) ? String.fromCharCode(n) : n)
// }