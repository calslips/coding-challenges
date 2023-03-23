/**
 * Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined
This is not the same as finding the character that repeats first.
In that case, an input of 'tweet' would yield 'e'.

Another example:

In 'translator' you should return 't', not 'a'.

v      v
translator
  ^   ^
While second 'a' appears before second 't', the first 't' is before the first 'a'.
 */

function firstDup (s) {
  return [...s].find((c, i) => [...s.slice(i + 1)].find(l => c === l));
}

// function firstDup (s) {
//   return [...s].find((c, i) => {
//     for (let j = i + 1; j < s.length; j++) {
//       if (c === s[j]) return c;
//     }
//   })
// }