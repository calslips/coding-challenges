/*
Your task is to find the next higher number (int) with same '1'- Bits.

I.e. as much 1 bits as before and output next higher than input.
Input is always an int in between 1 and 1<<30 (inclusive).
No bad cases or special tricks...

Some easy examples:
Input: 129  => Output: 130 (10000001 => 10000010)
Input: 127 => Output: 191 (01111111 => 10111111)
Input: 1 => Output: 2 (01 => 10)
Input: 323423 => Output: 323439 (1001110111101011111 => 1001110111101101111)

Parameters: a number
Returns: a number
  the next higher number with the same amount of
  1's as the input when converted to binary
Examples:
  nextHigher(128) // 256
  nextHigher(1) // 2
  nextHigher(1022) // 1279
  nextHigher(127) // 191
  nextHigher(1253343) // 1253359
Pseudocode:
  convert input num to binary & count the 1's
  create a loop
  start from i as input + 1, keep track of 1s as c,
  keep running as long as 1s are not equal
  increment i by 1
    reassign c to start converted to binary's count of 1's
    if c equals input num count
      return i
*/

function nextHigher(n) {
  const ones = [...n.toString(2)].filter(e => +e).length;
  for (let i = ++n, c; ; i++) {
    c = [...i.toString(2)].filter(e => +e).length;
    if (c === ones) return i;
  }
}