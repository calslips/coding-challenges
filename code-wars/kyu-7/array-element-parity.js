/*
In this Kata, you will be given an array of integers whose elements have
both a negative and a positive value, except for one integer that is either
only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)


Parameters: an array of numbers
Returns:
  a single number value from the array that doesn't have an opposite signed value
Examples:
  solve([1,-1,2,-2,3]) // 3
  solve([-3,1,2,3,-1,-4,-2]) // -4
  solve([1,-1,2,-2,3,3]) // 3
  solve([-110,110,-38,-38,-62,62,-38,-38,-38]) // -38
  solve([ -9,-105,-9,-9,-9,-9,105]) // -9
Pseudocode:
  iterate over input array
    find element that does NOT have an inverse value in the array
      (element plus any other value in array never equals 0)
    return that value
*/

function solve(arr) {
  return arr.find(e => arr.every(v => v + e));
}