/*
Extend the Array prototype/class with a function to return all elements of
that array, except the ones with the indexes passed in the parameter.
The function should accept either an array or a single integer as parameters.

Parameters:
  an array of indexes,
  or a single index
Returns:
  a new array containing the elements of the input array,
    excluding the elements at the index(s) specified in the arg
Examples:
  ['a', 'b', 'c', 'd', 'e'].except([1,3]) // ['a', 'c', 'e']
  ['a', 'b', 'c', 'd', 'e'].except(1) // ['a', 'c', 'd', 'e']
  ['a', 'b', 'c', 'd', 'e'].except(0) // ['b', 'c', 'd', 'e']
Pseudocode:
  iterate over the called on array
    filter out the elements whose index match those provided in the arg
  return the filtered array
*/

Array.prototype.except = function(keys) {
  return this.filter((_, i) => Array.isArray(keys) ? !keys.includes(i) : keys !== i);
}