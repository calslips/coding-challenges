/*
The hamming distance of two equal-length strings is the number
of positions, in which the two string differ. In other words,
the number of character substitutions required to transform one
string into the other.

For this first Kata, you will write a function
hamming_distance(a, b) with two equal-length strings containing
only 0s and 1s as parameters. There is no need to test the
parameters for validity (but you can, if you want). The
function's output should be the hamming distance of the two
strings as an integer.

Parameters: 2 strs (binary)
Returns: a num
  count of differing values b/w inputs
Examples:
  hammingDistance('', ''), 0
  hammingDistance('100101', '101001'), 2
  hammingDistance('1010', '0101'), 4
  hammingDistance('100101011011010010010', '101100010110010110101'), 9
Pseudocode:
  convert a input to an array
  call the filter method on it
    keep values that do NOT match values b of same index
  return filter length
*/

function hammingDistance(a, b) {
	return [...a].filter((e, i) => e !== b[i]).length;
}