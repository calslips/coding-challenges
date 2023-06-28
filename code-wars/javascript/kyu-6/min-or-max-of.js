/*
Create two functions, max and min which, given an "iterable" as
argument would return maximum (and minimum) value of this argument.

eg :

max([1,2,3]) // -> 3
min([5,3,4]) // -> 3
"Iterable" argument may be an array, a string or a set.

eg :

max([1,2,3]) // -> 3   ...array
max("AZBYC") // -> "Z" ...string
min({5,6,7}) // -> 5   ...set
Items/elements of array or set may be number, string or date.

eg :

min([1,2,3]) // -> 1    ...array of integers
min(["zzz","bb","aaaa"]) // -> "aaaa"   ...array of strings
max([new Date(2017,1,1), new Date(2015,2,2), new Date(2013,3,3)])
  // -> new Date(2017,1,1)   ...array of dates

Note You may assume each items/elements of an iterable will be of
     same type ( no [ 1, 2, "a", "foo", new Date()] )

Parameters: an iterable
  (array, string, set)
Returns:
  max - max value in iterable
  min - min value in iterable
Examples:
  min([5,3,4]) // 3     (array)
  min({5,6,7}) // 5     (set)
  min([1,2,3]) // 1     (array)
  min(["zzz","bb","aaaa"]) // "aaaa"    (array)
  max([1,2,3]) // 3     (array)
  max("AZBYC") // "Z"   (string)
  max([new Date(2017,1,1), new Date(2015,2,2), new Date(2013,3,3)])
    // new Date(2017,1,1)     (array)
Pseudocode:
  convert input into set then spread argument contents into an array
  reduce argArray
    compare current value to accumulator value
  return result of reduce
*/

function max(x) {
  return [...new Set(x)].reduce((v, c) => typeof c === 'string' ? c.localeCompare(v) > 0 ? c : v : c > v ? c : v);
}

function max(x){
  return [...new Set(x)].reduce((v, c) => v > c ? v : c);
}

function min(x) {
  return [...new Set(x)].reduce((v, c) => typeof c === 'string' ? c.localeCompare(v) < 0 ? c : v : c < v ? c : v);
}

function min(x){
  return [...new Set(x)].reduce((v, c) => v < c ? v : c);
}