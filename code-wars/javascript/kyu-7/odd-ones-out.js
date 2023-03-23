/*
The town sheriff dislikes odd numbers and wants all odd numbered families
out of town! In town crowds can form and individuals are often mixed with
other people and families. However you can distinguish the family they
belong to by the number on the shirts they wear. As the sheriff's assistant
it's your job to find all the odd numbered families and remove them from
the town!

Challenge: You are given a list of numbers. The numbers each repeat a
certain number of times. Remove all numbers that repeat an odd number of
times while keeping everything else the same.

oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
In the above example:
the number 1 appears twice
the number 2 appears once
the number 3 appears three times
2 and 3 both appear an odd number of times, so they are removed from the
list. The final result is: [1,1]

Here are more examples:
oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
oddOnesOut([1, 2, 3]) = []
oddOnesOut([1]) = []

Parameters: an array of numbers
Returns: the input array only containing the numbers
  that appeared an even number of times.
  (maintain the original order of appearance)
Examples:
  oddOnesOut([1, 2, 3, 1, 3, 3])
    // [1, 1]
  oddOnesOut([75, 68, 75, 47, 68])
    // [75, 68, 75, 68]
  oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67])
    // [67, 67]
  oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100])
    // [100, 100, 100, 100]
  oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50])
    // [44, 79, 50, 44, 79, 50]
Pseudocode:
  initialize an object to keep track of the count of nums in the array
  iterate over the input array
    if there is no property in the object whose key equals current element
      create a prop in obj where key = element and value = 1
    if a property exists in the obj whose key equals current element
      increment the value by 1
  iterate over the input array
    if the obj at current elements value is odd
      filter it out
    if the obj at current elements value is even
      keep it in
  return filtered array
*/

function oddOnesOut(nums) {
  return (c = nums.reduce((o, k) => (o[k] = ++o[k] || 1, o), {})), nums.filter(n => !(c[n] % 2));
}