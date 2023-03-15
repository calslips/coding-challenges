/*
In this kata you will be given a list consisting of unique
elements except for one thing that appears twice.
Your task is to output a list of everything inbetween both
occurrences of this element in the list.

Notes
All elements will be the same datatype.
All used elements will be primitive.

Parameters: an array or str
Returns: an array or str
  the unique values of input array/str
  that are b/w a value that occurs twice
Examples:
  duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]), [2, 3, 4, 5, 6]
  duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"]), ["Hello", "Example", "hello"]
  duplicateSandwich([0, 0]), []
  duplicateSandwich( [true, false, true]), [false]
  duplicateSandwich("example"), "xampl"
Pseudocode:
  initialize a hash
    keys will be the values/chars
    value will be an array containing the indices of occurrences
  find the entry in hash with a value length greater than 1
  return input slice from entries 1st value + 1 to entries 2nd value

  initialize a map
    keys will be the values/chars
    value will be the count of occurrence
  find the entry in map with a value greater than 1
  slice input from 1st index of double + 1 to last index of double
  return sliced result
*/

function duplicateSandwich(a) {
  const hash = [...a].reduce((o, k, i) => (o[k]?.push(i) || (o[k] = [i]), o), {}),
        [i, j] = hash[Reflect.ownKeys(hash).find(k => hash[k].length > 1)];
  return a.slice(i + 1, j);
  // const hash = [...a].reduce((o, k, i) => (o[k]?.push(i) || (o[k] = [i]), o), {}),
  //       [i, j] = Object.values(hash).find(v => v.length > 1);
  // return a.slice(i + 1, j);
}

function duplicateSandwich(a) {
  const map = [...a].reduce((m, k, i) => (m.get(k)?.push(i) || m.set(k, [i]), m), new Map()),
        [i, j] = [...map.values()].find(v => v.length > 1);
  return a.slice(i + 1, j);
}

function duplicateSandwich(a) {
  const map = [...a].reduce((m, k) => (m.set(k, m.get(k) + 1 || 1), m), new Map()),
        dup = [...map.keys()].find(k => map.get(k) > 1);
  return a.slice(a.indexOf(dup) + 1, a.lastIndexOf(dup));
}