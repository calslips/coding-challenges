/*
Give you a array arr that contains some numebers.
Numbers can be positive,negative,integer or float.
Only one of these numbers is unique. Find and return it.

Some examples:
findUnique([1,2,3,5,7]) === 2
Because only 2 is an even number, the other numbers are odd.

findUnique([2,4,6,8,9]) === 9
Because only 9 is an odd number

findUnique([2,-4,6,8]) === -4
Because only -4 is a negative number

findUnique([-2,-4,-6,8]) === 8
Because only 8 is a positive number

findUnique([2,4.4,6,8]) === 4.4
Because only 4.4 is a float number

findUnique([2.2,4.4,6.6,8]) === 8
Because only 8 is a integer number

findUnique([2,2,2,4]) === 4
Because only 4 has a diffrent value

Priority level:
float/integer > positive/negative > odd/even > diffrent value

Some edge case:

findUnique([-2,-4,-6.6,8]) === -6.6  //not 8
Because Priority level float/integer > positive/negative

findUnique([-2,-4,-7, 8]) === 8  //not -7
Because Priority level positive/negative > odd/even

Note:
All inputs will be an array.
The array contains at least 3 element.
Only one unique number in it.
0 will not appear, do not worry about it ;-)

Parameters: an array of nums
Returns: a unique num from input array
Examples:
  findUnique([1,2,3,5,7]), 2
  findUnique([2,4,6,8,9]), 9
  findUnique([2,-4,6,8]), -4
  findUnique([-2,-4,-6,8]), 8
  findUnique([2,4.4,6,8]), 4.4
  findUnique([2.2,4.4,6.6,8]), 8
  findUnique([2,2,2,4]), 4
  findUnique([-2,-4,-6.6,8]), -6.6
  findUnique([-2,-4,-7, 8]), 8
Pseudocode:
  filter arr by whether nums are integers
    if filtered arr is of length 1
      return num at index 0
  filter arr by whether nums are NOT integers
    if filtered arr is of length 1
      return num at index 0
  filter arr by whether nums are pos
    if filtered arr is of length 1
      return num at index 0
  filter arr by whether nums are neg
    if filtered arr is of length 1
      return num at index 0
  filter arr by wheter nums are odd
    if filtered arr is of length 1
      return num at index 0
  filter arr by whether nums are even
    if filtered arr is of length 1
      return num at index 0
  find num whose index equals last index of
    return that value
*/

function findUnique(arr) {
  if (u = arr.filter(n => Number.isInteger(n)), u.length === 1) return u[0];
  else if (u = arr.filter(n => !Number.isInteger(n)), u.length === 1) return u[0];
  else if (u = arr.filter(n => n >= 0), u.length === 1) return u[0];
  else if (u = arr.filter(n => n < 0), u.length === 1) return u[0];
  else if (u = arr.filter(n => n % 2), u.length === 1) return u[0];
  else if (u = arr.filter(n => !(n % 2)), u.length === 1) return u[0];
  else return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}