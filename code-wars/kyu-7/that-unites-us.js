/*
You have two arrays of single letters, array1 and array2,
where the elements are without duplicates(but the element
  of the first array can be equal to the element of the
  second array).

Return a new array containing the first n elements from
the two arrays in alphabetical order.

P.S. Array's length >= n

Parameters: 2 arrays of strings (single letters) and a number
Returns: an array of strings (single letters)
Examples:
  thatUnitesUs(['a', 'c', 'z'], ['b', 'f', 'z'], 3)
    // ['a', 'b', 'c']
  thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 3)
    // ['c', 'f', 'g']
  thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 2)
    // ['c', 'f']
Pseudocode:
  combine the arrays
  remove duplicates
  sort the combined array alphabetically
  slice out the portion of the combined array from beginning to input num
  return sliced array
*/

function thatUnitesUs(array1, array2, n) {
  return [...new Set(array1.concat(array2))].sort().slice(0, n);
}