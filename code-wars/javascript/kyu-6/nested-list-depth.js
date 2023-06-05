/*
A nested list (or array in JavaScript) is a list that appears as a value inside
another list,

[item, item, [item, item], item]
in the above list, [item, item] is a nested list.

Your goal is to write a function that determines the depth of the deepest nested
list within a given list.
return 1 if there are no nested lists. The list passed to your function can
contain any data types.

Parameters: an array
  containing any data type, including nested arrays
Returns: a num
  the depth level of the deepest nested array
Examples:
  arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1]), 6
  arrayDepth([true]), 1
  arrayDepth([]), 1
  arrayDepth([2, 'yes', [true, false]]), 2
  arrayDepth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]]), 2
Pseudocode:
  initialize a max depth and current depth var assigned to 1
  create an inner function that takes in an array
    iterate over the elements of array
      if current element is an array
        increment depth
        if depth is greater than max
          reassign max to equal depth
        recursively call inner fn on current array element
        decrement depth
  invoke inner fn on array arg
  return max depth
*/

function arrayDepth(array) {
  let currentDepth = 1, maxDepth = 1;
  (function findDepth(arr) {
    arr.forEach(e => {
      if (Array.isArray(e)) {
        if (++currentDepth > maxDepth) maxDepth++;
        findDepth(e), currentDepth--;
      }
    });
  })(array);
  return maxDepth;
}