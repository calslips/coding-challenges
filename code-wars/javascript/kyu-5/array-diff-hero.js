/*
You know about simple Array.diff task.
Now try to solve enhanced version!

Your goal in this kata is to implement a difference function,
which subtracts one list from another.

It should remove all values from list a,
which are present in list b.
Each element x in both arrays is integer and 0 ≤ x ≤ 25.
And lengths of arrays can reach 5 000 000 elements.

arrayDiffVeryFast([1,2],[1]) == [2]

If a value is present in b,
all of its occurrences must be removed from another:

arrayDiffVeryFast([1,2,2,2,3],[2]) == [1,3]

Parameters: 2 arrays of nums
Returns: an array of nums
Examples:
  arrayDiffVeryFast([1,2,2,2,3], [2]),
    [1,3]
  arrayDiffVeryFast([1,2,2,2,3,5,5,1,2,4,5,1], [2,1,5]),
    [3,4]
Pseudocode:
  create a set for array b
  call filter on array a
    if b does NOT have current element
      retain it
  return filtered array a
*/

function arrayDiffVeryFast(a, b) {
  const bSet = new Set(b);
  return a.filter(e => !bSet.has(e));
}