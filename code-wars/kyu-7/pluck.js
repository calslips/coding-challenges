/*
Implement a function which takes a sequence of objects and a property name,
and returns a sequence containing the named property of each object.

If an object is missing the property, you should just leave it as
undefined/None in the output array.

Parameters:
  an array of objects
  a string (represents a property name)
Returns:
  an array of values from each object in the input array whose key matches the input string
    if an object does not contain a property with that key, place undefined in result array
Examples:
  pluck([{a:1}, {a:2}], 'a') // [1,2]
  pluck([{a:1, b:3}, {a:2}], 'b') // [3, undefined]
Pseudocode:
  initialize results variable as an empty array
  iterate over input array of objects
    if the object contains a key that matches the input string
      push its value to the results array
    if that key does NOT exist in the current object
      push undefined to the results array
  return results
*/

function pluck(objs, name) {
  return objs.map(o => o[name]);
}