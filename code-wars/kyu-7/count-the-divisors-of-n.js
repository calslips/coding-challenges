/**
 * Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
 */

function getDivisorsCnt(n) {
  return Array(n).fill(1).reduce((c, e, i) => n % (e + i) ? c : ++c, 0)
}