package leetcode.java.easy;

/*
Given an array of integers nums and an integer target, return
indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

You can return the answer in any order.

Parameters:
  an array of ints
  an int
Returns:
  an array of ints
Examples:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  Input: nums = [3,2,4], target = 6
  Output: [1,2]

  Input: nums = [3,3], target = 6
  Output: [0,1]
Pseudocode:
  initialize a map to keep track of
    nums as keys and their index within input array as values
  initialize an indices array of size 2
    to contain indices of numbers that sum to input target
  iterate over the length of the input array
    if map contains key that equals diff b/w target and current num
      assign indices at index 0 to value found at diff key in map
      assign indices at index 1 to current index
      break
    otherwise
      add current num as key to map and current index as value
  return indices array
*/

import java.util.Map;
import java.util.HashMap;

class TwoSumSolution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        int[] indices = new int[2];
        for (int i = 0; i < nums.length; i++) {
            if (numMap.containsKey(target - nums[i])) {
                indices[0] = numMap.get(target - nums[i]);
                indices[1] = i;
                break;
            }
            numMap.put(nums[i], i);
        }
        return indices;
    }
}