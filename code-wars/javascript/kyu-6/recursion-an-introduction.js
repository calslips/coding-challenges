/*
You are on a set of stairs that are numbered 0 - 100 from top to
bottom. You are given your starting stair number, a stride width
(meaning how many stairs you step down at a time) and being
walking down. Return an array containing every stair you step on,
beginning from the lowest stair. Don't step below 0, it's Lava
and you'll burn/fail the Kata.
A test is in place to check for the presence of for/while to
ensure recursion is used so avoid using these terms in your
solution.

If width is 0, clearly you're not going anywhere so please return
an empty array.

Parameters: 2 nums
  height of the stairs
  stride length
Returns: an array of nums
  each el is the step num you touch with each stride
  without stepping on the ground
Examples:
  stepDown(10,1), [0,1,2,3,4,5,6,7,8,9,10]
  stepDown(80,10), [0,10,20,30,40,50,60,70,80]
  stepDown(49,10), [9,19,29,39,49]
  stepDown(5,7), [5]
  stepDown(5,0), []
Pseudocode:
  base case
    if width is 0
      return an empty array
    if stair minus width is less than 0
      return an array containing stair
  recursive case
    return an array containing
      recursive call to fn with args stair - width & width, spread
      and stair
*/

function stepDown(stair, width) {
  return stair - width < 0 ? [stair] : width ? [...stepDown(stair - width, width), stair] : [];
}

function stepDown(stair, width) {
  if (!width) return [];
  if (stair - width < 0) return [stair];
  return [...stepDown(stair - width, width), stair];
}