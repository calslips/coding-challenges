/*
The goal of this Kata is to reduce the passed integer to a single digit
(if not already) by converting the number to binary, taking the sum of
the binary digits, and if that sum is not a single digit then repeat the
process.

If the passed integer is already a single digit there is no need to reduce
n will be an integer such that 0 < n < 10⁹
For example given 5665 the function should return 5:

5665 --> (binary) 1011000100001
1011000100001 --> (sum of binary digits) 5
Given 123456789 the function should return 1:

123456789 --> (binary) 111010110111100110100010101
111010110111100110100010101 --> (sum of binary digits) 16
16 --> (binary) 10000
10000 --> (sum of binary digits) 1


Parameters: number value
Returns:
  number value reduced by converting input to binary and summing digits until summed value is a single digit
Examples:
  singleDigit(5) // 5
  singleDigit(999) // 8
  singleDigit(1234444123) // 1
  singleDigit(443566) // 2
  singleDigit(565656565) // 3
  singleDigit(4868872) // 8
  singleDigit(234234235) // 2
  singleDigit(567448) // 7
  singleDigit(1000000000) // 3
Pseudocode:
  if input number (n) is a single digit
    return n
  otherwise
    recursively call singleDigit with arg being n converted to binary and digits summed
*/

function singleDigit(n) {
  return n < 10 ? n : singleDigit([...n.toString(2)].reduce((s, d) => s + +d, 0));
}