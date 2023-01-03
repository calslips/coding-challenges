/*
A cyclops number is a number in binary that is made up of all 1's,
with one 0 in the exact middle. That means all cyclops numbers
must have an odd number of digits for there to be an exact middle.
A couple examples:
101
11111111011111111
You must take an input, n, that will be in decimal format (base 10),
then return True if that number wil be a cyclops number when
converted to binary, or False if it won't.
Assume n will be a positive integer.

A test cases with the process shown:

cyclops (5)
"""5 in biinary"""
"0b101"
"""because 101 is made up of all "1"s with a "0" in the middle,
  101 is a cyclops number"""
return True

cyclops(13)
"""13 in binary"""
"0b1101"
"""because 1101 has an even number of bits, it cannot be a cyclops"""
return False

cyclops(17)
"""17 in binary"""
"0b10001"
"""Because 10001 has more than 1 "0" it cannot be a cyclops number"""
return False

n will always be > 0.

Parameters: a num
Returns: a boolean
  whether input num converted to binary
  contains a 0 in the middle
  surrounded by equal amount of 1s on both sides
Examples:
  cyclops(1), false
  cyclops(5), true
  cyclops(3), false
  cyclops(13), false
  cyclops(23), false
  cyclops(27), true
  cyclops(2015), true
  cyclops(666), false
  cyclops(42), false
Pseudocode:
  convert input num to bin
  if bin length is odd
    if bit at middle index of bin is 0
    AND all bits to the left & right of it are 1s
      return true
  return false
*/

function cyclops(n) {
  const bin = n.toString(2), mid = Math.floor(bin.length / 2);
  return !!(bin.length % 2) && bin[mid] === '0' && !bin.slice(0, mid).includes('0') && !bin.slice(mid + 1).includes('0');
}

function cyclops(n) {
  const bin = n.toString(2), mid = Math.floor(bin.length / 2);
  return !!(bin.length % 2) && !+bin[mid] && !bin.slice(0, mid).includes('0') && !bin.slice(mid + 1).includes('0');
}