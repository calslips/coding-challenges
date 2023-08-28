/*
You are given a 32-bit integer n. Swap each pair of adjacent bits
in its binary representation and return the result as a decimal number.

The potential leading zeroes of the binary representations have
to be taken into account, e.g. 0b100 as a 32-bit integer is
0b00000000000000000000000000000100 and is reversed to 0b1000.

Examples
For n = 13, the output should be 14:

1310 = 11012 --> 11102 = 1410

For n = 74, the output should be 133:

7410 = 010010102 --> 100001012 = 13310

Input/Output
[input] integer n
 0 ≤ n < 2^30.

[output] an integer

Parameters: a num
Returns: a num
Examples:
  swapAdjacentBits(13), 14
  swapAdjacentBits(74), 133
  swapAdjacentBits(1073741823), 1073741823
  swapAdjacentBits(0), 0
  swapAdjacentBits(1), 2
  swapAdjacentBits(83748), 166680
Pseudocode:
  convert input num to binary
  if length of binary str is odd
    concat a 0 to the start of it
  convert binary to array of bits
  iterate over the bits array, 2 places each iteration
    swap current and next bits
  return bits array joined into binary str and converted back to num
*/

function swapAdjacentBits(n) {
  let binary = n.toString(2);
  if (binary.length % 2) binary = 0 + binary;
  const bits = binary.split('');
  for (let i = 0; i < bits.length; i += 2) [bits[i], bits[i + 1]] = [bits[i + 1], bits[i]];
  return parseInt(bits.join(''), 2);
}