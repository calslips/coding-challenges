/*
An element in an array is dominant if it is greater than all
elements to its right. You will be given an array and your task
will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5]
  because 21, 7 and 5 are greater than elments to their right.

solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included.
All numbers will be greater than 0.

Parameters: an array of nums
Returns: an array of nums
Examples:
  solve([16,17,14,3,14,5,2]), [17,14,5,2]
  solve([92,52,93,31,89,87,77,105]), [105]
  solve([75,47,42,56,13,55]), [75,56,55]
  solve([67,54,27,85,66,88,31,24,49]), [88,49]
  solve([76,17,25,36,29]), [76,36,29]
  solve([104,18,37,9,36,47,28]), [104,47,28]
Pseudocode:
  initialize a result var assigned to an empty array
  iterate over the input array
    if current num is greater than all nums that come after it
      push current num to result array
  return result array
*/

function solve(arr) {
  return arr.reduce((d, n, i) => (arr.slice(++i).every(e => n > e) && d.push(n), d), []);
}