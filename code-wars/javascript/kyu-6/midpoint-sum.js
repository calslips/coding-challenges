/*
For a given list of integers, return the index of the element
where the sums of the integers to the left and right of the
current element are equal.

Ex:
ints = [4, 1, 7, 9, 3, 9]
# Since 4 + 1 + 7 = 12 and 3 + 9 = 12,
  the returned index would be 3

ints = [1, 0, -1]
# Returns None/nil/undefined/etc
  (depending on the language) as there
# are no indices where the left and right sums are equal

Here are the 2 important rules:
The element at the index to be returned is not included in either
of the sum calculations!
Both the first and last index cannot be considered as a "midpoint"
(So None for [X] and [X, X])

Parameters: an array of nums
Returns: a num
  the index of the midpoint,
  where the nums to the left and right
  summed equal eachother
Examples:
  midpointSum([4,1,7,9,3,9]), 3
  midpointSum([1,0,1]), 1
  midpointSum([9,0,1,2,3,4]), 2
  midpointSum([0,0,4,0]), 2
  midpointSum([-10,3,7,8,-6,-13,21]), 4
Pseudocode:
  if input arr has a length less than 3
    return undefined
  create a loop
  initialize midpoint as arr length / 2 floored
  initialize seen as an obj (to keep track of mids, repeat = done)
  continue loop while mid has not been seen and mid falls b/w 1st and last exclusive
    initialize left var assigned to sum of nums to the left of mid
    initialize right var assigned to sum of nums to the right of mid
    if left & right are equal
      return mid
    otherwise
      add mid to seen
      if left is less than right
        increment mid
      otherwise if right is less than left
        decrement mid
*/

const midpointSum = function(a) {
  for (let mid = Math.floor(a.length / 2), seen = {}; a.length > 2 && !(mid in seen) && mid > 0 && mid < a.length - 1; ) {
    const l = a.slice(0, mid).reduce((s, n) => s + n, 0), r = a.slice(mid + 1).reduce((s, n) => s + n, 0);
    if (l === r) return mid;
    seen[mid] = true, l < r ? mid++ : mid--;
  }
};

const midpointSum = a => {for (let i = 1, l = a[0], s = a.reduce((a, b) => a + b, 0); i < a.length - 1; l += a[i], i++) if (l === s - l - a[i]) return i};