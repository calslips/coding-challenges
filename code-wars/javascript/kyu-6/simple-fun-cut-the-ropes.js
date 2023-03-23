/*
You are given N ropes, where the length of each rope is a
positive integer. At each step, you have to reduce all the ropes
by the length of the smallest rope.

The step will be repeated until no ropes are left. Given the
length of N ropes, print the number of ropes that are left
before each step.

Example
For a = [3, 3, 2, 9, 7], the result should be [5, 4, 2, 1]

  You have 5 ropes:
    3 3 2 9 7   ( 5 left) step 1:
    1 1 0 7 5   ( 4 left) step 2:
    0 0 0 6 4   ( 2 left) step 3:
    0 0 0 0 2   ( 1 left) step 4:
    0 0 0 0 0     Hence the result is [5, 4, 2, 1]

Input/Output
[input] integer array a
length of each rope.

3 <= a.length <= 2000

1 <= a[i] <= 100

[output] an integer array
number of ropes before each step.

Parameters: an array of nums
  lengths of rope
Returns: an array of nums
  remaining rope counts after each reduction
Examples:
  cutTheRopes([3, 3, 2, 9, 7]), [5, 4, 2, 1]
  cutTheRopes([1, 2, 3, 4, 3, 3, 2, 1]), [8, 6, 4, 1]
  cutTheRopes([13035, 6618, 13056, 20912, 1119, 13035, 6618, 6618, 8482, 13056]), [10, 9, 6, 5, 3, 1]
Pseudocode:
  initialize a result array containing input length
  sort input in asc order
  loop over the input, while input has a length
    reassign a to equal itself mapped
      current el subtracted by 1st el
      & filter out falsy els
    push new a length to result (if there is a length)
  return result array
*/

function cutTheRopes(a, c = 0) {
  return Object.values(a.reduce((o, k) => (o[k] = ++o[k] || 1, o), {})).reduce((l, v) => ((r = a.length - c) && l.push(r) && (c += v), l), []);
}

function cutTheRopes(a) {
  let result = [], copy = [...a].sort((a, b) => a - b);
  while (copy.length && result.push(copy.length)) copy = copy.map(e => e - copy[0]).filter(Boolean);
  return result;
}