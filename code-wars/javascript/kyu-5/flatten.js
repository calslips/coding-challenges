/*
For this exercise you will create a global flatten method. The
method takes in any number of arguments and flattens them into a
single array. If any of the arguments passed in are an array then
the individual objects within the array will be flattened so that
they exist at the same level as the other arguments. Any nested
arrays, no matter how deep, should be flattened into the single
array result.

The following are examples of how this function would be used and
what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]])
  // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']])
  // returns ['a', 'b', 2, 3, null, 4, 'c']

Parameters: any amount of args of various data type
  str, num, boolean, null, arrays, etc.
Returns: an array
  1 dimensional array containing primitive data types
Examples:
  flatten(1, [2, 3], 4, 5, [6, [7, [8]]]), [1, 2, 3, 4, 5, 6, 7, 8]
  flatten([[[[[1]]]]], ['a', [3, ['b']]], null, 5, 'c'), [1, 'a', 3, 'b', null, 5, 'c']
Pseudocode:
  gather all args into an array
  initialize a result var as an empty array to collect primitives
  iterate over the args array
    if current element is an array
      reassign result to equal itself concatted with recursive call to flatten
      (with current element spread as args)
    otherwise
      push current element to result
  return result array
*/

function flatten() {
  return [...arguments].reduce((f, e) => f.concat(Array.isArray(e) ? flatten(...e) : e), []);
}

function flatten() {
  return [...arguments].reduce((f, e) => Array.isArray(e) ? f.concat(flatten(...e)) : [...f, e], []);
}

function flatten() {
  return [...arguments].reduce((f, e) => Array.isArray(e) ? [...f, ...flatten(...e)] : [...f, e], []);
}

function flatten() {
  return [...arguments].reduce((f, e) => Array.isArray(e) ? [...f, ...flatten(...e)] : f.concat(e), []);
}

function flatten() {
  return [...arguments].reduce((f, e) => Array.isArray(e) ? f.concat(flatten(...e)) : (f.push(e), f), []);
}

function flatten() {
  let result = [];
  for (const arg of arguments) {
    if (Array.isArray(arg)) {
      result = result.concat(flatten(...arg));
    } else {
      result.push(arg);
    }
  }
  return result;
}