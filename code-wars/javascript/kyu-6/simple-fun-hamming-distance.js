/*
The hamming distance between a pair of numbers is the
number of binary bits that differ in their binary notation.

Example
For a = 25, b= 87, the result should be 4

25: 00011001
87: 01010111
The hamming distance between these two would be 4
  ( the 2nd, 5th, 6th, 7th bit ).

Input/Output
[input] integer a
First Number. 1 <= a <= 2^20

[input] integer b
Second Number. 1 <= b <= 2^20

[output] an integer
Hamming Distance

Parameters: 2 nums
Returns: a num
  the count of differences between
  the binary versions of the input nums
Examples:
  hammingDistance(25, 87), 4
  hammingDistance(256, 302), 4
  hammingDistance(543, 634), 4
  hammingDistance(34013, 702), 7
Pseudocode:
  convert both nums to strs equaling their bin equivalent
  find the length of the longer bin
  pad the start of the shorter bin with 0's
  initialize a count var assigned to 0
  iterate over the length of one of the bins
    if value at current index for both bins are NOT equal
      increment count var
  return count
*/

function hammingDistance(a, b) {
  let binA = a.toString(2), binB = b.toString(2);
  if (binA.length !== binB.length) {
    const l = binA.length > binB.length ? binA.length : binB.length;
    binA.length < l ? binA = binA.padStart(l, '0') : binB = binB.padStart(l, '0');
  }
  return [...binA].reduce((c, b, i) => b === binB[i] ? c : ++c, 0);
}

function hammingDistance(a, b) {
  let binA = a.toString(2), binB = b.toString(2), l = binA.length > binB.length ? binA.length : binB.length;
  binA.length < l ? binA = binA.padStart(l, '0') : binB = binB.padStart(l, '0');
  return [...binA].reduce((c, b, i) => b === binB[i] ? c : ++c, 0);
}