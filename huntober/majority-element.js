// Given an array nums of size n,
// return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// takes in an array of nums, always an array, always containing nums
// there will always be a num that has a frequency greater than half the array length
// return that num

// runtime beats 85.63%, memory beats 57.66%
const majorityElement = function(nums) {
  // initialize a hash
  // iterate over nums arr
    // if current num exists in hash
      // increment its value
    // otherwise
      // set its value to 1
    // if hash at num key is greater than half of nums length
      // return num

  const hash = {};
  for (const n of nums) {
    hash[n] = ++hash[n] || 1;
    if (hash[n] > nums.length / 2) return n;
  }
};

// Examples

// Input: nums = [3,2,3]
// Output: 3
console.log(majorityElement([3, 2, 3]), 3);

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);

// Input: nums = [1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1]
// Output: 1
console.log(majorityElement([1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1]), 1);