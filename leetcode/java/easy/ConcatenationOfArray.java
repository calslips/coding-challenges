package leetcode.java.easy;

/*
Given an integer array nums of length n,
you want to create an array ans of length 2n where
  ans[i] == nums[i]
and
  ans[i + n] == nums[i]
for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Constraints:
  n == nums.length
  1 <= n <= 1000
  1 <= nums[i] <= 1000

Parameters: an array of nums
Returns: an array of nums (input concatted with itself)
Examples:
    Input: nums = [1,2,1]
    Output: [1,2,1,1,2,1]
    Explanation: The array ans is formed as follows:
    - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
    - ans = [1,2,1,1,2,1]

    Input: nums = [1,3,2,1]
    Output: [1,3,2,1,1,3,2,1]
    Explanation: The array ans is formed as follows:
    - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
    - ans = [1,3,2,1,1,3,2,1]
Pseudocode:
    initialize ans var as an int array double the input size
    create a loop to run the length of ans array
    keep track of ans index & input index
    increment ans index each loop
    increment input index each loop (keep within original range)
        assign ans at ans index to input at input index
    return ans
*/

// runtime 1 ms beats 92.3%, memory 44.19 mb beats 86.45%
class ConcatenationOfArraySolution1 {
    public int[] getConcatenation(int[] nums) {
        int[] ans = new int[nums.length * 2];
        for (int i = 0, j = 0; i < ans.length; i++, j %= nums.length) ans[i] = nums[j++];
        return ans;
    }
}

// runtime 1 ms beats 92.3%, memory 44.08 mb beats 88.80%
class ConcatenationOfArraySolution2 {
    public int[] getConcatenation(int[] nums) {
        int[] ans = new int[nums.length * 2];
        for (int i = 0; i < nums.length; i++) ans[i] = ans[i + nums.length] = nums[i];
        return ans;
    }
}