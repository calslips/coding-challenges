/*
There are two lists, possibly of different lengths. The first one consists
of keys, the second one consists of values.
Write a function createDict(keys, values) that returns a dictionary created
from keys and values. If there are not enough values, the rest of keys should
have a None (JS null)value. If there not enough keys, just ignore the rest of values.

Parameters:
  an array of keys,
  an array of values
Returns:
  an object containing the key/value pairs from the input arrays
    if there are more keys than values
      assign key the value of null
    if there are more values than keys
      ignore values that dont pair up with a key
Examples:
  createDict(['a', 'b', 'c'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3}
  createDict(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
  createDict(['a', 'b', 'c','d'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd':null}
Pseudocode:
  initialize dictionary assigned to empty object
  iterate over the keys array
    add property to dictionary,
      current key is the key
      value comes from values array at the same index
      (null if doesn't exist)
  return dictionary
*/

function createDict(keys, values) {
  return keys.reduce((d, c, i) => ({...d, [c]: (values[i] === undefined ? null : values[i])}), {});
}