/**
 * Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john'])
#=> { 'james': 2, 'john': 1}
 */

function count(array) {
  return array.reduce((c, e) => c[e] ? c[e]++ && c : {...c, [e]: 1}, {});
}

// function count(array) {
//   return array.reduce((c, e) => c[e] ? Object.assign(c, c[e]++) : Object.assign(c, {[e]: 1}), {});
// }

// function count(array) {
//   const count = {};
//   array.forEach(e => count[e] ? count[e]++ : count[e] = 1);
//   return count;
// }