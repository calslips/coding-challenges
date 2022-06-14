/*
Please write a function that will take a string as input and return a hash.
The string will be formatted as such. The key will always be a symbol and
the value will always be an integer.

"a=1, b=2, c=3, d=4"
This string should return a hash that looks like
{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}

Parameters: a string containing comma separated key-value pairs (further separated by equal signs)
Returns: an object containing the key-value pairs parsed from the input string
Examples:
  strToHash("a=1, b=2, c=3, d=4") // { 'a': 1, 'b': 2, 'c': 3, 'd': 4}
  strToHash("") // {}
Pseudocode:
  convert input string into an array, split on the comma
  map over each element,
    convert element into a key-value tuple, split on the equal sign
    convert tuple value (2nd element / index 1) from string to num
  create an object from the entries array
  return object
*/

function strToHash(str) {
  return str ? Object.fromEntries(str.split(', ').map(e => (e = e.split('=')) && [e[0], +e[1]])) : {};
}
