/*
Write a function 'notQuine' which returns a string containing
every extended ASCII character that is NOT part of the source
code of the function.

The outer 'function () { }' wrapper is included.

A function containing all of the characters is not a valid
solution.

You may not modify Function.prototype.toString,
notQuine.toString, String.indexOf, or String.fromCharCode.

Only return characters from 32 to 254. Order does not matter.

Parameters: none
Returns: string
  containing chars NOT found within fn code
  with char codes b/w 32-254
Examples:
Pseudocode:
  initialize a hash as an empty obj
    to store chars and their associated char codes
  initialize a result var as an empty str
    to contain chars NOT in fn code
  convert fn to string and split into an array of chars
  iterate over the array of chars
    get char code of current char
    store char code as key in hash with char as value
  iterate over nums 32-254 inclusive
    if the current number is NOT in the hash
      concat result with string from the associated char code
  return result
*/

const notQuine = function() {
  const hash = [...notQuine.toString()].reduce((o, c) => (o[c.charCodeAt()] = c, o), {});
  return Array(223).fill().map((_, i) => i + 32).reduce((s, n) => hash[n] ? s : s + String.fromCharCode(n), '');
};