/*
An array is said to be hollow if it contains 3 or more 0s in the middle
that are preceded and followed by the same number of non-zero elements.
Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts an integer
array and returns true if it is a hollow array,else false.

Parameters: an array
Returns: a boolean
  whether or not the input array is hollow
Examples:
  isHollow([-1,0,0,0,3]) // true
  isHollow([1,0,0,0,0]) // false
  isHollow([100,0,0,3]) // false
Pseudocode:
  isolate the 0s
  check if the length of 0s is less than 3
    if so
      return false
  check if the portion before the 0s length is NOT equal to the portion after
    if so
      return false
  return result of checking if every element in 0s portion is actually 0
*/

// function isHollow(x) {
//   const [h, t, z] = [x.slice(0, f = x.indexOf(0)), x.slice(b = x.lastIndexOf(0) + 1), x.slice(f, b)];
//   return z.length >= 3 && h.length === t.length && z.every(e => !e);
// }

function isHollow(x) {
  const [head, tail, zeros] = [x.slice(0, h = x.indexOf(0)), x.slice(t = x.lastIndexOf(0) + 1), x.slice(h, t)];
  return zeros.length >= 3 && head.length === tail.length && zeros.every(e => !e);
}

// function isHollow(x) {
//   const [head, tail, zeros] = [x.slice(0, x.indexOf(0)), x.slice(x.lastIndexOf(0) + 1), x.slice(x.indexOf(0), x.lastIndexOf(0) + 1)];
//   return zeros.length >= 3 && head.length === tail.length && zeros.every(e => !e);
// }

// function isHollow(x) {
//   const head = x.slice(0, x.indexOf(0));
//   const tail = x.slice(x.lastIndexOf(0) + 1);
//   const zeros = x.slice(head.length, -tail.length || x.length);
//   return zeros.length >= 3 && head.length === tail.length && zeros.every(e => !e);
// }

// function isHollow(x) {
//   const head = x.slice(0, x.indexOf(0));
//   const tail = x.slice(x.lastIndexOf(0) + 1);
//   const zeros = x.slice(head.length, -tail.length || x.length);
//   if (zeros.length < 3) return false;
//   if (head.length !== tail.length) return false;
//   return zeros.every(e => !e);
// }