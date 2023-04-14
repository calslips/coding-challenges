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

 *
 * @param {number} n
 * @return {number}
 *
 * Examples:
 *   triangular(2), 3
 *   triangular(4), 10
 *   triangular(-454), 0
 * Pseudocode:
 *   if input is greater than 0
 *     return result of Gauss' summation
 *   otherwise
 *     return 0
 */

const triangular = n => n > 0 ? n * ++n / 2 : 0;