/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string,
and returns the same string with all even indexed characters in each
word upper cased, and all odd indexed characters in each word lower cased.
The indexing just explained is zero based, so the zero-ith index is even,
therefore that character should be upper cased and you need to start over
for each word.

The passed in string will only consist of alphabetical characters and
spaces(' '). Spaces will only be present if there are multiple words.
Words will be separated by a single space(' ').
*/

function toWeirdCase(string){
  let newString = '';
  let letterNum = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      letterNum = 0;
      newString += ' ';
    } else {
      let letter = string.slice(i, i+1);
      if (letterNum % 2 === 0) {
        newString += letter.toUpperCase();
        letterNum++;
      } else {
        newString += letter;
        letterNum++;
      }
    }
  }
  return newString;
}
