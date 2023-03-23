/*
Write
function combine()
that combines arrays by alternatingly taking elements passed to it.
Arrays can have different lengths.

Parameters: arrays of varying length / content
Returns: a single array containing the alternating elements of the input arrays
Examples:
  combine(['a', 'b', 'c'], [1, 2, 3]) // ['a', 1, 'b', 2, 'c', 3]
  combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) // ['a', 1, 'b', 2, 'c', 3, 4, 5]
  combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) // ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
Pseudocode:
  initialize a result variable with the value of an empty array
  initiate a loop where the number of iterations = length of longest array in args
    for each count (i) loop over each array in args
      if the array contains an element at i
        push the element at i from each array to result
  return result
*/

function combine() {
  const result = [];
  for (let i = 0; i < Math.max(...[...arguments].map(a => a.length)); i++) {
    for (let j = 0; j < arguments.length; j++) {
      if (arguments[j][i]) result.push(arguments[j][i]);
    }
  }
  return result;
}