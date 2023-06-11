/*
You are given an array that of arbitrary depth that needs to be nearly flattened
into a 2 dimensional array. The given array's depth is also non-uniform, so some
parts may be deeper than others.

All of lowest level arrays (most deeply nested) will contain only integers and
none of the higher level arrays will contain anything but other arrays. All
arrays given will be at least 2 dimensional. All lowest level arrays will contain
at least one element.

Your solution should be an array containing all of the lowest level arrays and
only these. The sub-arrays should be ordered by the smallest element within each,
so [1,2] should preceed [3,4,5]. Note: integers will not be repeated.

For example:
If you receive [[[1,2,3],[4,5]],[6,7]], your answer should be [[1,2,3],[4,5],[6,7]].

Parameters: a nested array
Returns: a 2d array sorted asc
Examples:
  nearFlatten([[1]]), [[1]]
  nearFlatten([[1,2,3,4]]), [[1,2,3,4]]
  nearFlatten([[1,2,3],[[4,5],[6,7,8]]]), [[1,2,3],[4,5],[6,7,8]]
  nearFlatten([[[1,2,3],[9,10]],[[4,5],[6,7,8]]]), [[1,2,3],[4,5],[6,7,8],[9,10]]
Pseudocode:
  iterate over the input array
    if current el contains an array
      flatten nested array
  sort 2d array asc by lowest num contained
  return sorted 2d array
*/

function nearFlatten(nested) {
  return nested
    .reduce((f, e) => (isNaN(e[0]) ? f.push(...nearFlatten(e)) : f.push(e), f), [])
    .sort((a, b) => a[0] - b[0]);
}