/*
JavaScript 1.8.5 helpfully added the Array.isArray function,
which can tell you whether its argument is an Array or not.
Without it, checking whether something is an Array is rather
tricky. How would you do it if you had to?

Parameters: any data type
Returns: a boolean
  whether input is an array or not
Examples:
  isArray([]), true
  isArray({}), false
  isArray(null), false
  isArray(undefined), false
  isArray({length : 0}), false
  isArray('Array'), false
  isArray('[]'), false
  isArray('[1, 2]'), false
  isArray(Array), false
  isArray(Array()), true
  isArray(Array.prototype), true
  isArray(Object.defineProperty([], 'prop', {value : 'value'})), true
Pseudocode:
*/

function isArray(arr) {
  return typeof arr === 'object' && JSON.stringify(arr)[0] === '[';
}