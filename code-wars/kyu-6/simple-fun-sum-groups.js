/*
Given an array of integers, sum consecutive even numbers and consecutive
odd numbers. Repeat the process while it can be done and return the length
of the final array.

Example
For arr = [2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]

The result should be 6.

[2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]  -->
         2+2+6       0+2+0     5+5+7+7       3+3+9
[2, 1,   10,    5,    2,        24,     4,   15   ] -->
                               2+24+4
[2, 1,   10,    5,             30,           15   ]
The length of final array is 6
Input/Output
[input] integer array arr

A non-empty array,

1 ≤ arr.length ≤ 1000

0 ≤ arr[i] ≤ 1000

[output] an integer

The length of the final array

Parameters: an array of numbers
Returns: a number (length of result array)
  (each element (number) alternates between even/odd
  after adding together evens that touch evens &
  odds that touch odds)
Examples:
  sumGroups([2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]) // 6
  sumGroups([2, 1, 2, 2, 6, 5, 0, 2, 0, 3, 3, 3, 9, 2]) // 5
  sumGroups([1]) // 1
  sumGroups([2]) // 1
  sumGroups([1,2]) // 2
  sumGroups([1,1,2,2]) // 1
Pseudocode:
  initialize result array as an empty array
  initialize group array as an empty array
  iterate over input array
    push current element to group array
    if current element's even/odd status does NOT match next element's status
      if group length is > 1
        sum all the elements in group
        push sum to results array
      otherwise
        push single group element to result array
      reset group array to be empty
    otherwise
      continue
  check if contents of result array are equal to contents of input array
  (no changes made, every element alternates even/odd status)
    if it is
      return result array length
    otherwise
      return recursive call to sumGroups fn with result array as the arg;
*/

function sumGroups(arr) {
  let result = [], group = [];
  for (let i = 0; i < arr.length; i++) {
    group.push(arr[i]);
    if (arr[i] % 2 !== arr[i + 1] % 2) {
      result.push(group.reduce((s, n) => s + n, 0));
      group = [];
    }
  }
  return result.every((e, i) => e === arr[i]) ? result.length : sumGroups(result);
}