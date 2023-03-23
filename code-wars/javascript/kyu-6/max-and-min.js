/*
Write two functions max and min which returns the maximum and
minimum value of the argument passed into them respectively.

Example
max(1,2,3,4) //returns 4
max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
max(1,2,[3,4]) //returns 4
max(1,2,[3,[4]]) //returns 4
max(1,2,[3,['4r']]) //returns NaN
max([[],[-4]]) // returns -4
max() or max([]) //returns 0
And so goes for min

Further Instructions
functions will take any number of arguments
Arrays of numbers can be to any depth
You can't use Math.max, Math.min, and require
If one of the arguments can not be evaluated to a number,
  return NaN

Parameters: nums or array of nums
Returns: a num
  the max value out of the inputs
  or NaN if there is a value that cannot be coerced to num
Examples:
  max(1,2,3,4), 4
  max(1,2,[3,4]), 4
  max(1,2,[3,[4]]), 4
  min(1,2,3,4), 1
  min([1,2],3,4), 1
  min(1,2,[3,[4,0]]), 0
Pseudocode:
  for max
    collect all args (rest)
    flatten args
    initialize max var with value of -Infinity
    iterate over the args values
      if current value evaluates to NaN
        return NaN
      otherwise if current value is greater than max
        reassign max to current value
    if max is original value (-Infinity)
      return 0
    otherwise
      return max
  for min
    collect all args (rest)
    flatten args
    initialize min var with a value of +Infinity
    iterate over the args values
      if current value evaluates to NaN
        return NaN
      otherwise if current value is less than min
        reassign min to current value
    if min is original value (+Infinity)
      return 0
    otherwise
      return min

  for max
    collect all args (rest)
    flatten args completely
    reduce flatArgs to a single max value
      if either previous or current are NaN
        return NaN
      otherwise if current is greater than previous
        return current
      otherwise
        return previous
    return reduced value
  for min
    collect all args (rest)
    flatten args completely
    reduce flatArgs to a single min value
      if either previous or current are NaN
        return NaN
      otherwise if current value is less than previous
        return current
      otherwise
        return previous
    return reduced value
*/

function max(...args) {
  let max = -Infinity, flatArgs = args.flat(Infinity);
  for (const val of flatArgs) {
    if (isNaN(val)) return NaN;
    else if (val > max) max = +val;
  }
  return max === -Infinity ? 0 : max;
}

function min(...args) {
  let min = +Infinity, flatArgs = args.flat(Infinity);
  for (const val of flatArgs) {
    if (isNaN(val)) return NaN;
    else if (val < min) min = +val;
  }
  return min === +Infinity ? 0 : min;
}

function max(...args) {
  return (flatArgs = args.flat(Infinity)) && flatArgs.length && flatArgs.reduce((p, c) => isNaN(p) || isNaN(c) ? NaN : c > p ? +c : p);
}

function min(...args) {
  return (flatArgs = args.flat(Infinity)) && flatArgs.length && flatArgs.reduce((p, c) => isNaN(p) || isNaN(c) ? NaN : c < p ? +c : p);
}