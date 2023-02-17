/*
We want to extend the array class so that it provides a
contains_all? method. This method will always assume that an
array is passed in and will return true if all values in the
passed in array are present within the current array.

For example:

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
items.containsAll([1, 2, 3]);  =>  true
items.containsAll([1, 5, 13]);  =>  false
  // because 13 is not in the items array

Parameters: an array
Returns: a boolean
  whether all the values within arg array are in 'this' array
Examples:
  [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([1,2,3,4,5]), true
  [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([9,2,5,4,10]), true
  [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([12,15]), false
  [1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([]), true
  [].containsAll([12,15]), false
  [].containsAll([]), true
Pseudocode:
  if every value in arg array is included in this
    return true
  otherwise
    return false
*/

Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
  const map = this.reduce((m, k) => (m.set(k), m), new Map());
  return a.every(e => map.has(e));
} } );

Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
  return a.every(e => this.includes(e));
} } );