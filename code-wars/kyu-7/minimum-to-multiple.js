/**
 *Given two integers a and x, return the minimum non-negative number to
 add to / subtract from a to make it a multiple of x.

minimum(10, 6)  //= 2
10+2 = 12 which is a multiple of 6

Note
0 is always a multiple of x

Constraints
1 <= a <= 10 ** 6
1 <= x <= 10 ** 5
 */

function minimum(a, x) {
  return (r = a % x) > x / 2 ? x - r : r;
}