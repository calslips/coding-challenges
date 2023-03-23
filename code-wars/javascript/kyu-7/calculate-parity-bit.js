/*
A parity bit, or check bit, is a bit added to a string of bits
to ensure that the total number of 1-bits in the string is even
or odd. Parity bits are used as the simplest form of error
detecting code.

You have two parameters, one being the wanted parity
(always 'even' or 'odd'), and the other being the binary
representation of the number you want to check.

Your task is to return an integer (0 or 1), whose parity bit you
need to add to the binary representation so that the parity of
the resulting string is as expected.

Example:
  Parity: 'even'
  Bin: '0101010'
  Result: 1
Because there is an odd number of 1-bits (3) you need to put
another 1 to it to get an even number of 1-bits.

Parameters: 2 strs
  parity, 'even' or 'odd'
  binary
Returns: a num
  bit to add to input bin to match input parity
Examples:
  checkParity('even','101010'), 1
  checkParity('odd','101010'), 0
  checkParity('even','101011'), 0
  checkParity('odd','101011'), 1
Pseudocode:
  split input bin, separate out the 1s
  if length even/odd status matches input parity
    return 0
  otherwise
    return 1
*/

function checkParity(parity, bin) {
  return [...bin].filter(b => +b).length % 2 === (parity === 'even' ? 0 : 1) ? 0 : 1;
}