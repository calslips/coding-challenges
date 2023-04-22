/*
Comparing objects is not an easy task in JavaScript. The
comparison operator only returns true if both variables point to
the same object, that's why two objects with the same properties
and values are different for JavaScript, like this:

var a = { name: 'Joe' };
var b = { name: 'Joe' };
a == b;  //-> false

Sometimes it's really useful to detect when two objects have the
same values.

Your task is to develop the deepCompare function to test if two
objects have the same properties and values. Remember that an
object can contain other objects. The function should also be
able to correctly compare simple values, like strings and numbers
(without using type coercion, please).

To make things simpler, it will only have to deal with simple
values and objects and arrays containing strings, booleans and
numbers, without taking into account regular expressions, dates
and functions.

Parameters: 2 objects
Returns: a boolean
  whether both objects contain the same props/values
Examples:
  const a = {name: 'Joe'};
  const b = {name: 'Joe'};
  deepCompare(a, b), true
Pseudocode:
  if both inputs equal eachother
    return true
  if either of them are NOT objects
    return false
  if the count of keys differ between the 2 objs
    return false
  iterate over the keys of obj1
    recursively call fn, passing in value of key at obj1 and key at obj2
    if the result of the recursive call is false
      return false
  return true
*/

function deepCompare(o1, o2) {
  if (o1 === o2) return true;
  if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;
  const o1Keys = Object.keys(o1), o2Keys = Object.keys(o2);
  if (o1Keys.length !== o2Keys.length) return false;
  for (const key of o1Keys) if (!deepCompare(o1[key], o2[key])) return false;
  return true;
}