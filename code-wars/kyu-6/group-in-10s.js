/*
Write a function groupIn10s which takes any number of arguments,
groups them into tens, and sorts each group in ascending order.

The return value should be an array of arrays, so that numbers
between 0 and 9 inclusive are in position 0, numbers between 10
and 19 are in position 1, etc.

Here's an example of the required output:

const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50)

grouped[0]     // [3, 8]
grouped[1]     // [12, 17, 19]
grouped[2]     // [25]
grouped[3]     // [35, 38]
grouped[4]     // undefined
grouped[5]     // [50]

Parameters: numbers (any amount)
Returns: an array of arrays
  input numbers grouped by 10s
Examples:
  groupIn10s( 1,2,3 )
    // [ [ 1, 2, 3 ] ]
  groupIn10s( 8, 12, 38, 3, 17, 19, 25, 35, 50 )
    // [ [ 3, 8 ], [ 12, 17, 19 ], [ 25 ], [ 35, 38 ], , [ 50 ] ]
  groupIn10s( 12, 10, 11, 13, 25, 28, 29, 49, 51, 90 )
    // [  , [ 10, 11, 12, 13 ], [ 25, 28, 29 ], , [ 49 ], [ 51 ], , , , [ 90 ] ]
  groupIn10s()
    // []
  groupIn10s(100)
    // [  , , , , , , , , , , [ 100 ] ]
Pseudocode:
  initialize a result variable assigned to an array
    with indexes available up to the max 10s group plus 1
  iterate over the length of the result array
    filter the input array to get an array that only contains
      values equal to the counter when divided by ten rounded down
    if the filtered array contains elements
      sort the filtered array in ascending order and
      place group at the index that equals counter in result array
    otherwise continue
  return result array
*/

function groupIn10s(...nums) {
  if (!nums.length) return [];
  const result = Array(Math.max(...nums.map(n => Math.floor(n / 10))) + 1);
  for (let i = 0; i < result.length; i++) {
    const group = nums.filter(n => Math.floor(n / 10) === i);
    if (group.length) group.sort((a, b) => a - b), result[i] = group;
  }
  return result;
}