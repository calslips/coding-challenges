/*
Given an array of integers, return the smallest common
factors of all integers in the array.

When i say Smallest Common Factor i mean the smallest
number above 1 that can divide all numbers in the array
without a remainder.

If there are no common factors above 1, return 1
(technically 1 is always a common factor).

Parameters: an array of nums
Returns: a num
  the lowest number above 1 that
  divides evenly into all the nums
  within the input array
Examples:
  scf([200, 30, 18, 8, 64, 34]), 2
  scf([21, 45, 51, 27, 33]), 3
  scf([133, 147, 427, 266]), 7
  scf([3,5,7]), 1
  scf([]), 1
Pseudocode:
  find the min num within the input arr
  (if there are no elements in the input,
    assign 0 to min)
  iterate from 2 to min
    if all nums within input array are
    evenly divisbly by current counter
      return counter value
  return 1
*/

function scf(array) {
  const min = array.length ? Math.min(...array) : 0;
  for (let i = 2; i <= min; i++) if (array.every(n => !(n % i))) return i;
  return 1;
}
