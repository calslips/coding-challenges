/*
You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet.
If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet.
If they pass 'a', start again at 'z'.
For our Polish friends this kata does not count 'y' as a vowel.

Exceptions:

If the character is 'c' or 'o', move it back 1 place.
For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e',
revert it back to it's original value.

Provided string will always be lower case,
won't be empty and will have no special characters.

Parameters: a string (lowercased chars)
Returns: a string
  chars swapped out accordingly
Examples:
  vowelBack("testcase") // "tabtbvba"
  vowelBack("codewars") // "bnaafvab"
  vowelBack("exampletesthere") // "agvvyuatabtqaaa"
Pseudocode:
  initialize a vowel var assigned to a vowel string
  initialize an alphabet var assigned to an alphabet string
  convert the input string into an array of letters
  map over the array of letters
    if the current letter is 'c' or 'o'
      replace it with previous letter in the alphabet
    if the current letter is 'd'
      replace it with the letter 3 positions prior
    if the current letter is 'e'
      replace it with the letter 4 positions prior
    if the current letter is any other vowel
      replace it with the letter 5 positions prior (circular)
      unless the replacement is 'c', 'o', 'd', or 'e' keep the original
    if the current letter is any other consonant
      replace it with the letter 9 positions after (circular)
      unless the replacement is 'c', 'o', 'd', or 'e' keep the original
  return the mapped array of letters joined on an empty string
*/

function vowelBack(s) {
  const v = 'aeiou', a = 'abcdefghijklmnopqrstuvwxyz', c = 'code';
  return [...s].map(l => (i = a.indexOf(l)) && l === 'c' || l === 'o' ? a[i - 1] : l === 'd' ? a[i - 3] : l === 'e' ? a[i - 4] : (v.includes(l) ? (i -= 5) < 0 && (i += 26) : i = (i + 9) % 26, c.includes(a[i]) ? l : a[i])).join('');
}

// function vowelBack(s) {
//   const v = 'aeiou', a = 'abcdefghijklmnopqrstuvwxyz', c = 'code';
//   return [...s].map(l => {
//     let i = a.indexOf(l);
//     if (l === 'c' || l === 'o') return a[i - 1];
//     else if (l === 'd') return a[i - 3];
//     else if (l === 'e') return a[i - 4];
//     else return v.includes(l) ? (i -= 5) < 0 && (i += 26) : i = (i + 9) % 26, c.includes(a[i]) ? l : a[i];
//   }).join('');
// }

// function vowelBack(s) {
//   const v = 'aeiou', a = 'abcdefghijklmnopqrstuvwxyz', c = 'code';
//   return [...s].map(l => {
//     let i = a.indexOf(l);
//     if (l === 'c' || l === 'o') return a[i - 1];
//     else if (l === 'd') return a[i - 3];
//     else if (l === 'e') return a[i - 4];
//     else if (v.includes(l)) return (i -= 5) < 0 && (i += 26), c.includes(a[i]) ? l : a[i];
//     else return i = (i + 9) % 26, c.includes(a[i]) ? l : a[i];
//   }).join('');
// }

// function vowelBack(s) {
//   const v = 'aeiou', a = 'abcdefghijklmnopqrstuvwxyz', c = 'code';
//   return [...s].map(l => {
//     let i = a.indexOf(l);
//     if (l === 'c' || l === 'o') return a[i - 1];
//     else if (l === 'd') return a[i - 3];
//     else if (l === 'e') return a[i - 4];
//     else if (v.includes(l)) {
//       (i -= 5) < 0 && (i += 26);
//       return c.includes(a[i]) ? l : a[i];
//     } else {
//       i = (i + 9) % 26;
//       return c.includes(a[i]) ? l : a[i];
//     }
//   }).join('');
// }