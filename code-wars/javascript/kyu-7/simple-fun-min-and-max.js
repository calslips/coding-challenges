/*
You are given three integers l, d and x. Your task is:
• determine the minimal integer n
    such that l ≤ n ≤ d, and the sum of its digits equals x.
• determine the maximal integer m
    such that l ≤ m ≤ d, and the sum of its digits equals x.
It is guaranteed that such numbers always exist.

Input/Output
[input] integer l
[input] integer d
  1 ≤ l ≤ d ≤ 10000.
[input] integer x
  1 ≤ x ≤ 36
[output] an integer array
  Array of two elements,
  where the first element is n, and the second one is m.

Parameters: 3 nums
Returns: a tuple of nums
  min & max of nums between l & d
  whose digits sum to x
Examples:
  minAndMax( 500,505,10), [505, 505]
  minAndMax(100,200,10), [109, 190]
  minAndMax(123,456,5), [131, 410])
  minAndMax(99,501,5), [104, 500]
  minAndMax(99,234,1), [100, 100]
  minAndMax(99,234,19), [199, 199]
  minAndMax(99,5001,27), [999, 4995]
  minAndMax(99,5001,28), [1999, 4996]
  minAndMax(2000,7000,3), [2001, 3000]
Pseudocode:
  initialize min and max vars as null
  create a loop to run from l to d until min is found
    if digits of current num equal x
      set to min
    break out of loop
  create a loop to run from d to min until max is found
    if digits of current num equal x
      set to max
    break out of loop
  return min and max nested in an array
*/

function minAndMax(l, d, x) {
  const nums = Array(d - l + 1).fill().map((_, i) => i + l).filter(n => [...`${n}`].reduce((s, d) => s + +d, 0) === x);
  return [Math.min(...nums), Math.max(...nums)];
}

function minAndMax(l, d, x) {
  const nums = Array(d - l + 1).fill().reduce((a, _, i) => ([...`${i + l}`].reduce((s, n) => s + +n, 0) === x && a.push(i + l), a), []);
  return [Math.min(...nums), Math.max(...nums)];
}