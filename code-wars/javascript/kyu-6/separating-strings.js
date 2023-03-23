/*
Create a function that takes a string and separates it into a sequence of
letters.

The array will be formatted as so:
[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]

The function should separate each word into individual letters, with the
first word in the sentence having its letters in the 0th index of each 2nd
dimension array, and so on.

Shorter words will have an empty string in the place once the word has
already been mapped out.
(See the last element in the last part of the array.)

Examples:

sepStr("Just Live Life Man")
// => [['J','L','L','M'],
// => ['u','i','i','a'],
// => ['s','v','f','n'],
// => ['t','e','e','']]);

sepStr("The Mitochondria is the powerhouse of the cell")
// => [ [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
// => [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
// => [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
// => [ '', 'o', '', '', 'e', '', '', 'l' ],
// => [ '', 'c', '', '', 'r', '', '', '' ],
// => [ '', 'h', '', '', 'h', '', '', '' ],
// => [ '', 'o', '', '', 'o', '', '', '' ],
// => [ '', 'n', '', '', 'u', '', '', '' ],
// => [ '', 'd', '', '', 's', '', '', '' ],
// => [ '', 'r', '', '', 'e', '', '', '' ],
// => [ '', 'i', '', '', '', '', '', '' ],
// => [ '', 'a', '', '', '', '', '', '' ]]

Parameters: a string
  space-separated words
Returns: an array of arrays
  the nested arrays contain a single char of each word at the same index
  or '' if that word has ended.
Examples:
  sepStr("Just Live Life Man") //
    [['J','L','L','M'],
     ['u','i','i','a'],
     ['s','v','f','n'],
     ['t','e','e','']]
  sepStr("The Mitochondria is the powerhouse of the cell") //
    [[ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
     [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
     [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
     [ '', 'o', '', '', 'e', '', '', 'l' ],
     [ '', 'c', '', '', 'r', '', '', '' ],
     [ '', 'h', '', '', 'h', '', '', '' ],
     [ '', 'o', '', '', 'o', '', '', '' ],
     [ '', 'n', '', '', 'u', '', '', '' ],
     [ '', 'd', '', '', 's', '', '', '' ],
     [ '', 'r', '', '', 'e', '', '', '' ],
     [ '', 'i', '', '', '', '', '', '' ],
     [ '', 'a', '', '', '', '', '', '' ]]
Pseudocode:
  initialize result variable assigned to an empty array
  convert the input str into an array of words
  find the length of the longest word
  create a loop to run over the length of the longest word, counter i
    initialize a subArray variable assigned to an empty array
    create an inner loop to run over the length of array of words, counter j
      push the current character from word j at letter i  OR '' to subArray
    push subArray to result array
  return result array
*/

function sepStr(str) {
  const result = [];
  const words = str.split(' ');
  const longest = words.reduce((l, w) => w.length > l ? w.length : l, 0);
  for (let i = 0; i < longest; i++) {
    const subArray = [];
    for (let j = 0; j < words.length; j++) {
      subArray.push(words[j][i] || '');
    }
    result.push(subArray);
  }
  return result;
}

// function sepStr(str) {
//   return Array.from({length: (words = str.split(' '), words.reduce((l, w) => w.length > l ? w.length : l, 0))}).map((e, i) => words.reduce((a, w) => a.concat(w[i] || ''), []));
// }

// function sepStr(str) {
//   return Array.from({length: Math.max(...(words = str.split(' '), words.map(w => w.length)))}).map((e, i) => words.reduce((a, w) => a.concat(w[i] || ''), []));
// }