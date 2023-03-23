/*
Given an array, find the duplicates in that array, and return a new array
of those duplicates. The elements of the returned array should appear in
the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be
treated as duplicates (i.e., "1" != 1).

Paramters: an array
  containing a variety of data types
Returns:
  a new array of elements that occur > once in input
  (ordered by 1st appearance of duplication along
  the input array)
Examples:
  duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']) // [4, 3, 1]
  duplicates([0, 1, 2, 3, 4, 5]) // []
Pseudocode:
  initialize a duplicates variable to be an empty array
  iterate over the input array
    check if current element occurs in the input array
    from 0 index to current index (exclusive)
    AND does not exist within duplicates array
      push current value to duplicates array
    otherwise
      continue to next iteration
  return duplicates array
*/

function duplicates(arr) {
  return arr.reduce((d, e, i, a) => a.slice(0, i).includes(e) && !d.includes(e) ? d.concat(e) : d, []);
}