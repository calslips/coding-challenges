/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

Notes:
the returned string should only contain lowercase letters

Parameters: a string (camelCased)
Returns: input string converted to (kebab-case)
  (no numbers?)
Examples:
  kebabize('myCamelCasedString') // 'my-camel-cased-string'
  kebabize('myCamelHas3Humps') // 'my-camel-has-humps'
Pseudocode:
  initialize a words var assigned to an empty arr
  initialize a word var assigned to an empty str
  iterate over the input str
    if current char is a num
      skip to next iteration
    if current char is lowercase
      concat it with word
    if current char is uppercase
      push word to words
      reassign word to equal current char lowercased
    if at last index of str
      push word to words
  return words joined on dash
*/

function kebabize(str) {
  const words = [];
  for (let i = 0, word = ''; i < str.length; i++) {
    if (isNaN(str[i])) str[i] === str[i].toLowerCase() ? word += str[i] : (word && words.push(word), word = str[i].toLowerCase());
    i === str.length - 1 && words.push(word);
  }
  return words.join('-');
}

function kebabize(str) {
  const words = [];
  for (let i = 0, word = ''; i < str.length; i++) {
    if (isNaN(str[i])) str[i] === str[i].toLowerCase() ? word += str[i] : (words.push(word), word = str[i].toLowerCase());
    i === str.length - 1 && words.push(word);
  }
  return words.filter(e => e).join('-');
}

function kebabize(str) {
  const words = [];
  for (let i = 0, word = ''; i < str.length; i++) {
    if (isNaN(str[i])) {
      if (str[i] === str[i].toLowerCase()) word += str[i];
      else words.push(word), word = str[i].toLowerCase();
    }
    if (i === str.length - 1) words.push(word);
  }
  return words.filter(e => e).join('-');
}