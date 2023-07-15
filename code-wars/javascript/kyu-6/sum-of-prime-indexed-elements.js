/*
In this Kata, you will be given an integer array and your task
is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

Parameters: an array
Returns: a num
Examples:
  total([]), 0
  total([1,2,3,4]), 7
  total([1,2,3,4,5,6]), 13
  total([1,2,3,4,5,6,7,8]), 21
  total([1,2,3,4,5,6,7,8,9,10,11]), 21
  total([1,2,3,4,5,6,7,8,9,10,11,12,13]), 33
  total([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 47
Pseudocode:
  if input length is less than 3
    return 0
  initialize sum var as 0
  iterate over input array
    if current index is prime
      add value at that index to sum
  return sum
*/

function total(arr) {
  if (arr.length < 3) return 0;
  return arr.reduce((s, n, i) => isPrime(i) ? s + n : s, 0);
}
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
}