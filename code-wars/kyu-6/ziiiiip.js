/*
Let's implement the zipObject function that enables such results

zipObject(['fred', 'barney'], [30, 40])
=> { 'fred': 30, 'barney': 40 }

zipObject([['fred', 30], ['barney', 40]])
=> { 'fred': 30, 'barney': 40 }

The zipObject creates an object composed from arrays of keys and values.
It is provided with either a single two dimensional array, i.e.
[[key1, value1], [key2, value2]] or with two arrays, one of keys and one
of corresponding values.

If only keys are given, then set the values to undefined.
zipObject(['fred', 'barney'])
{ fred: undefined, barney: undefined }

If neither keys nor values are specified, then return {}
zipObject()
{}

Parameters: none / 1 array / two arrays
  could be 1 array of keys and 1 array of values
  an array of entries (2d array)
  1 array of keys (values will default to undefined)
  none
Returns:
  an object containing key/value pairs from the input array(s)
  an empty object if no args
Examples:
  zipObject(['fred', 'barney'], [30, 40]) // { 'fred': 30, 'barney': 40 }
  zipObject([['fred', 30], ['barney', 40]]) // { 'fred': 30, 'barney': 40 }
  zipObject(['fred', 'barney']) // { 'fred': undefined, 'barney': undefined }
  zipObject() // {}
Pseudocode:
  initialize an empty result object
  if keys is defined (an array passed in)
    AND each element in keys is an array (2d array)
      iterate over the length of the keys array
        create a property in result obj, where the 1st element in each subarray
        is the key and the 2nd element in the subarray is the value
    OR each element in keys is a primitive value (1d array)
      iterate over the length of the keys array
        create a property in result obj, where the key is the current element,
        and its value is from the 2nd arg array (values) at the respective index,
        or undefined if no values array was passed in
  return result object
*/

function zipObject(keys = [], values = []) {
  return keys.reduce((o, e, i) => Array.isArray(e) ? ((o[e[0]] = e[1]), o) : ((o[e] = values[i]), o), {});
}

// function zipObject(keys, values) {
//   return keys ? keys.reduce((o, e, i) => Array.isArray(e) ? ((o[e[0]] = e[1]), o) : ((o[e] = values && values[i]), o), {}) : {};
// }

// function zipObject(keys, values) {
//   return (keys = keys || []) && keys.reduce((o, e, i) => Array.isArray(e) ? ((o[e[0]] = e[1]), o) : ((o[e] = values && values[i]), o), {});
// }

// function zipObject(keys, values) {
//   return keys ? keys.reduce((o, e, i) => Array.isArray(e) ? Object.assign(o, {[e[0]]: e[1]}) : Object.assign(o, {[e]: values && values[i]}), {}) : {};
// }