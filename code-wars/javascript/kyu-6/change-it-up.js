/*
Create a function that takes a string as a parameter and does the following,
in this order:
Replaces every letter with the letter following it in the alphabet
(see note below)
Makes any vowels capital
Makes any consonants lower case

Note:
the alphabet should wrap around, so Z becomes A
in this kata, y isn't considered as a vowel.
So, for example the string "Cat30" would return "dbU30"
(Cat30 --> Dbu30 --> dbU30)

Parameters: a string
Returns: a string
  (replace every letter in input with the latter after it in the alphabet,
  capitalize vowels, aeiou
  lowercase consonants)
Examples:
  changer('Alice') // 'bmjdf'
  changer('sponge1') // 'tqpOhf1'
  changer('Hello World') // 'Ifmmp xpsmE'
  changer('dogs') // 'Epht'
  changer('z') // 'A'
Pseudocode:
  split input string into an array of individual characters
  map over input array
    check if current element is a lowercased letter in the alphabet
      if it is
        replace it with the next letter in the alphabet
          check if it is a vowel
            if it is
              uppercase is
            if not
              lowercase it
      if not
        keep it the same
  join mapped array back into a string
  return string
*/

function changer(str) {
  const a = 'abcdefghijklmnopqrstuvwxyz';
  return [...str].map(c => (c = c.toLowerCase()) && a.includes(c) ? (c = a[(a.indexOf(c) + 1) % 26]) && 'aeiou'.includes(c) ? c.toUpperCase() : c : c).join('');
}

// function changer(str) {
//   const a = 'abcdefghijklmnopqrstuvwxyz';
//   return [...str].map(c => {
//     c = c.toLowerCase();
//     if (a.includes(c)) {
//       c = a[(a.indexOf(c) + 1) % 26];
//       if ('aeiou'.includes(c)) {
//         return c.toUpperCase();
//       }
//     }
//     return c;
//   }).join('');
// }