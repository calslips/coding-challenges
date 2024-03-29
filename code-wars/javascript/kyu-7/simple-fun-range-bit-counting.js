/*
You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you
construct an array of all the integers from a to b inclusive.
You need to count the number of 1s in the binary representations
of all the numbers in the array.

Example
For a = 2 and b = 7, the output should be 11

Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7].
Converting the numbers to binary,
we get [10, 11, 100, 101, 110, 111],
which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.

Input/Output
[input] integer a
Constraints: 0 ≤ a ≤ b.

[input] integer b
Constraints: a ≤ b ≤ 100.

[output] an integer

Parameters: 2 nums
Returns: a num
Examples:
  rangeBitCount(2,7), 11
  rangeBitCount(0,1), 1
  rangeBitCount(4,4), 1
Pseudocode:
  initialize a sum var assigned to 0
  create a loop to run from a to b inclusive
    convert current num to binary
    count the 1s
    add the count to sum var
  return sum var
*/

function rangeBitCount(a, b) {
  return Array
    .from({length: b - a + 1}, (_, i) => [...(a + i).toString(2)].filter(b => +b).length)
    .reduce((s, n) => s + n, 0);
}

function rangeBitCount(a, b) {
  return Array
    .from({length: b - a + 1}, (_, i) => [...(a + i).toString(2)].reduce((s, b) => s + +b, 0))
    .reduce((s, n) => s + n, 0);
}