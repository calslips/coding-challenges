/*
Parameters: a number
Returns: a number
Examples:
  getScore(1) // 50
  getScore(2) // 150
  getScore(3) // 300
  getScore(4) // 500
  getScore(5) // 750
Pseudocode:
  initialize result var assigned to an empty array
  create a loop
  start at 1, run while counter is less than input, increment count
    calculate 50 times current counter plus last value in result OR 0
    push calculated value to result
  return last value in result
*/

function getScore(n) {
  const result = [];
  for (let i = 1; i <= n; i++) result.push(50 * i + (result[result.length - 1] || 0));
  return result[n - 1];
}