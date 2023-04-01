/*
Let us consider this example (array written in general format):
ls = [0, 1, 3, 6, 10]

Its following parts:
ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []

The corresponding sums are (put together in a list):
[20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages)
will take as parameter a list ls and return a list of the sums
of its parts as defined above.

Notes
Take a look at performance: some lists have thousands of elements.

Parameters: an array of nums
Returns: an array of nums
Examples:
  partsSums([]), [0]
  partsSums([0, 1, 3, 6, 10]), [20, 20, 19, 16, 10, 0]
  partsSums([1, 2, 3, 4, 5, 6]), [21, 20, 18, 15, 11, 6, 0]
  partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]),
    [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
Pseudocode:
  obtain sum of input values
  map over input array
  (add 0 to end to account for sum of none)
    decrement sum by previous value in array (or 0 if undefined)
    replace current value with current sum
  return mapped array
*/

function partsSums(ls) {
  let sum = ls.reduce((s, n) => s + n, 0);
  return [...ls, 0].map((n, i) => sum -= ls[--i] || 0);
}