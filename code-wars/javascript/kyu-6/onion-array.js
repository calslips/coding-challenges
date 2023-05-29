/*
An onion array is an array that satisfies the following condition
for all values of j and k:

If all of the following are true:
j >= 0
k >= 0
j + k = array.length - 1
j != k

then:
a[j] + a[k] <= 10

Examples:
[1, 2, 19, 4, 5]   =>  true  (as 1+5 <= 10 and 2+4 <= 10)
[1, 2, 19, 4, 10]  =>  false (as 1+10 > 10)

Write a function named isOnionArray/IsOnionArray/is_onion_array()
that returns true if its argument is an onion array
and returns false if it is not.

Parameters: an array of nums
Returns: a boolean
Examples:
  isOnionArray([6,0,4]), true
  isOnionArray([1,1,15,10,-1]), false
Pseudocode:
  initialize a loop,
  keep track of start index / end index,
  keep running while start plus end equals input arr length - 1
  AND start index does NOT equal end index,
  increment start index, decrement end index each loop
    if num at start index plus num at end index is greater than 10
      return false
  return true
*/

function isOnionArray(arr) {
  for (let j = 0, k = arr.length - 1; j < k; j++, k--) if (arr[j] + arr[k] > 10) return false;
  return true;
}