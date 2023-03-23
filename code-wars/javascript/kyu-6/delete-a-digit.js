/**
 * Given an integer n, find the maximal number you can obtain by deleting
 * exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output
[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer
 */

function deleteDigit(n) {
  let max = 0;
  for (let i = 0; i < n.toString().length; i++) {
    const nArr = n.toString().split('');
    nArr.splice(i, 1);
    const deleted = +nArr.join('');
    if (deleted > max) max = deleted;
  }
  return max;
}

// function deleteDigit(n) {
//   return Math.max(...Array.from(n.toString(), (_, i) => n.toString().slice(0, i) + n.toString().slice(i + 1)));
// }