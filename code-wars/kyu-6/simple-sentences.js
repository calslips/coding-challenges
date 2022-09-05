/*
Implement a function, so it will produce a sentence out of the given parts.

Array of parts could contain:
words;
commas in the middle;
multiple periods at the end.

Sentence making rules:
there must always be a space between words;
there must not be a space between a comma and word on the left;
there must always be one and only one period at the end of a sentence.

Parameters: an array of strings
  words or commas
Returns: a string
  a sentence from the words of the input array
  spaces between words
  no space between commas and the preceding word
  ending with a period
Examples:
  makeSentence(['hello', 'world'])
    // 'hello world.'
  makeSentence(['hello', ',', 'my', 'dear'])
    // returns 'hello, my dear.'
Pseudocode:
  initialize a sentence variable, assigned to ''
  iterate over the input array
    if current is a period
      continue (ignore it)
    otherwise if current is the first word OR a comma
      concat sentence with first word/comma
    otherwise
      concat sentence with a space and the word
  return sentence concatted with a period
*/

function makeSentence(parts) {
  return parts.reduce((s, w, i) => w === '.' ? s : !i || w === ',' ? s += w : s += ' ' + w, '') + '.';
}