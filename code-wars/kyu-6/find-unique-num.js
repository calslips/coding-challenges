/*
Write a function called findUnique which returns the only
unique number from an array.

All numbers in the unsorted array are present twice, except
the one you have to find. The numbers are always valid
integer values between 1 and 2147483647, so no need for
type and error checking. The array contains at least one
number and may contain millions of numbers. So make sure
your solution is optimized for speed.

Parameters: an array of nums
Returns: a num
  (the only unique num in input array)
Examples:
  findUnique([1, 8, 4, 4, 6, 1, 8]) // 6
  findUnique([ 1234567 ]) // 1234567
  findUnique([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ]) // 1
  findUnique([ 2, 2, 5, 5, 4, 3, 3, 1, 1 ]) // 4
  findUnique([ 3, 5, 5, 4, 4, 3, 2, 2, 9 ]) // 9
Pseudocode:
  reduce the input array into an obj
    if current num exists as a key in obj
      delete it
    otherwise
      define prop where key & value equal current num
  convert reduced obj to an array of values
  return the num at index 0 (should be the only element)
*/

function findUnique(numbers) {
  const hash = numbers.reduce((o, n) => (n in o ? delete o[n] : o[n] = n, o), {});
  return Object.values(hash)[0];
}