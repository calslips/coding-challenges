/*
Given a point in a Euclidean plane (x and y), return the quadrant
the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero
integers, therefore the given point never lies on the axes.

Examples
(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4

There are four quadrants:

First quadrant, the quadrant in the top-right,
  contains all points with positive X and Y
Second quadrant, the quadrant in the top-left,
  contains all points with negative X, but positive Y
Third quadrant, the quadrant in the bottom-left,
  contains all points with negative X and Y
Fourth quadrant, the quadrant in the bottom-right,
  contains all points with positive X, but negative Y

Parameters: 2 ints
  (x & y coords, never 0)
Returns: an int
  (1-4, quadrant where coords are located)
Examples:
  Quadrant.quadrant(1, 2), 1
  Quadrant.quadrant(3, 5), 1
  Quadrant.quadrant(-10, 100), 2
  Quadrant.quadrant(-1, =9), 3
  Quadrant.quadrant(19, -56), 4
Pseudocode:
  if both x and y coords are positive
    return 1
  if x is negative and y is positive
    return 2
  if both x and y coords are negative
    return 3
  if x is positive and y is negative
    return 4
*/

public class Quadrants {
  public static int quadrant(int x, int y) {
    return x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : 4;
  }
}