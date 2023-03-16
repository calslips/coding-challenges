/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 */

// runtime beats 68.49%, memory beats 7.62%
var search = function(nums, target) {
  // create a loop, follow start, mid, end indexes
  // continue loop while start is less than end
      // if value at mid index is target
          // return mid
      // if value at mid is less than target
          // reassign start to mid + 1
          // reassign mid to be value b/w start and end rounded
      // if value at mid is greater than target
          // reassign end to be mid - 1
          // reassign mid to be value b/w start and end rounded
  // return -1

  for (let s = 0, e = nums.length - 1, m = Math.ceil((s + e) / 2); s <= e; m = Math.ceil((s + e) / 2)) {
      if (nums[m] < target) s = ++m;
      else if (nums[m] > target) e = --m;
      else return m;
  }
  return -1;
};