/*
Write a function bell that will receive a positive integer and return an array.
That's all splaining you receive; what needs to be done you'll have to figure
out with the examples below.

Parameters: a num
Returns: an array of nums
Examples:
  bell(1), [1]
  bell(2), [2, 2]
  bell(3), [3, 4, 3]
  bell(4), [4, 6, 6, 4]
  bell(5), [5, 8, 9, 5]
  bell(6), [6, 10, 12, 12, 10, 6]
  bell(7), [7, 12, 15, 16, 15, 12, 7]
  bell(8), [8, 14, 18, 20, 20, 18, 14, 8]
  bell(9), [9, 16, 21, 24, 25, 24, 21, 16, 9]
  bell(10), [10, 18, 24, 28, 30, 30, 28, 24, 18, 10]
  bell(11), [11, 20, 27, 32, 35, 36, 35, 32, 27, 20, 11]
  bell(12), [12, 22, 30, 36, 40, 42, 42, 40, 36, 30, 22, 12]
Pseudocode:
  initialize a sequence var assigned to an empty array
  create a loop to run half the input num times
  keep track of counter, current num and growth,
    current num will start as input num
    growth will start as input num - 2
  increment counter by 1, decrement growth by 2
    push current num to sequence array
    add growth to current num
  if input num is odd
    return sequence concatted with itself (last num removed) and reversed
  otherwise
    return sequence concatted with itself reversed
*/

function bell(n) {
  return Array(n).fill(n).reduce((s, e, i) => (s.push(i ? i < n / 2 ? s[i - 1] + e - i * 2 : s[n - i - 1] : e), s), []);
}

function bell(n) {
  const seq = [];
  for (let i = 0, curr = n, grow = n - 2; i < n / 2; i++, curr += grow, grow -= 2) seq.push(curr);
  return [...seq, ...(n % 2 ? seq.slice(0, -1) : seq).reverse()];
}