/*
Complete the function/method so that it takes a PascalCase string and
returns the string in snake_case notation. Lowercase characters can be
numbers. If the method gets a number as input, it should return a string.

Parameters: a string (PascalCased) or a number
Returns:
  input string converted (snake_cased)
  OR
  if input is a number, return it as a string
Examples:
  toUnderscore('TestController') // 'test_controller'
  toUnderscore('MoviesAndBooks') // 'movies_and_books'
  toUnderscore('App7Test') // 'app7_test'
  toUnderscore(1) // '1'
Pseudocode:
  if input is a number
    return number converted to string
  intialize words variable as an empty array
  initialize word variable as an empty string
  iterate over the input string
    if current char is capitalized AND NOT a number OR last char
      if last char
        add current char to word
      push current word to words array
      reassign word to an empty string
    add current char lowercased to word
  return words array joined on underscore '_'
*/

function toUnderscore(string) {
  if (Number.isInteger(string)) return `${string}`;
  const words = [];
  for (let i = 0, word = ''; i < string.length; i++) {
    if (i && string[i] === string[i].toUpperCase() && !Number.isInteger(+string[i]) || i === string.length - 1) {
      if (i === string.length - 1) word += string[i];
      words.push(word), word = '';
    }
    word += string[i].toLowerCase();
  }
  return words.join('_');
}

// const toUnderscore = s => [...`${s}`].map((c, i) => c === (lc = c.toLowerCase()) ? c : i ? '_' + lc : lc).join('');