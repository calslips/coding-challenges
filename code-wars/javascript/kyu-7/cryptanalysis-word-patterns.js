/*
In cryptanalysis, words patterns can be a useful tool in
cracking simple ciphers.

A word pattern is a description of the patterns of letters
occurring in a word, where each letter is given an integer code
in order of appearance. So the first letter is given the code 0,
and second is then assigned 1 if it is different to the first
letter or 0 otherwise, and so on.

As an example, the word "hello" would become "0.1.2.2.3". For
this task case-sensitivity is ignored, so "hello", "helLo" and
"heLlo" will all return the same word pattern.

Your task is to return the word pattern for a given word. All
words provided will be non-empty strings of alphabetic
characters only, i.e. matching the regex "[a-zA-Z]+".

Parameters: a str
Returns: a str
Examples:
  wordPattern("hello"), "0.1.2.2.3");
  wordPattern("heLlo"), "0.1.2.2.3");
  wordPattern("helLo"), "0.1.2.2.3");
  wordPattern("Hippopotomonstrosesquippedaliophobia"),
    "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13"
Pseudocode:
  convert input to lower case
  create a set from input chars
  convert set to an array
  initialize a hash from set to contain letters as keys and their index as value
  split lower case input on empty str
  map over char array
    replace each letter with its associated value in hash
  return result of map joined on '.'
*/

function wordPattern(word) {
  word = word.toLowerCase();
  const hash = [...new Set(word)].reduce((o, k, i) => (o[k] = i, o), {});
  return [...word].map(c => hash[c]).join('.');
}