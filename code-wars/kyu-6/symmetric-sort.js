/*
Give you a number array(element range:1-99, array length range: 6-40),
please do a "Symmetric Sort" with it.

rule: sort the number, the first smallest number at the left side,
the second smaller number at the right side, and so on...

Example:
example1:                        example2:

array=[1,2,3,4,5,6,7,8,9]        array=[1,1,2,2,3,3,4,4,5]

after sort, should return:       after sort, should return:

      [1,3,5,7,9,8,6,4,2]              [1,2,3,4,5,4,3,2,1]

Parameters: an array of nums
Returns: an array of nums
  (sorted as described)
Examples:
  sc([1,2,3,4,5,6,7,8,9]) // [1,3,5,7,9,8,6,4,2]
  sc([1,1,2,2,3,3,4,4,5]) // [1,2,3,4,5,4,3,2,1]
  sc([9,8,7,6,5,4,3,2,1]) // [1,3,5,7,9,8,6,4,2]
  sc([5,4,4,3,3,2,2,1,1]) // [1,2,3,4,5,4,3,2,1]
  sc([11,2,33,4,55,6]) // [2,6,33,55,11,4]
  sc([5,12,5,8,33,13]) // [5,8,13,33,12,5]
Pseudocode:
  initialize a left var assigned to an empty array
  initialize a right var assigned to an empty array
  sort input array in ascending order
  iterate over the sorted array
    if index is even
      push current num to left
    otherwise if index is odd
      unshift current num into right
  return left and right concatted
*/

// n^2 ?, due to unshift (linear) nested in for loop (linear)
function sc(array) {
  const left = [], right = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) i % 2 ? right.unshift(array[i]) : left.push(array[i]);
  return left.concat(right);
}

// n log n, due to sort
function sc(array) {
  let left = [], right = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) i % 2 ? right.push(array[i]) : left.push(array[i]);
  right = right.reverse();
  return left.concat(right);
}