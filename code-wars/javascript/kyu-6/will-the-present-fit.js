/*
Santa's elves are boxing presents, and they need your help! Write a function
that takes two sequences of dimensions of the present and the box, respectively,
and returns a Boolean based on whether or not the present will fit in the
box provided. The box's walls are one unit thick, so be sure to take that
in to account.

Examples: Present and box respectively
[10, 7, 16], [13, 32, 10] --> true, box is bigger than present
[5, 7, 9], [9, 5, 7]      --> false, present and box are same size
[17, 22, 10], [5, 5, 10]) --> false, box is too small

Parameters: two arrays, each with 3 number values
Returns: a boolean
  (determine if each number in the present array
  has a respective number from the box array that
  is greater by at least 1)
Examples:
  willFit([10, 2, 4], [6, 4, 12]) // true
  willFit([1, 2, 3], [2, 1, 3]) // false
Pseudocode:
  sort the numbers in both the present and box arrays
    from least to greatest
  check if every value at the respective index within
    the sorted box array is at least 1 greater than the
    value in the sorted present array at the same index
  return the boolean result of the check
*/

function willFit(present, box) {
  return box.sort((a, b) => a - b), present.sort((a, b) => a - b) && box.every((s, i) => s > present[i] + 1);
}