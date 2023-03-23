/*
Sort an array according to the indices in another array.
It is guaranteed that the two arrays have the same size,
and that the sorting array has all the required indices.

initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

sort(initialArray, sortingArray) => ['z', 'x', 'y']

sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']

Parameters: 2 arrays
  one containing any type of values
  the other containing indices (nums)
Returns: an array
  containing 1st array values arranged
  according to 2nd array indices
Examples:
  sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]), [1, 3, 2, 5, 4]
Pseudocode:
  initialize a results var assigned to an empty arr
  iterate over the initialArray
    initialize index var as value at current counter within sortingArray
    assign results at index to equal current value
  return results arr
*/

function sort(initialArray, sortingArray) {
  return initialArray.reduce((r, c, i) => (r[sortingArray[i]] = c, r), []);
}