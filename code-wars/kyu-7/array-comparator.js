/**
 *You have two arrays in this kata, every array contain only unique elements.
 Your task is to calculate number of elements in first array which also are in second array.
 */

function matchArrays(v, r) {
  return v.reduce((n, e) => r.includes(e) ? ++n : n, 0);
}