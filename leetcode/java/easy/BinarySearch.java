package leetcode.java.easy;

/*
Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Parameters:
  an array of ints
  an int
Returns: an int
Examples:
  Input: nums = [-1,0,3,5,9,12], target = 9
  Output: 4
  Explanation: 9 exists in nums and its index is 4

  Input: nums = [-1,0,3,5,9,12], target = 2
  Output: -1
  Explanation: 2 does not exist in nums so return -1
Pseudocode:
  initialize int var start as 0
  initialize int var end as last index of nums array
  initialize int var mid as the index between start and end
  create a loop to run as long as start does not pass end
  after each iteration reassign mid to equal index between start and end
    if value at mid index of nums array equals target
      return mid
    if value at mid index of nums array is less than target
      reassign start to equal mid plus 1
    otherwise if value at mid index of nums array is greater than target
      reassign end to equal mid minus 1
  return -1 (if target does not exist in nums)
*/

// runtime 0 ms beats 100%, memory 45 mb beats 36.48%
class BinarySearchSolution {
  public int search(int[] nums, int target) {
      for (int s = 0, e = nums.length - 1, m = (s + e) / 2; s <= e; m = (s + e) / 2) {
          if (nums[m] == target) return m;
          if (nums[m] < target) s = m + 1;
          else if (nums[m] > target) e = m - 1;
      }
      return -1;
  }
}