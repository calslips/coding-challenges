/*
Your task is to extend JavaScript Array object, with methods
.first() and .last(), so you can get respectively first or last
element of the array.

var a = [2, 5, 7, 3 ,4];
a.first();  // 2
a.last();   // 4

Note: in case of empty array, methods should return undefined.

Parameters: none
  array method
Returns:
  first method returns value at 0 index
  last method returns value at last index
  if array is empty
    returns undefined
Examples:
  [2,5,7,3,4].first(), 2
  [2,5,7,3,4].last(), 4
  [].first(), undefined
  [].last(), undefined
Pseudocode:
  define first method on array prototype
    return 'this' arrays value at index 0
  define last method on array prototype
    return 'this' arrays value at the last index
*/

Array.prototype.first = function() {
  return this[0];
}
Array.prototype.last = function() {
  return this[this.length - 1];
}