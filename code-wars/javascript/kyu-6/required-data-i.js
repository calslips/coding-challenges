/*
We need a function count_sel() that receives an array or list of
integers (positive and negative) and may give us the following
information in the order and structure presented bellow:

[(1), (2), (3), [[(4)], 5]]

(1) - Total amount of received integers.

(2) - Total amount of different values the array has.

(3) - Total amount of values that occur only once.

(4) and (5) both in a list

(4) - It is (or they are) the element(s) that has (or have) the
  maximum occurrence. If there are more than one, the elements
  should be sorted (by their value obviously)

(5) - Maximum occurrence of the integer(s)

Let's see some cases

____ count_sel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5])
         ----> [10, 7, 5, [[-5], 3]]

(1) - The list has ten elements (10 numbers)

(2) - We have seven different values: -5, -3, -2, -1, 3, 4, 5 (7 values)

(3) - The numbers that occur only once: -3, -2, 3, 4, 5 (5 values)

(4) and (5) - The number -5 occurs three times (3 occurrences)

____ count_sel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5])
         ----> [14, 8, 4, [[2, 4], 3]]

Parameters: an array of nums
Returns: an array
  containing nums
  (input nums count, unique count, single occurrence count),
  a sub array
    containing a subarray of num(s)
    (max freq num(s), sorted by value),
    a num
    (max freq count)
Examples:
  countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]), [10, 7, 5, [[-5], 3]]
  countSel([5, -1, 1, -1, -2, 5, 0, -2, -5, 3]), [10, 7, 4, [[-2, -1, 5], 2]]
  countSel([-2, 4, 4, -2, -2, -1, 3, 5, -5, 5]), [10, 6, 3, [[-2], 3]]
  countSel([4, -5, 1, -5, 2, 4, -1, 4, -1, 1]), [10, 5, 1, [[4], 3]]
  countSel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5]), [14, 8, 4, [[2, 4], 3]]
Pseudocode:
  initialize cache assigned to map
  initialize total var assigned to input length
  initialize unique var assigned to input converted to set, access size
  initialize single var assigned to 0
  initialize max freq var assigned to 0
  initialize most freq var assigned to an empty array
  iterate over input array
    if current num exists as key in cache
      increment value
    otherwise
      set num as key in cache with value of 1
  iterate over the keys of cache
    if value is 1
      increment single var
  reassign max freq to equal max value within cache
  iterate over the keys of cache
    if value matches max freq
      push key to most freq array
  return an array containing total, unique, single,
    subarray containing most freq, max freq
*/

function countSel(lst) {
  const cache = lst.reduce((o, k) => (o[k] = ++o[k] || 1, o), {}),
        total = lst.length,
        unique = new Set(lst).size,
        single = Object.keys(cache).filter(k => cache[k] === 1).length,
        maxFreq = Object.values(cache).reduce((m, n) => n > m ? n : m),
        mostFreq = Object.keys(cache).filter(k => cache[k] === maxFreq).map(Number).sort((a, b) => a - b);
  return [total, unique, single, [mostFreq, maxFreq]];
}