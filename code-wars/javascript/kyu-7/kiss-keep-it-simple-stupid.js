/*
KISS stands for Keep It Simple Stupid. It is a design principle
for keeping things simple rather than complex.
You are the boss of Joe.
Joe is submitting words to you to publish to a blog. He likes to
complicate things.
Define a function that determines if Joe's work is simple or
complex.
Input will be non emtpy strings with no punctuation.

It is simple if: the length of each word does not exceed the
amount of words in the string (See example test cases)

Otherwise it is complex.

If complex:
return "Keep It Simple Stupid"

or if it was kept simple:
return "Good work Joe!"

Note: Random test are random and nonsensical. Here is a silly
example of a random test:
"jump always mostly is touchy dancing choice is pineapples mostly"

Parameters: a str
Returns: a str
  "Good work Joe!"
    if every word length in input
    does not exceed input word count
  "Keep It Simple Stupid"
    if input contains any word with a
    length greater than input word count
Examples:
  isKiss('Joe had a bad day'), "Good work Joe!"
  isKiss('Joe had some bad days'), "Good work Joe!"
  isKiss('Joe is having no fun'), "Keep It Simple Stupid"
  isKiss('Sometimes joe cries for hours'), "Keep It Simple Stupid"
Pseudocode:
  convert input str into an array of words
  iterate over each word of the array
    if current word length is greater than words length
      return "Keep It Simple Stupid"
  return "Good work Joe!"
*/

function isKiss(words) {
  return words.split(' ').every((w, _, a) => w.length <= a.length) ? "Good work Joe!" : "Keep It Simple Stupid";
}

function isKiss(words) {
  return words.split(' ').some((w, _, a) => w.length > a.length) ? "Keep It Simple Stupid" : "Good work Joe!";
}