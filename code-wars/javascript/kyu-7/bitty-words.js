/*
Your friend has given you a secret message nested inside a
block of text. She provided you the key to her code as a number
and now you must decode the message.

The number, in binary, represents on/off flags for each word of
the phrase. The bit order, overlayed on the array of words,
will give which words to include in the phrase.

Example:
bittyWords('Long live the king', 11)
Convert to binary: 11 = 0b1011
Apply binary to words list:
['Long', 'live', 'the', 'king']
    1       0      1       1
result: 'Long the king'

If the number does not have enough bits for the words array,
left pad the number with 0s.

Example:

bittyWords('So long and thanks for all the fish', 42)
  === 'and for the'

42 is 0b101010 which is only 6 words, but the phrase has 8 words.
The left two words are 0s and not included in the output.

To uncomplicate things,
there will be no punctuation in the phrases.

Parameters:
  a str
  a num (in binary or to convert to binary)
Returns: a str
Examples:
  bittyWords('Long live the king!', 11), 'Long the king!'
  bittyWords('Long live the king!', 0), ''
  bittyWords('Long live the king!', 0b1111), 'Long live the king!'
  bittyWords('So long, and thanks for all the fish', 42), 'and for the'
  bittyWords('So long, and thanks for all the fish', 1), 'fish'
  bittyWords('So long, and thanks for all the fish', 0b10000000), 'So'
Pseudocode:
  convert bits to binary
  convert str to an array of words
  pad the start of the binary num with 0's to match the words array length
  filter the array of words
    only keep words that have a '1' at the matching index within binary num
  return filtered array of words joined on spaces
*/

function bittyWords(words, bits) {
  words = words.split(' '), bits = bits.toString(2).padStart(words.length, 0);
  return words.filter((_, i) => +bits[i]).join(' ');
}