/**
 * Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

function high(x){
  let highestWord;
  x.split(' ').reduce((acc, word) => {
//     const wordPts = word.split('').reduce((sum, l) => sum + (l.charCodeAt(0) - 96), 0);
    let wordPts = 0;
    for (let i = 0; i < word.length; i++) {
      wordPts += (word.charCodeAt(i) - 96);
    }

    if (wordPts > acc) {
      highestWord = word;
      return wordPts;
    } else {
      return acc;
    }
  }, 0)
  return highestWord;
}