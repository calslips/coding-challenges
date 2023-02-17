/*
Build a function findNestedMaximum that finds the maximum value
in an array containing both numbers and nested arrays. The nested
arrays themselves can contain both numbers and further nested
arrays. Some of the arrays may be empty but at least one number
will be present amongst all the arrays.

For example, findNestedMaximum([4, -3, [10], [[-5, 6], 18]])
should return 18.

Parameters: an array of nums or arrays
Returns: a num
  the max num within nested array arg
Examples:
  findNestedMaximum([4, -3, [10], [[-5, 6], 18]]), 18)
Pseudocode:
  initialize a max var assigned to -infinity
  iterate over input array
    if current el is an array
      reassign el to the result of recursive fn call with el as arg
    if max is less than el
      reassign max to el
  return max

  OR

  flatten the input array to infinity,
  spread into Math.max
  return the result
*/

function findNestedMaximum(arr) {
  let max = -Infinity;
  for (let e of arr) {
    if (Array.isArray(e)) e = findNestedMaximum(e);
    if (max < e) max = e;
  }
  return max;
}

function findNestedMaximum(arr) {
  return Math.max(...arr.flat(Infinity));
}