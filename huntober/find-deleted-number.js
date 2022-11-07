// An ordered sequence of numbers from 1 to N is given.
// One number might have deleted from it,
// then the remaining numbers were mixed.
// Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it,
// your function should return the int 0.
// Note: N may be 1 or less (in the latter case, the first array will be []).

// takes in 2 arrays, one sorted, the other jumbled
// the second contains the same values as the 1st, except 1 has been removed
// return that missing value, if none are missing return 0?
// will there always be arrays passed in? never undefined?
// will the arrays always contain values? never empty?
// 2nd array always only missing 1 value or none? never 2+?

// quadratic, 77% slower
// function findDeletedNumber(a1, a2) {
//   return a1.find(e => !a2.includes(e)) || 0;
// }

// n (n log)?, 97% slower
// function findDeletedNumber(a1, a2) {
//   a2.sort((a, b) => a - b); // n log
//   return a1.find((e, i) => e !== a2[i]) || 0; // n
// }

// linear, fastest
function findDeletedNumber(a1, a2) {
  return a1.reduce((s, n) => s + n, 0) - a2.reduce((s, n) => s + n, 0);
}

// linear? with hash, 98% slower (slowest) ???
// function findDeletedNumber(a1, a2) {
//   const hash = [...a1, ...a2].reduce((o, k) => (o[k] = ++o[k] || 1, o), {});
//   return +Object.keys(hash).find(k => hash[k] === 1) || 0;
// }

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')