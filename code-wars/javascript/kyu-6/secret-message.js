/*
There is a secret message in the first six sentences of this
kata description. Have you ever felt like there was something
more being said? Was it hard to figure out that unspoken
meaning? Never again! Never will a secret go undiscovered.
Find all duplicates from our message!

Your job is to write a function that will find the secret words
of the message and return them in order. The words in the secret
message should be ordered in the order in which they are found
as a duplicate, for example:

'This is a test. this test is fun.' // --> 'this test is'

Notes
The input will always be a string.

If the random tests repeat a word multiple times, it should show
up in the secret message only once, based on the position of the
first time it was duplicated.

The punctuation and casing of words (uppercase, lowercase) should
not matter for the purpose of this kata. We are only concerned
with word duplication.

Parameters: a str
Returns: a str
  containing only duplicate words from input
  in the order of becoming a duplicate
  ignore casing and punctuation
Examples:
  findSecretMessage('This is a test. this test is fun.'), 'this test is'
Pseudocode:
  initialize a secrets var assigned to an empty array
  initialize a hash assigned to an empty obj
  initialize a sanitized var assigned to an empty str
  iterate through the input str
    replace uppercase letters with lowercase and
    remove chars that are NOT letters
  convert new str into an array of words
  iterate through the words array
    if word exists in hash
      increment the value
    otherwise
      initialize the value as 1
    if value of word in hash is equal to 2
      push word to secrets array
  return secrets converted to a space-separated str of words
*/

function findSecretMessage(paragraph) {
  const secrets = [], hash = {};
  let sanitized = '';
  for (const char of paragraph.toLowerCase()) {
    char === ' '
      ? sanitized += ' '
      : char.toUpperCase() === char.toLowerCase()
      ? sanitized += ''
      : sanitized += char
  }
  const words = sanitized.split(' ');
  for (const word of words) {
    hash[word] = ++hash[word] || 1;
    if (hash[word] === 2) secrets.push(word);
  }
  return secrets.join(' ');
}

function findSecretMessage(paragraph) {
  const secrets = [], hash = {};
  let sanitized = '';
  for (const char of paragraph) {
    char.charCodeAt() > 96 && char.charCodeAt() < 123
      ? sanitized += char
      : char.charCodeAt() > 64 && char.charCodeAt() < 91
      ? sanitized += char.toLowerCase()
      : char === ' '
      ? sanitized += ' '
      : sanitized += '';
  }
  const words = sanitized.split(' ');
  for (const word of words) {
    hash[word] = ++hash[word] || 1;
    if (hash[word] === 2) secrets.push(word);
  }
  return secrets.join(' ');
}