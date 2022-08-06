/*
In this kata you have to write a method that folds a given array of
integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\
                    4/            4|          4\
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*

Fold 2-times:
[1,2,3,4,5] -> [9,6]
As you see, if the count of numbers is odd, the middle number will stay.
Otherwise the fold-point is between the middle-numbers, so all numbers
would be added in a way.

The array will always contain numbers and will never be null. The parameter
runs will always be a positive integer greater than 0 and says how many
runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified!

Parameters: an array and an integer
  array of numbers
  integer is number of folds
Returns:
  new array after folding input array
  the input number of times
Examples:
  foldArray([1, 2, 3, 4, 5], 1) // [6, 6, 3]
  foldArray([1, 2, 3, 4, 5], 2) // [9, 6]
  foldArray([1, 2, 3, 4, 5], 3) // [15]
  foldArray([-9, 9, -8, 8, 66, 23], 1) // [14, 75, 0]
Pseudocode:
  initialize result variable, undefined
  create a loop to execute the input run number of times
    reassign result to equal
    slice input array from half its length rounded down to its end, reversed
    map over sliced 2nd half
      for each element
        add the matching index element from sliced 1st half
        (slice input array from 0 index to half its length rounded down)
  return result array
*/

function foldArray(array, runs) {
  for (let r = 0; r < runs; r++, array = array.slice(Math.floor(array.length / 2)).reverse().map((e, i, a) => array.length % 2 && i === a.length - 1 ? e : e + array[i]));
  return array;
}