/*
A range of numbers is represented as a tuple of two numbers, for example [0, 10]
would indicate a range between 0 and 10 inclusively.

The inverse of a range between some bounds are the ranges from the lower bound,
to the lowest part of the range and the upper part of the range to the upper bound.

For example:

Given the range [25, 75]
And the lower bound 0
And the upper bound 100
The inverse ranges would be [[0, 24], [76, 100]].

Write a function invertedRanges which when given a list of ranges, returns the
inverse of those ranges with a lower bound of 0 and an upper bound of 100.

All ranges will be between 0 and 100, they will be given in order and will not overlap

Parameters:
  an array of array(s) containing 2 nums
  or an empty array
Returns:
  an array of array(s) containing 2 nums
  or an empty array
Examples:
  invertedRanges([[0, 100]]), []
  invertedRanges([[0, 50], [51, 100]]), []
  invertedRanges([]), [[0, 100]]
  invertedRanges([[0, 25], [51, 75]]), [[26, 50], [76, 100]]
  invertedRanges([[25, 50]]), [[0, 24], [51, 100]]
Pseudocode:
  initialize an inverted var assigned to an empty array
  initialize a loop,
  keep track of index, start as 0
  iterate as long as start is less than 100
  increment index, reassign start to equal end of current range + 1
    if start of current range equals start
      continue
    fill an array with start and start of current range - 1 OR 100
    push tuple to inverted
  return inverted
*/

function invertedRanges(ranges) {
  const inverted = [];
  for (let i = 0, start = 0; start < 100; start = ranges[i++]?.[1] + 1) {
    if (start === ranges[i]?.[0]) continue;
    inverted.push([start, ranges[i]?.[0] - 1 || 100]);
  }
  return inverted;
}