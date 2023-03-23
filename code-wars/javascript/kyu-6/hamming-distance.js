/*
The Hamming Distance is a measure of similarity between two
strings of equal length. Complete the function so that it
returns the number of positions where the input strings do
not match.

You can assume that the two input strings are of equal length.

Parameters: 2 strs
Returns: a num
  count of differences b/w input strs
Examples:
  hamming("I like turtles", "I like turkeys"), 3
  hamming("Hello World", "Hello World"), 0
  hamming("hello world", "hello tokyo"), 4
  hamming("a man a plan a canal", "a man a plan sobanal"), 3
  hamming("hamming and cheese", "Hamming and Cheese"), 2
  hamming("espresso", "Expresso"), 2
  hamming("old father, old artificer", "of my soul the uncreated "), 24
Pseudocode:
  initialize a count var assigned to 0
  iterate over the length of str a, increment counter by 1 each loop
    if chars at counter index of strs a & b are NOT equal
      increment count
  return count
*/

function hamming(a, b) {
  return [...a].reduce((h, e, i) => e !== b[i] ? ++h : h, 0);
}

function hamming(a, b) {
  let c = 0;
	for (let i = 0; i < a.length; i++) a[i] !== b[i] && c++;
  return c;
}