/*
Given an array arr that contains some integers(positive, negative or 0),
and a range list such as [[start1,end1],[start2,end2],...],
start and end are the index of arr and start always less than end.
Your task is to calculate the sum value of each range
(start index and end index are both inclusive),
and return the maximum sum value.

Note:
arr/$a always has at least 5 elements;
range/$range/ranges always has at least 1 element;
All inputs are valid;

Parameters: 2 arrays
  an array of nums
  an array of tuples containing nums
Returns: a num
  the max sum found within the tuple ranges of the input array
Examples:
  maxSum([1,-2,3,4,-5,-4,3,2,1], [[1,3],[0,4],[6,8]]) // 6
  maxSum([1,-2,3,4,-5,-4,3,2,1], [[1,3]]) // 5
  maxSum([1,-2,3,4,-5,-4,3,2,1], [[1,4],[2,5]]) // 0
Pseudocode:
  map over the range array
    grab the start and end indexes from current tuple
    slice the values from input array from start to end + 1
    get the sum of all values within slice
    return sum
  get max value from mapped array
  return max value
*/

function maxSum(arr, range) {
  return Math.max(...range.map(([s, e]) => arr.slice(s, ++e).reduce((s, n) => s + n, 0)));
}