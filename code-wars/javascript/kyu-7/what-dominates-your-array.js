/*
A zero-indexed array arr consisting of n integers is given.
The dominator of array arr is the value that occurs in more than
half of the elements of arr.

For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements
of arr and 5 is more than a half of 8.

Write a function dominator(arr) that, given a zero-indexed array
arr consisting of n integers, returns the dominator of arr.
The function should return −1 if array does not have a dominator.
All values in arr will be >=0.

Parameters: an array of nums
Returns: a num
Examples:
  dominator([3,4,3,2,3,1,3,3]), 3
  dominator([1,2,3,4,5]), -1
  dominator([1,1,1,2,2,2]), -1
  dominator([1,1,1,2,2,2,2]), 2
Pseudocode:
  convert input to a hash
    keys are nums, values are their count in array
  convert hash to an array of keys
  find key that has a value greater than half of array length
  return key converted to num OR -1
*/

function dominator(arr) {
  const hash = arr.reduce((o, k) => (o[k] = ++o[k] || 1, o), {});
  return +Object.keys(hash).find(k => hash[k] > arr.length / 2) || -1;
}

function dominator(arr) {
  let dom = -1;
  const hash = {};
  for (const num of arr) {
    hash[num] = ++hash[num] || 1;
    if (hash[num] > arr.length / 2) {
      dom = num;
      break;
    }
  }
  return dom;
}