/*
In this kata, we have an unsorted sequence of consecutive numbers
from a to b, such that a < b always (remember a, is the minimum,
  and b the maximum value).
They were introduced an unknown amount of duplicates in this
sequence and we know that there is an only missing value such that
all the duplicate values and the missing value are between a and b,
but never coincide with them.
Find the missing number with the duplicate numbers
(duplicates should be output in a sorted array).

Let's see an example:

arr = [10,9,8,9,6,1,2,4,3,2,5,5,3]

find_dups_miss([10,9,8,9,6,1,2,4,3,2,5,5,3]) == [7,[2,3,5,9]]

The code should be fast to process long arrays
(maximum length aprox. = 1.000.000).
The values for the randon tests:

500 <= a <= 50000
a + k <= b and 100 <= k <= 1000000
amount of duplicates variable, according to the length of the array

Parameters: an array of nums
Returns: an array containing
  the missing num
  an array of duplicate nums
Examples:
  findDupsMiss([10,9,8,9,6,1,2,4,3,2,5,5,3]), [7, [2, 3, 5, 9]]
  findDupsMiss([20,19,6,9,7,17,16,17,12,5,6,8,9,10,14,13,11,14,15,19]), [18, [6, 9, 14, 17, 19]]
  findDupsMiss([24,25,34,40,38,26,33,29,50,31,33,56,35,36,53,49,57,27,37,40,48,44,32,35,45,52,43,47,26,51,55,28,41,42,46,51,25,30,44,54]), [39, [25, 26, 33, 35, 40, 44, 51]]
Pseudocode:
  initialize a hash to contain nums and their frequency
  initialize a min var to contain the min value in input
  initialize a max var to contain the max value in input
  initialize a missing var assigned to null
  initialize a duplicates var assigned to an empty array
  iterate over the input array
    if num exists as key in hash
      increment value
    otherwise
      initialize key in hash with a value of 1
  create a loop to run from min to max
    if current num is not a key in hash
      reassign missing to equal num
    otherwise if current num in hash is greater than 1
      push current num to duplicates
  return an array containing missing and duplicates
*/

function findDupsMiss(arr) {
  let hash = {},
      min = arr.reduce((min, c) => c < min ? c : min),
      max = arr.reduce((max, c) => c > max ? c : max),
      missing = null,
      dupes = [];
  arr.forEach(n => hash[n] = ++hash[n] || 1);
  for (let i = min; i <= max; i++) {
    if (!(i in hash)) missing = i;
    else if (hash[i] > 1) dupes.push(i);
  }
  return [missing, dupes];
}