/*
You are given a secret message you need to decipher.
Here are the things you need to know to decipher it:

For each word:
the second and the last letter is switched
  (e.g. Hello becomes Holle)
the first letter is replaced by its character code
  (e.g. H becomes 72)

Note:
there are no special characters used, only letters and spaces

Examples:
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

Parameters: a str (encoded)
Returns: a str (decoded)
Examples:
  decipherThis('72olle 103doo 100ya'), 'Hello good day'
  decipherThis('82yade 115te 103o'), 'Ready set go'
  decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do'
Pseudocode:
  convert input str into an array of words
  map over the array of words
    separate the num value
    slice word from num value str length to end
    if sliced word is an empty str
      return char from char code num
    if sliced word is a length of 1
      return char from char code num concatted with
      sliced word
    if sliced word is a length of 2
      return char from char code num concatted with
      last sliced char & first sliced char
    if sliced word is a length greater than 2
      return char from char code num concatted with
      last sliced char & middle chars & first sliced char
  return mapped array of words joined on spaces
*/

function decipherThis(str) {
  return str.split(' ').map(w => {
    const n = parseInt(w), s = w.slice(`${n}`.length);
    return String.fromCharCode(n) + (s.length < 2 ? s : s.slice(-1) + s.slice(1, -1) + s[0]);
  }).join(' ');
}