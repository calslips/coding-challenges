/*
Imagine that you are given two sticks. You want to end up with
three sticks of equal length. You are allowed to cut either or
both of the sticks to accomplish this, and can throw away
leftover pieces.

Write a function, maxlen, that takes the lengths of the two
sticks (L1 and L2, both positive values), that will return the
maximum length you can make the three sticks.

Parameters: 2 nums
Returns: a num
Examples:
  maxlen(5, 12), 5
  maxlen(12, 5), 5
Pseudocode:
  find the min of the inputs
  find the max of the inputs
  if max is equal to or greater than 3x min
    return max divided by 3
  otherwise if the max is equal to or greater than 2x min
    return min
  otherwise
    return max halved
*/

function maxlen(l1, l2) {
  const max = Math.max(l1, l2), min = Math.min(l1, l2);
  return max >= min * 3 ? max / 3 : max >= min * 2 ? min : max / 2;
}