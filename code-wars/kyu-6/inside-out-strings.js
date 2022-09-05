/*
You are given a string of words (x), for each word within the string
you need to turn the word 'inside out'. By this I mean the internal
letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd,
you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'

Parameters: a string of words
Returns: each word in the input string turned inside out
  3 letter words or less appear unaffected
  even number words all letters moved
  odd number words, middle letter stays, peripheral letters move
Examples:
  insideOut('man i need a taxi up to ubud')
    // 'man i ende a atix up to budu'
  insideOut('what time are we climbing up the volcano')
    // 'hwta item are we milcgnib up the lovcona'
  insideOut('take me to semynak')
    // 'atek me to mesykan'
Pseudocode:
  convert input into an array of words
  iterate over each word
    if its length is 3 or less
      keep the word the same
    otherwise
      slice the word from beginning to midpoint
        convert to an array of letters and reverse it
        convert back to string
      concatted with
      middle char if odd, empty string if even
      concatted with
      slice word from midpoint through end
        convert to an array of letters and reverse it
        convert back to string
  join the array of words on spaces and return
*/

function insideOut(x) {
  return x
    .split(' ')
    .map(w =>
      w.length < 4
        ? w
        : [...w.slice(0, (m = w.length / 2))].reverse().join('') +
          (w.length % 2 ? w[m - 0.5] : '') +
          [...w.slice(-m)].reverse().join('')
    )
    .join(' ');
}

// function insideOut(x){
//   return x.split(' ').map(w => w.length < 4 ? w : [...w.slice(0, m = w.length / 2)].reverse().join('') + (w.length % 2 ? w[m - .5] : '') + [...w.slice(-m)].reverse().join('')).join(' ');
// }