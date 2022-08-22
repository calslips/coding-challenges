/**
 * Should be easy, begin by looking at the code.
 * Debug the code and the functions should work.

There are three functions:
Multiplication (x) Addition (+) and Reverse (!esreveR)
 */

function multi(arr) {
  return arr.reduce((p, n) => p * n);
}
function add(arr) {
  return arr.reduce((s, n) => s + n);
}
function reverse(str) {
  return [...str].reverse().join('');
}