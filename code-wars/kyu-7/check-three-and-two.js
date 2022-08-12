/**
 *Given an array with exactly 5 strings "a", "b" or "c"
 (chars in Java, characters in Fortran),
 check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
 */

function checkThreeAndTwo(array) {
  return v = Object.values(array.reduce((o, k) => (o[k] = ++o[k] || 1, o), {})), v.includes(3) && v.includes(2);
}