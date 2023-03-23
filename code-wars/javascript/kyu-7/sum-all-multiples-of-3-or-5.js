/**
 * Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
 */

function findSum(n) {
  return Array(n).fill(1).reduce((p, c, i) => (c + i) % 3 && (c + i) % 5 ? p : p + c + i, 0);
}

// function findSum(n) {
//   let sum = 0;
//   for (let i = 3; i <= n; i++) {
//     if (!(i % 3) || !(i % 5)) {
//       sum += i;
//     }
//   }
//   return sum;
// }