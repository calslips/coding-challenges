/*
You'll be given a string of random characters
(numbers, letters, and symbols).
To decode this string into the key we're searching for:

(1) count the number occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the
    number of occurences for each corresponding letter in the alphabet.

For example:

'$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
   ^    ^   ^  ^  ^         ^^^  ^                   ^
  [4]  [3] [2][3][1]        abc  f                   z

'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
 ^  ^   ^   ^                    ^ ^ ^                    ^
[1][3] [3] [3]                   a c e                    z

Remember, the string returned should always be 26 characters long,
  and only count lowercase letters.

Note: You can assume that each lowercase letter will appears a maximum
      of 9 times in the input string.

Parameters: a string (of random chars)
Returns: a string
  (each char a number potentially 0-9)
Examples:
  decrypt('$aaaa#bbb*ccfff!z') // '43200300000000000000000001'
  decrypt('z$aaa#ccc%eee123456789') // '30303000000000000000000001'
Pseudocode:
  intialize hash to keep track of count of each letter
  initialize an alphabet var, to be a string of the alphabet
  iterate over the length of the input str
    check if current is a lowercase letter
      if it is, increment count in hash (or initialize as 1)
  convert alphabet str to array
  reduce alphabet array to string of letter occurrences
    lookup current letter in hash and concat value with accumulator str
    (if undefined, concat 0)
  return reduced string of letter occurrences
*/

// function decrypt(encryption) {
//   const a = 'abcdefghijklmnopqrstuvwxyz',
//         hash = [...encryption].reduce((h, c) => a.includes(c) ? (h[c] = ++h[c] || 1) && h : h, {});
//   return [...a].reduce((f, l) => f += hash[l] || 0, '');
// }

function decrypt(encryption) {
  const hash = {}, alpha = 'abcdefghijklmnopqrstuvwxyz';
  [...encryption].forEach(c => alpha.includes(c) && (hash[c] = ++hash[c] || 1));
  return [...alpha].reduce((f, l) => f += hash[l] || 0, '');
}