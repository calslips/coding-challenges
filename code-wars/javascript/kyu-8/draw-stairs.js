/**
 * Given a number n, draw stairs using the letter "I", n tall and n wide,
 * with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
 */

function drawStairs(n) {
  return Array.from({length: n}, (_, i) => 'I'.padStart(i + 1)).join('\n');
}

// function drawStairs(n) {
//   let stairs = '';
//   for (let i = 1; i <= n; i++) {
//     if (i === n) {
//       stairs += 'I'.padStart(i, ' ');  // by default, second param is a space; unnecessary to specify
//     } else {
//       stairs += 'I\n'.padStart(i + 1, ' ');  // by default, second param is a space; unnecessary to specify
//     }
//   }
//   return stairs;
// }