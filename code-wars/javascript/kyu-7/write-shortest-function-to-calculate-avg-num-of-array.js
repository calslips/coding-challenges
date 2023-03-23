/*
Given an array of integers, calculate the Average of these numbers.

Main challenge is to write shortest and compact function for it.

Output of function will be also checked in tests, however most
important is to write the shortest possible function
(code length < 100). Input will always be valid.

Parameters: an array of nums
Returns: a num
  the avg of the input array nums
Examples:
  avg([0, 1, 2]), 1
  avg([0, 1, 2, 3, 4]), 2
Pseudocode:
  reduce input arr, adding current value to accumulator (initially 0)
  divide by input arr length
  return result
*/

let avg=a=>a.reduce((s,n)=>s+n)/a.length;