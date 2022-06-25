/*
I will give you an integer (N) and a string. Break the string up into as
many substrings of N as you can without spaces. If there are leftover
characters, include those as well.

Parameters:
  a number
  a string
Returns: input string broken into substrings (length = n) without spaces,
  separated by line breaks ('\n')
Examples:
  stringBreakers(5, 'This is an example string') // 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'
Pseudocode:
  remove spaces from input string
  convert string to array, each letter its own element
  iterate over str array
    every N elements, insert '\n' (account for insertion & impact on index)
  join array into string
  return new string
*/

function stringBreakers(n, string) {
  const strArr = [...string.split(' ').join('')];
  for (let i = n; i < strArr.length; i += n + 1) {
    strArr.splice(i, 0, '\n');
  }
  return strArr.join('');
}