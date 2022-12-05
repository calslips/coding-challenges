/*
In the world of birding there are four-letter codes for the
common names of birds. These codes are created by some simple rules:

If the bird's name has only one word,
  the code takes the first four letters of that word.
If the name is made up of two words,
  the code takes the first two letters of each word.
If the name is made up of three words,
  the code is created by taking the first letter from the
  first two words and the first two letters from the third word.
If the name is four words long,
  the code uses the first letter from all the words.
(There are other ways that codes are created,
  but this Kata will only use the four rules listed above)

Complete the function that takes an array of strings of common bird
names from North America, and create the codes for those names based
on the rules above. The function should return an array of the codes
in the same order in which the input names were presented.

Additional considertations:
The four-letter codes in the returned array should be in UPPER CASE.
If a common name has a hyphen/dash, it should be considered a space.

Parameters: an arr of strs
Returns: an arr of strs
  strs are a condensed form of
  the strs found in the input
Examples:
  birdCode(["Common Tern", "Black-Capped Chickadee"]), ["COTE","BCCH"]
Pseudocode:
  map over the input arr
    replace hyphen/dash from current bird name with a space
    convert name into an arr of words (split on space)
    if words length is 1
      replace with 1st 4 letters cap'd
    if words length is 2
      replace with 1st 2 letters of each word cap'd
    if words length is 3
      replace with 1st letters of 1st 2 words and
      1st 2 letters of last word cap'd
    if words length is 4
      replace with 1st letter of each word cap'd
  return map'd arr
*/

function birdCode(arr){
  return arr.map(name => {
    const words = name.toUpperCase().split('-').join(' ').split(' ');
    if (words.length === 1) return words[0].slice(0, 4);
    if (words.length === 2) return words[0].slice(0, 2) + words[1].slice(0, 2);
    if (words.length === 3) return words[0][0] + words[1][0] + words[2].slice(0, 2);
    if (words.length === 4) return words[0][0] + words[1][0] + words[2][0] + words[3][0];
  });
}

function birdCode(arr) {
  return arr.map(name => {
    const words = name.split('-').join(' ').split(' ');
    if (words.length === 1) return words[0].slice(0, 4).toUpperCase();
    if (words.length === 2) return (words[0].slice(0, 2) + words[1].slice(0, 2)).toUpperCase();
    if (words.length === 3) return (words[0][0] + words[1][0] + words[2].slice(0, 2)).toUpperCase();
    if (words.length === 4) return (words[0][0] + words[1][0] + words[2][0] + words[3][0]).toUpperCase();
  });
}