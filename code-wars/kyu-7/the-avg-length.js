/*
Given an array of strings of the same letter type.
Return a new array, which will differ in that the length of
each element is equal to the average length of the elements
of the previous array.

If the average length is not an integer, use Math.round().
The input array's length > 1

Parameters: an array of strings
  (each element of varying length)
Returns: an array of strings
  (all elements made to be the same length,
  the average length from input array)
Examples:
  averageLength(['u', 'y']) // ['u', 'y']
  averageLength(['aa', 'bbb', 'cccc']) // ['aaa', 'bbb', 'ccc']
  averageLength(['aa', 'bb', 'ddd', 'eee']) // ['aaa', 'bbb', 'ddd', 'eee']
Pseudocode:
  get the average length of els from input array
    reduce input to a sum of all el lengths
    divide sum by input array length for avg
    & round
  map over input array
    for each el, repeat char at 0 index avg times & return
  return mapped array
*/

function averageLength(a) {
  const avg = Math.round(a.reduce((s, e) => s + e.length, 0) / a.length);
  return a.map(e => e[0].repeat(avg));
}