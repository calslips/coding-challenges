/*
Given an array/list [] of integers , Find The maximum difference
between the successive elements in its sorted form.

Notes
Array/list size is at least 3.
Array/list's numbers Will be mixture of positives and negatives
  also zeros
Repetition of numbers in the array/list could occur.
The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4,
  The difference between 9 - 5 = 4.

maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23,
  The difference between  |-4- (-27) | = 23.
Note: Regardless the sign of negativity.

maxGap ({-7,-42,-809,-14,-12}) ==> return (767)
Explanation:
The Maximum Gap after sorting the array is 767,
The difference between  | -809- (-42) | = 767.
Note: Regardless the sign of negativity.

maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576,
  The difference between  | 64 - 640 | = 576.
Note: Regardless the sign of negativity.

Parameters: an array of nums (unsorted)
Returns: a num
  the max difference between successive nums after sorting desc
Examples:
  maxGap([13,10,2,9,5]), 4
  maxGap([13,3,5]), 8
  maxGap([24,299,131,14,26,25]), 168
  maxGap([-3,-27,-4,-2]), 23
  maxGap([-7,-42,-809,-14,-12]), 767
  maxGap([12,-5,-7,0,290]), 278
  maxGap([-54,37,0,64,-15,640,0]), 576
  maxGap([130,30,50]), 80
  maxGap([1,1,1]), 0
  maxGap([-1,-1,-1]), 0
Pseudocode:
  initialize a max var assigned to -infinity
  sort the nums array from highest to lowest
  iterate over the sorted nums
    get the difference between adjacent values
    compare difference with max
      if it is greater than
        reassign max to new difference
      otherwise
        continue
  return max
*/

function maxGap(numbers) {
  return [...numbers].sort((a, b) => b - a).reduce((m, c, i, a) => i && (d = a[i - 1] - c) > m ? d : m, -Infinity);
}