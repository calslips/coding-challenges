/*
In this kata, you have an integer array which was ordered by ascending
except one number.

For Example: [1,2,3,4,17,5,6,7,8]
For Example: [19,27,33,34,112,578,116,170,800]
You need to figure out the first breaker. Breaker is the item, when removed
from sequence, sequence becomes ordered by ascending.

For Example: [1,2,3,4,17,5,6,7,8] => 17 is the only breaker.

For Example: [19,27,33,34,112,578,116,170,800] => 578 is the only breaker.

For Example: [105, 110, 111, 112, 114, 113, 115] => 114 and 113 are breakers.
114 is the first breaker.
  When removed 114, sequence becomes ordered by ascending =>
    [105, 110, 111, 112, 113, 115]
  When removed 113, sequence becomes ordered by ascending =>
    [105, 110, 111, 112, 114, 115]

For Example: [1, 0, 2] => 1 and 0 are the breakers. 1 is the first breaker.
  When removed 1, sequence becomes ordered by ascending => [0, 2]
  When removed 0, sequence becomes ordered by ascending => [1, 2]

For Example: [1, 2, 0, 3, 4] => 0 is the only breaker.
  When removed 0, sequence becomes ordered by ascending. => [1, 2, 3, 4]

TASK:
Write a function that returns the first breaker.

Notes:
Input array does not contain any duplicate element.

Parameters: an array of numbers
Returns: a number
  the FIRST number in the input array that disrupts its ascending order
Examples:
  orderBreaker([1,2,3,4,17,5,6,7,8]) // 17
  orderBreaker([19,27,33,34,112,578,116,170,800]) // 578
  orderBreaker([105, 110, 111, 112, 114, 113, 115]) // 114
  orderBreaker([1, 0, 2] ) // 1
  orderBreaker([1, 2, 0, 3, 4]) // 0
Pseudocode:
  iterate over the input array
    initialize a remains variable to hold the array after removing current element
    initialize a sorted variable to hold a copy of the remains array sorted ascending
    check if the position and value of all elements in remains are the same as sorted
      if they are
        return current element
      otherwise
        continue to next iteration of loop
*/

function orderBreaker(input) {
  for (let i = 0; i < input.length; i++) if (input[i] > input[i + 1]) return input[i - 1] > input[i + 1] ? input[i + 1] : input[i];
}

// function orderBreaker(input) {
//   for (let i = 0; i < input.length; i++) {
//     const remains = input.slice(0, i).concat(input.slice(i + 1));
//     const sorted = remains.slice().sort((a, b) => a - b);
//     if (remains.every((e, i) => e === sorted[i])) return input[i];
//   }
// }