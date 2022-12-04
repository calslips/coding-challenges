/*
Given three arrays of integers, return the sum of elements
that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5
  because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7
  because 2,2 & 3 are common in the 3 arrays

Parameters:
  3 arrays of numbers
Returns:
  sum of numbers that appear in all 3 input arrays
Examples:
  common([1,2,3],[5,3,2],[7,3,2]) // 5
  common([1,2,2,3],[5,3,2,2],[7,3,2,2]) // 7
Pseudocode:
  filter common elements between 1st and 2nd array
    chain another filter to compare elements in previous result with 3rd array
  reduce the last filtered array
    summing all elements
  return sum

  convert each input array into a map
    each key is the num and the value is the times seen
  initialize sum var assigned to 0
  iterate over the keys of map of a
    multiply current key by (value of key in map of b OR 0 + value of key in map of c OR 0)
    add above to sum
  return sum
*/

function common(a,b,c) {
  let maps = [new Map(), new Map(), new Map()], sum = 0;
  maps.forEach((m, i) => arguments[i].forEach(n => maps[i].has(n) ? maps[i].set(n, maps[i].get(n) + 1) : maps[i].set(n, 1)));
  maps[0].forEach((v, k) => sum += k * Math.min(v, maps[1].get(k) || 0, maps[2].get(k) || 0));
  return sum;
}

function common(a,b,c) {
  let maps = Array.from(Array(3), () => new Map()), sum = 0;
  maps.forEach((m, i) => arguments[i].forEach(n => maps[i].has(n) ? maps[i].set(n, maps[i].get(n) + 1) : maps[i].set(n, 1)));
  maps[0].forEach((v, k) => sum += k * Math.min(v, maps[1].get(k) || 0, maps[2].get(k) || 0));
  return sum;
}

function common(a,b,c) {
  const mapA = new Map(), mapB = new Map(), mapC = new Map();
  a.forEach(n => mapA.has(n) ? mapA.set(n, mapA.get(n) + 1) : mapA.set(n, 1));
  b.forEach(n => mapB.has(n) ? mapB.set(n, mapB.get(n) + 1) : mapB.set(n, 1));
  c.forEach(n => mapC.has(n) ? mapC.set(n, mapC.get(n) + 1) : mapC.set(n, 1));
  let sum = 0;
  mapA.forEach((v, k) => sum += k * Math.min(v, mapB.get(k) || 0, mapC.get(k) || 0));
  return sum;
}