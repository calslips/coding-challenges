/*
Given a text, for example:

const inputText = "
  Michael, how are you? - Cool, how is John Williamns and Michael Jordan?
  I don't know but Michael Johnson is fine. Michael do you still score
  points with LeBron James, Michael Green AKA Star and Michael Wood?
";

get an array of last names of people named Michael. The result should be:
["Jordan", "Johnson", "Green", "Wood"]

Notes:
First name will always be Michael with upper case 'M'.
There will always be a space character between 'Michael' and last name.
Last name will always be one word, starting with an upper-case letter and
continuing with lower-case letters.
There will always be at least one 'Micheal' with a valid last name in the
input text.

Parameters: a string (sentence)
Returns: an array of last names of peeople whose first name is 'Michael'
  (retreived from the input string)
Examples:
  const inputText = "
    Michael, how are you? - Cool, how is John Williamns and Michael Jordan?
    I don't know but Michael Johnson is fine. Michael do you still score
    points with LeBron James, Michael Green AKA Star and Michael Wood?
  ";
  getMichaelLastName(inputText) // ["Jordan","Johnson","Green","Wood"]
Pseudocode:
  initialize a result var assigned to an empty arr
  split the input str into an array of words
  loop over words arr as long as it contains 'Michael'
    initialize index var to the index of 'Michael' plus 1
    check if the word at index starts with an uppercase letter
      if it does,
        gather the first uppercased letter and concat it with the
        remaining chars that are lowercased letters
        and push this concatted str (last name) to result
      reassign words to be words sliced from index to the end
  return result array
*/

function getMichaelLastName(inputText) {
  let result = [], words = inputText.split(' ');
  for (let i = words.indexOf('Michael') + 1; i > 0; words = words.slice(i), i = words.indexOf('Michael') + 1) {
    if (words[i].charCodeAt(0) > 64 && words[i].charCodeAt(0) < 91) {
      result.push(words[i][0] + [...words[i].slice(1)].filter(c => c.charCodeAt() > 96 && c.charCodeAt() < 123).join(''));
    }
  }
  return result;
}

function getMichaelLastName(inputText) {
  let result = [], words = inputText.split(' ');
  while (words.includes('Michael')) {
    let i = words.indexOf('Michael') + 1;
    if (words[i].charCodeAt(0) > 64 && words[i].charCodeAt(0) < 91) {
      result.push(words[i][0] + [...words[i].slice(1)].filter(c => c.charCodeAt() > 96 && c.charCodeAt() < 123).join(''));
    }
    words = words.slice(i)
  }
  return result;
}