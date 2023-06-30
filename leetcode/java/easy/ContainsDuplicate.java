package leetcode.java.easy;

/*
Given an integer array nums, return true if any value appears
at least twice in the array, and return false if every element
is distinct.

Parameters: an array of ints
Return: a boolean
Examples:
    Input: nums = [1,2,3,1]
    Output: true

    Input: nums = [1,2,3,4]
    Output: false

    Input: nums = [1,1,1,3,3,4,3,2,4,2]
    Output: true
Pseudocode:
    initialize a set
    iterate over input array
        if set contains current num
            return true
        otherwise
            add current num to set
    return false
*/

import java.util.Set;
import java.util.HashSet;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> nonDupes = new HashSet<>();
        for (int num : nums) {
            if (nonDupes.contains(num)) return true;
            else nonDupes.add(num);
        }
        return false;
    }
}