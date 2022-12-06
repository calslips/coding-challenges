/*
Create a function mostLikely which compares two probabilities,
returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers
separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

mostLikely('1:3','1:2')
will return false as 1 in 3 is less likely than 1 in 2.

Parameters: two strs
  ratios, structured as 'num:num'
Returns: a boolean
  whether the 1st ratio is greater than the 2nd
Examples:
  mostLikely('1:3','1:2'), false
Pseudocode:
  convert strs into tuples (split on colon) to isolate nums
  check if tuple1 at index 0 divided by tuple1 at index 1
    is greater than tuple2 at index 0 divided by tuple2 at index 1
  return the result of conditional
*/

function mostLikely(prob1, prob2) {
  const [p1L, p1R] = prob1.split(':'), [p2L, p2R] = prob2.split(':');
  return p1L / p1R > p2L / p2R;
}