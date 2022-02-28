/**
 * Mash 2 arrays together so that the returning array has alternating
 * elements of the 2 arrays . Both arrays will always be the same length.

eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
 */

function arrayMash (array1, array2) {
  return array1.reduce((p, c, i) => p.concat(c, array2[i]), []);
}