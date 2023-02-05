/*
Given a two dimensional array, return the co-ordinates of x.

If x is not inside the array, or if x appears multiple times,
return [].

The co-ordinates should be zero indexed in row-major order.
You should assume you will always get an array as input.
The array will only contain 'x's and 'o's.

Parameters: an array
  2d array (matrix) containing o's / x's
  or an empty array
Returns: an array
  an empty array
    if input is an empty array, contains no x's or more than 1
  an array containing 2 nums
    the coords for the singular x
Examples:
  xMarksTheSpot([]), []
  xMarksTheSpot([['o', 'o'], ['o', 'o']]), []
  xMarksTheSpot([['x', 'o'], ['o', 'x']]), []
  xMarksTheSpot([['x', 'o'], ['o', 'o']]), [0, 0]

  const input = [
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
  ];
  xMarksTheSpot(input), [4, 6]
Pseudocode:
*/

const xMarksTheSpot = input => {
  const coords = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (coords.length && input[i][j] === 'x') return [];
      else if (input[i][j] === 'x') coords.push(i, j);
    }
  }
  return coords;
}