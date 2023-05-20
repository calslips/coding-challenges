/*
You are given two arrays arr1 and arr2, where arr2 always contains integers.

Write the function find_array(arr1, arr2) such that:

For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] find_array returns ['a', 'a']

For arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] find_array returns [1, 1, 1]

For arr1 = [0, 3, 4], arr2 = [2, 6] find_array returns [4]

For arr1=["a","b","c","d"] , arr2=[2,2,2], find_array returns ["c","c","c"]

For arr1=["a","b","c","d"], arr2=[3,0,2] find_array returns ["d","a","c"]

If either arr1 or arr2 is empty, you should return an empty arr
(empty list in python, empty vector in c++).
Note for c++ use std::vector arr1, arr2.

Parameters: 2 arrays
Returns: an array
Examples:
  findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]), ['a', 'a']
  findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]), [1, 1, 1]
  findArray([1, 2, 3, 4, 5], [0]), [1]
  findArray([1, 2, 3, 4, 5], [4,2,0]), [5,3,1]
  findArray([1, 2, 3, 4, 5], [2,2,2]), [3,3,3]
  findArray(['this', 'is', 'test'], [0, 1, 2]
  findArray([1,2,3], []), []
  findArray([], [2,1,3]), []
  findArray([], []), []
Pseudocode:
  reduce 2nd array into an array
    if current num is less than 1st array length
      push value at current num index of 1st array to accumulating array
    return accumulating array
  return reduced array
*/

function findArray(arr1, arr2) {
  return arr2.reduce((r, n) => (n < arr1.length && r.push(arr1[n]), r), []);
}