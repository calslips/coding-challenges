/*
A spoonerism is a spoken phrase in which the first letters of
two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in
which only the first letters of each word are swapped:

"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words,
separated by a space: words and returns a spoonerism of those words
in a string, as in the above example. A "word" in the context of
this kata can contain any of the letters A through Z in upper or
lower case, and the numbers 0 to 9. Though spoonerisms are about
letters in words in the domain of written and spoken language,
numbers are included in the inputs for the random test cases and
they require no special treatment.

NOTE: All input strings will contain only two words. Spoonerisms can
be more complex.
For example, three-word phrases in which the first letters of the
first and last words are swapped:
  "pack of lies" --> "lack of pies"
or more than one letter from a word is swapped:
  "flat battery --> "bat flattery"
You are NOT expected to account for these, or any other nuances
involved in spoonerisms.

Parameters: a str
  containing 2 space separated words
Returns: a str
  input str with the 1st letters of
  each word swapped
Examples:
  spoonerize("nit picking"), "pit nicking"
  spoonerize("wedding bells"), "bedding wells"
  spoonerize("jelly beans"), "belly jeans"
Pseudocode:
  split input str into an array of 2 words
  use destructured assignment to assign variables
    to equal each word with the first letters swapped
  return swapped words concatted with a space between
*/

function spoonerize(words) {
  let [a, b] = words.split(' ');
  [a, b] = [b[0] + a.slice(1), a[0] + b.slice(1)];
  return `${a} ${b}`;
}