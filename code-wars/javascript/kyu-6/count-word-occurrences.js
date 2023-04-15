/*
You need to write a method that counts the number of occurences
of a word in a given text.

The word counter is created as follows:
var sample  = "Lorem ipsum";
var counter = wordCounter(text);

Then one can get the count for a given word like this:
console.log(counter.count("Lorem")); // 1
console.log(counter.count("hey"));   // 0

The input texts are simple: they only contain ASCII characters,
words are either separate by white spaces or punctuation
(only , and .). If the input only contain punctuation or white
spaces, it should return a count of 0 for all words.

For performance reasons, your implementations should count the
words once and not parse the text each time the count method is
called.

Parameters:
  constructor takes in a str (text)
  count method takes in a str (word)
Returns: a num
  word count if exists in original text
  0 if not
Examples:
  const counter = wordCounter("Lorem ipsum");
  counter.count("Lorem"), 1
  counter.count("hey"), 0
Pseudocode:
  sanitize input text remove punctuation & only keep truthy strs
  initialize a hash where keys are words, values are their count
  return object containing
    count method
      if word arg exists in above hash itself
        return its associated value (count)
      otherwise
        return 0
*/

const wordCounter = function(text) {
  const hash = [...text]
    .filter(c => c !== ',' && c !== '.')
    .join('')
    .split(' ')
    .reduce((o, k) => (k && (o[k] = ++o[k] || 1), o), {});
  return {
    count: word => hash.hasOwnProperty(word) ? hash[word] : 0,
  };
};