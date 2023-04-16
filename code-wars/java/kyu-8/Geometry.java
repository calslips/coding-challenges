/*
Complete the function that calculates the area of the red square,
when the length of the circular arc A is given as the input.
Return the result rounded to two decimals.

Note:
use the π value provided in your language
(Math::PI, M_PI, math.pi, etc)

Parameters: a double (arc length)
Returns: a double
Examples:
  Geometry.squareArea(2), 1.62
  Geometry.squareArea(0), 0
  Geometry.squareArea(14.05), 80
Pseudocode:
  obtain radius through circumference / 2π
    (circumference is input double * 4)
  square radius to get area of square
    (radius equals one side of square)
  round area to 2 decimals
  return rounded area
*/

public class Geometry {
  public static double squareArea(double A) {
    return Math.round(Math.pow(A * 4 / (2 * Math.PI), 2) * 100) / 100.0;
  }
}

// public class Geometry {
//   public static double squareArea(double A) {
//     double circumference = A * 4;
//     double radius = circumference / (2 * Math.PI);
//     double area = Math.pow(radius, 2);
//     return Math.round(area * 100) / 100.0;
//   }
// }