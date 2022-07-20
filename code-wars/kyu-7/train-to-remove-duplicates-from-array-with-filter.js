/**
 *In this kata your task is to remove all the duplicates from the array
 using a standart build-in method - Array.prototype.filter(); return the
 array containing unique values only.

Tip: use the index of value(s) to solve this kata

For example:

var arr = [4];
unique(arr); // should return [4]

var arr = [1,1,1,2,2,3];
unique(arr); // should return [1,2,3]
 */

function unique(arr) {
  return arr.filter((e, i) => i === arr.indexOf(e));
}