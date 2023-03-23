/*
You've just finished writing the last chapter for your novel when a virus
suddenly infects your document. It has swapped the 'i's and 'e's in 'ei'
words and capitalised random letters. Write a function which will:

a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their,
caffeine, deceive, weight)

b) only capitalise the first letter of each sentence. Make sure the rest of
the sentence is in lower case.

Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.

Parameters: a string
  (sentence with ei in swapped order and mixed uppercase letters)
Returns: the input string corrected
  (only the first word capitalized and ei's in the right order)
Examples:
  proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT.")
    // "Their deceit was inconceivable. She seized the moment."
  proofread("HIs nieghBOur wAs oVerwieGht.")
    // "His neighbour was overweight."
  proofread("SHe rEcieveD a pIegNor.")
    // "She received a peignor."
Pseudocode:
  convert input string to all lowercase
  split the input string into an array of sentences
    further split sentences into an array of letters
    iterate over letter array
      if current element is 'i' and next element is 'e'
        make current element become 'e'
      if current element is 'e' and last element was 'i'
        make current element become 'i'
      otherwise
        keep the same letter
    join the letters back into a sentence
    for each sentence capitalize the first letter
  return the sentences joined
*/

function proofread(str) {
  return str.toLowerCase().split('. ').map(s => s[0].toUpperCase() + s.split('').map((l, i, a) => l === 'i' && a[i + 1] === 'e' ? 'e' : l === 'e' && a[i - 1] === 'i' ? 'i' : l).join('').slice(1)).join('. ');
}

// function proofread(str) {
//   return str
//     .toLowerCase()
//     .split('. ')
//     .map(
//       s =>
//         s[0].toUpperCase() +
//         s
//           .split('')
//           .map((l, i, a) =>
//             l === 'i' && a[i + 1] === 'e'
//               ? 'e'
//               : l === 'e' && a[i - 1] === 'i'
//               ? 'i'
//               : l
//           )
//           .join('')
//           .slice(1)
//     )
//     .join('. ');
// }