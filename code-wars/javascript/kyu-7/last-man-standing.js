/*
Find the last number between 1 and n (inclusive) that survives
the elimination process

####How It Works

Start with the first number on the left then remove every other
number moving right until you reach the the end, then from the
numbers remaining start with the first number on the right and
remove every other number moving left, repeat the process
alternating between left and right until only one number remains
which you return as the "last man standing"

##Example

given an input of `9` our set of numbers is `1 2 3 4 5 6 7 8 9`

start by removing from the left    2   4   6   8
                                 1   3   5   7   9

then from the right                2       6
                                       4       8

then the left again                        6
                                   2

until we end with `6` as the last man standing

Note: due to the randomness of the tests it is possible that you
will get unlucky and a few of the tests will be really large, so
try submitting 2 or 3 times.

Parameters: a num
Returns: a num
Examples:
  lastManStanding(9), 6
  lastManStanding(10), 8
  lastManStanding(100), 54
  lastManStanding(1000), 510
Pseudocode:
  initialize a nums array containing nums 1 to n
  initialize a flag for left to right read direction as true
  run a loop as long as the array has a length greater than 1
    reassign nums to be the result of calling filter on it
      if left to right flag is true
        keep only odd indexed values
      otherwise
        if last index is odd
          keep only evens
        otherwise
          keep only odds
    invert flag value
  return num at 0th index of nums array
*/

function lastManStanding(n) {
  let nums = Array.from({length: n}, (_, i) => ++i), ltr = true;
  while (nums.length > 1) {
    nums = nums.filter((n, i) => ltr || nums.length % 2 ? i % 2 : !(i % 2));
    ltr = !ltr;
  }
  return nums[0];
}