/*
Given a sorted array of numbers, return the summary of its ranges.

Parameters: an array of nums
Returns: an array of strs
Examples:
  summaryRanges([]),[]);
  summaryRanges([1,1,1,1]), ['1']
  summaryRanges([1,2,3,4]), ['1->4']
  summaryRanges([0, 1, 2, 5, 6, 9]), ["0->2", "5->6", "9"]
  summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]), ["0->7"]
  summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7]), ["0->7"]
  summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]), ["0->7","9->10"]
  summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]), ["-2", "0->7", "9->10", "12"]
Pseudocode:
  initialize a ranges var assigned to an empty array
  initialize a start and current var assigned to the 1st val of input array
  iterate over the input array
    if next val is equal to current or greater by 1
      reassign current to equal next val
    otherwise
      if start equals current
        push start val as str to ranges
      otherwise
        format start and current into a str with an arrow b/w
        push formatted str to ranges
      reassign start and current to equal next val
  return ranges array
*/

function summaryRanges(nums) {
  const ranges = [];
  for (let i = 0, start = nums[i], current = nums[i]; i < nums.length; i++) {
    if (nums[i + 1] - current > 1 || i === nums.length - 1) {
      if (start === current) ranges.push(`${start}`);
      else ranges.push(`${start}->${current}`);
      start = nums[i + 1];
    }
    current = nums[i + 1];
  }
  return ranges;
}