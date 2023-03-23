/*
Write a function that takes an arbitrary number of strings and interlaces
them (combines them by alternating characters from each string).

For example combineStrings('abc', '123') should return 'a1b2c3'.

If the strings are different lengths the function should interlace them
until each string runs out, continuing to add characters from the remaining
strings.

For example combineStrings('abcd', '123') should return 'a1b2c3d'.

The function should take any number of arguments and combine them.

For example combineStrings('abc', '123', '£$%') should return 'a1£b2$c3%'.

Note: if only one argument is passed return only that string. If no arguments
are passed return an empty string.

Parameters: unknown number of strings
Returns: the string args interlaced together into a single string
  if no args; return empty string
  if 1 arg; return arg string
Examples:
  combineStrings('abc', '123') // 'a1b2c3'
  combineStrings('abcd', '123') // 'a1b2c3d'
  combineStrings('abcd', '123', '£$%') // 'a1£b2$c3%d'
Pseudocode:
  initialize result variable, value empty string
  iterate over the length of the longest arg
    for each arg
      if there is a value at current arg at current index
        concat with result
      otherwise
        concat empty string
  return result string
*/

function combineStrings() {
  return Array.from({length: Math.max(...(as = [...arguments]).map(arg => arg.length))}).reduce((s, _, i) => (as.forEach(a => s += a[i] || ''), s), '');
}

// function combineStrings() {
//   let result = '';
//   for (let i = 0; i < Math.max(...(as = [...arguments]).map(arg => arg.length)); i++) {
//     as.forEach(a => result += a[i] || '');
//   }
//   return result;
// }