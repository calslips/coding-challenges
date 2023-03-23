/*
Write a function that takes a single array as an argument
(containing multiple strings and/or positive numbers and/or
arrays), and returns one of four possible string values,
depending on the ordering of the lengths of the elements in the
input array:

Your function should return...

“Increasing” -
  if the lengths of the elements increase from left to right
  (although it is possible that some neighbouring elements may
  also be equal in length)
“Decreasing” -
  if the lengths of the elements decrease from left to right
  (although it is possible that some neighbouring elements may
  also be equal in length)
“Unsorted” -
  if the lengths of the elements fluctuate from left to right
“Constant” -
  if all element's lengths are the same.

Numbers and Strings should be evaluated based on the number of
characters or digits used to write them.

Arrays should be evaluated based on the number of elements
counted directly in the parent array (but not the number of
elements contained in any sub-arrays).

Parameters: an array of values (strs, nums, arrays, etc.)
Returns: a str
  describing the input els order by length
  increasing, decreasing, unsorted, constant
Examples:
  orderType(["a", "b", "c"]), "Constant"
  orderType(["abcde", "abcd", "abc"]), "Decreasing"
  orderType([["yz"], ["uv", "wx"], ["ab","cdef", "g"], ["hi", "jk", "lmnopq"]]), "Increasing"
  orderType(["abc", "abcde", "c"]), "Unsorted"
  orderType([1, "b", ["p"], 2]), "Constant"
  orderType([123, 1234, 12345, 123456]), "Increasing"
  orderType(["a", "abc", "abcde", "ab"]), "Unsorted"
  orderType([[1, 2, 3, 4], [5, 6, 7], [8, 9]]), "Decreasing"
  orderType([1, 2, 3, 4, 56]), "Increasing"
  orderType([["ab", "cdef", "g"], ["hi", "jk", "lmnopq"], ["rst", "uv", "wx"], ["yz"]]), "Decreasing"
  orderType([[1, 23, 456, 78910], ["abcdef", "ghijklmno", "pqrstuvwxy"], [[1, 23, 456, 78910, ["abcdef", "ghijklmno", "pqrstuvwxy"]], 1234]]), "Decreasing"
Pseudocode:
  if all el lengths are the same
    return "Constant"
  if el lengths increase consistently
    return "Increasing"
  if el lengths decrease consistently
    return "Decreasing"
  otherwise
    return "Unsorted"
*/

function orderType(a) {
  if (a.every((e, i) => i ? (Array.isArray(e) ? e : `${e}`).length === (Array.isArray(a[--i]) ? a[i] : `${a[i]}`).length : !i)) return 'Constant';
  if (a.every((e, i) => i ? (Array.isArray(e) ? e : `${e}`).length >= (Array.isArray(a[--i]) ? a[i] : `${a[i]}`).length : !i)) return 'Increasing';
  if (a.every((e, i) => i ? (Array.isArray(e) ? e : `${e}`).length <= (Array.isArray(a[--i]) ? a[i] : `${a[i]}`).length : !i)) return 'Decreasing';
  return 'Unsorted';
}