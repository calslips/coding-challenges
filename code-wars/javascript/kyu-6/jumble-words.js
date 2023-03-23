/*
Aoccdrnig to a rscheearch at Cmabrigde Uinervtisy, it deosn't
mttaer in waht oredr the ltteers in a wrod are, the olny
iprmoetnt tihng is taht the frist and lsat ltteer be at the
rghit pclae. The rset can be a toatl mses and you can sitll
raed it wouthit porbelm. Tihs is bcuseae the huamn mnid deos
not raed ervey lteter by istlef, but the wrod as a wlohe.
Interesting article about this.

Task:
Write a function which mix inner characters in each word,first
and last character stays untouched.Notice that punctuation mark
is not a part of a word!By word we define only alphanumeric
characters.

Requirements:
-at least 10% of all changeable words must differ from original.
If you solve this kata,check how many percent of changeable
words you have changed.If you reach 100% you will get a reward!

Parameters: a string
Returns: a string
  each word's inner letters jumbled
  NOT including punctuation
Examples:
  `According to a researcher at Cambridge University,
   it doesn't matter in what order the letters in a word are,
   the only important thing is that the first and last letter
   be at the right place. The rest can be a total mess and you
   can still read it without problem. This is because the
   human mind does not read every letter by itself but the
   word as a whole.`
  // 'Aoccdrnig to a rscheearch at Cmabrigde Uinervtisy,
      it deosn't mttaer in waht oredr the ltteers in a wrod are,
      the olny iprmoetnt tihng is taht the frist and lsat ltteer
      be at the rghit pclae. The rset can be a toatl mses and you
      can sitll raed it wouthit porbelm. Tihs is bcuseae the
      huamn mnid deos not raed ervey lteter by istlef, but the
      wrod as a wlohe.'
Pseudocode:
  convert string to an array of words, split on space
  iterate over the array of words (map)
    initialize a punctuation var, assigned to an empty string
    check if the word ends in anything BUT a letter
      if it does, place it in the punctuation var
      reassign word to be word without punctuation
    check if the word length is greater than 2
      if it is
        slice out the inner chars
        reverse their order
        sandwich the reversed inner letters with the original outer letters
        reassign word to be the jumbled word
    if punctuation is truthy
      concat new word with punctuation
    replace original word with jumbled word
  convert array of jumbled words to a string, join on space
  return new jumbled string
*/

function jumble(string) {
  return string.split(' ').map(w => {
    let punctuation = '';
    if ((last = w.toLowerCase().charCodeAt(w.length - 1)) < 97 || last > 122) {
      punctuation = w[w.length - 1];
      w = w.slice(0, -1);
    }
    if (w.length > 2) {
      let innerJumbled = [...w.slice(1, -1)].reverse().join('');
      w = w[0] + innerJumbled + w[w.length -1] + punctuation;
    }
    return w;
  }).join(' ');
}

// function jumble(string) {
//   return string.split(' ').map(w => {
//     let punctuation = '';
//     if ((last = w.toLowerCase().charCodeAt(w.length - 1)) < 97 || last > 122) {
//       punctuation = w[w.length - 1];
//       w = w.slice(0, -1);
//     }
//     if (w.length > 2) {
//       let innerJumbled = [...w.slice(1, -1)].reverse().join('');
//       w = w[0] + innerJumbled + w[w.length -1];
//     }
//     if (punctuation) {
//       w + punctuation;
//     }
//     return w;
//   }).join(' ');
// }

// 99.4% jumbled on randomized tests
// 94.59% jumbled on predefined test cases
  // probably due to using reverse instead of actual jumbling (palindromes?)