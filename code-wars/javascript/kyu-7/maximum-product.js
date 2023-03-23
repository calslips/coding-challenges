/**
 * Given an array of integers , Find the maximum product obtained from
 * multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6,
and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10 = 50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14,
and they're adjacent numbers in the array.


Parameters: an array of numbers (+, -, 0), min length of 2,
Return: the highest product of 2 adjacent numbers in the array
Examples:
  adjacentElementsProduct([3, 6]) // 18
  adjacentElementsProduct([3, 6, 9]) // 54
  adjacentElementsProduct([0, 3, 4, 6, -11]) // 24
Pseudocode:
  iterate over input array using reduce
    if there is a next element
      add product of current element times next element to accumulator array
    otherwise
      keep accumulator array as is
  find max value within reduced array and return it
 */

function adjacentElementsProduct(a) {
  return Math.max(...a.reduce((p, n, i) => a[i + 1] ? p.concat(n * a[i + 1]) : p, []));
}
