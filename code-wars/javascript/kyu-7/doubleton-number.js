/*
We will call a natural number a "doubleton number" if it contains
exactly two distinct digits. For example, 23, 35, 100, 12121 are
doubleton numbers, and 123 and 9980 are not.

For a given natural number n (from 1 to 1 000 000), you need to
find the next doubleton number. If n itself is a doubleton,
return the next bigger than n.

Parameters: a num
Returns: a num
Examples:
  doubleton(120), 121
  doubleton(1234), 1311
  doubleton(10), 12
Pseudocode:
  create a loop to run starting from input + 1
    create a set of digits
    if set of digits has a size of 2
      return current num
*/

function doubleton(num) {
  while (num++) if (new Set(`${num}`).size === 2) return num;
}