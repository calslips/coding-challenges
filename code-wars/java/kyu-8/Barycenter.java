/*
The medians of a triangle are the segments that unit the vertices
with the midpoint of their opposite sides. The three medians of a
triangle intersect at the same point, called the barycenter or the
centroid. Given a triangle, defined by the cartesian coordinates
of its vertices we need to localize its barycenter or centroid.

The function bar_triang() or barTriang or bar-triang, receives the
coordinates of the three vertices A, B and C  as three different
arguments and outputs the coordinates of the barycenter O in an
array [xO, yO]

This is how our asked function should work: the result of the
coordinates should be expressed up to four decimals,
(rounded result).

You know that the coordinates of the barycenter are given by the
following formulas.

Xo = (Xa + Xb + Xc) / 3
Yo = (Ya + Yb + Yc) / 3

Let's see some cases:
barTriang([4, 6], [12, 4], [10, 10]) ------> {8.6667, 6.6667}
barTriang([4, 2], [12, 2], [6, 10]) ------> {7.3333, 4.6667}

The given points form a real or a degenerate triangle but in each
case the above formulas can be used.

Parameters: 3 double arrays
  each containing 2 doubles (x & y coords of points)
Returns:  a double array
  containing 2 doubles (x & y coord of barycenter of tri)
Examples:
  Barycenter.barTriang(new double[]{4,6}, new double[]{12,4}, new double[]{10,10}),
    [8.6667, 6.6667]
  Barycenter.barTriang(new double[]{4,2}, new double[]{12,2}, new double[]{6,10}),
    [7.3333, 4.6667]
Pseudocode:
  initialize double x var
  initialize double y var
  assign double x the result of adding all the x's of inputs (index 0) divided by 3
    rounded to 4 decimals
  assign double y the result of adding all the y's of inputs (index 1) divided by 3
    rounded to 4 decimals
  return new double array containing x and y
*/

class Barycenter {
  public static double[] barTriang(double[] a, double[] b, double[] c) {
    double x = Math.round((a[0] + b[0] + c[0]) / 3 * 10000) / 10000d;
    double y = Math.round((a[1] + b[1] + c[1]) / 3 * 10000) / 10000d;
    return new double[] {x, y};
  }
}