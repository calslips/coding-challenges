/*
Let's call product(x) the product of x's digits. Given an array
of integers a, calculate product(x) for each x in a, and return
the number of distinct results you get.

Example
For a = [2, 8, 121, 42, 222, 23], the output should be 3.

Here are the products of the array's elements:

  2:   product(2)               = 2;
  8:   product(8)               = 8;
  121: product(121) = 1 * 2 * 1 = 2;
  42:  product(42)  = 4 * 2     = 8;
  222: product(222) = 2 * 2 * 2 = 8;
  23:  product(23)  = 2 * 3     = 6.

As you can see, there are only 3 different products:
  2, 6 and 8.

Input/Output
[input] integer array a

Constraints:

1 ≤ a.length ≤ 10000,

1 ≤ a[i] ≤ 1000000000.

[output] an integer

The number of different digit products in a.

Parameters: an array of nums
Returns: a num
Examples:
  uniqueDigitProducts([2, 8, 121, 42, 222, 23]), 3
  uniqueDigitProducts([239]), 1
  uniqueDigitProducts([100, 101, 111]), 2
  uniqueDigitProducts([100, 23, 42, 239, 22339, 9999999, 456, 78, 228, 1488]), 10
  uniqueDigitProducts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10
Pseudocode:
  map over input array
    convert each el to the product of its digits
  convert mapped array into a set
  return set size
*/

function uniqueDigitProducts(a) {
  return new Set(a.map(n => [...`${n}`].reduce((p, d) => p * d, 1))).size;
}