/**
 * Triangular numbers are so called because of the equilateral
 * triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number.
You should return 0 for out of range values:

For example: (Input --> Output)
0 --> 0
2 --> 3
3 --> 6
-10 --> 0

 * @param {long} n
 * @return {long}
 * Examples:
 *   Triangular.triangular(2), 3
 *   Triangular.triangular(4), 10
 *   Triangular.triangular(1275), 813450
 *   Triangular.triangular(0), 0
 *   Triangular.triangular(-1), 0
 * Pseudocode:
 *   if input is greater than 1
 *     return result of Gauss' summation
 *   otherwise
 *     return 0
 */

public class Triangular {
  public static long triangular(long n) {
    if (n > 0) return n * ++n / 2;
    return 0;
  }
}