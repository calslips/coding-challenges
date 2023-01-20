/*
Your task is to write a function, smartSum, that returns the sum
of an arbitrary number of arguments. But be careful, some of your
arguments can be arrays of numbers or nested arrays.

smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 21

Parameters: nums and/or arrays (can be nested arrays)
Returns: a num (sum of all num values within arg(s))
Examples:
  smartSum(1, 2), 3
  smartSum([1, 2], 3), 6
Pseudocode:
  collect all the args
  initialize sum var assigned to 0
  iterate over the args array
    if current value is a num
      add it to sum
    otherwise if it is an array
      recursively call smartSum with spread subarray as args
      add return of recursive call to sum
  return sum
*/

function smartSum(...args) {
  return args.flat(Infinity).reduce((s, n) => s + n);
}

function smartSum(...args) {
  return args.reduce((s, e) => s + (Array.isArray(e) ? smartSum(...e) : e), 0);
}

function smartSum(...args) {
  return args.reduce((s, e) => Array.isArray(e) ? s + smartSum(...e) : s + e, 0);
}

function smartSum(...args) {
  return args.reduce((s, e) => typeof e === 'number' ? s + e : s + smartSum(...e), 0);
}

function smartSum(...args) {
  let sum = 0;
  for (const el of args) typeof el === 'number' ? sum += el : sum += smartSum(...el);
  return sum;
}