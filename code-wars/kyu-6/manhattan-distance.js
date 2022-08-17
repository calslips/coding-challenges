/*
The distance formula can be used to find the distance between two points.
What if we were trying to walk from point A to point B, but there were
buildings in the way? We would need some other formula..but which?

Manhattan Distance
Manhattan distance is the distance between two points in a grid (like the
  grid-like street geography of the New York borough of Manhattan)
  calculated by only taking a vertical and/or horizontal path.

Complete the function that accepts two points and returns the Manhattan
Distance between the two points.

The points are arrays or tuples containing the x and y coordinate in the grid.
You can think of x as the row in the grid, and y as the column.

Parameters: two arrays (tuples)
  each containing 2 numbers (grid coordinates)
Returns: a single number
  the amount of blocks between the two input points
  (horizontal (x) & vertical (y) movement only, not diagonal)
Examples:
  manhattanDistance([1,1],[1,1]) // 0
  manhattanDistance([5,4],[3,2]) // 4
  manhattanDistance([1,1],[0,3]) // 3
Pseudocode:
  find the absolute value of the difference between
    two respective points (x1 - x2, y1 - y2)
  add the two differences together
  return the sum
*/

function manhattanDistance(pointA, pointB) {
  return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}