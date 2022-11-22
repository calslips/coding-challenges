/*
Given a string (str) containing a base-10 integer between
0 and 10000, convert the integer to its binary representation.
At that point, obtain a count of the maximum amount of
consecutive 0s. From there, return the count in written form
with a capital letter.

max_consec_zeros("9") => "Two"
max_consec_zeros("13") => "One"
max_consec_zeros("15") => "Zero"
max_consec_zeros("42") => "One"
max_consec_zeros("550") => "Three"

In the very first example, we have an argument of "9" which is
being passed to the method. The binary representation of 9 is
1001 which can be read as: one, zero, zero, one. There are, at
most, two consecutive 0s, resulting in the integer 2 as the
value of the count. The output in the block of code above
reflects the final step of taking 2 from standard form to the
written form "Two" as prompted.

In the very last example, we have an argument of "550" which
is being passed to the method. The binary representation of
550 is 1000100110 which can be read as:
one, zero, zero, zero, one, zero, zero, one, one, zero.
There are, at most, three consecutive 0s, resulting in the
integer 3 as the value of the count. The output in the block of
code above reflects the final step of taking 3 from standard
form to the written form of "Three" as prompted.

One way, among many, to visualize the end of each step might
look like:

max_consec_zeros("777")
1: "777"
2: 777
3: 1100001001
4: 4
5: "Four"
max_consec_zeros("777") => "Four"

Parameters: a string
  integers between 0-10000 as a str
Returns: a string
  a num in written form (word), capitalized
Examples:
  maxConsecZeros("7"), "Zero"
  maxConsecZeros("33"), "Four"
  maxConsecZeros("77"), "Two"
  maxConsecZeros("100"), "Two"
  maxConsecZeros("105"), "Two"
  maxConsecZeros("113"), "Three"
  maxConsecZeros("160"), "Five"
  maxConsecZeros("180"), "Two"
  maxConsecZeros("223"), "One"
  maxConsecZeros("256"), "Eight"
  maxConsecZeros("777"), "Four"
  maxConsecZeros("992"), "Five"
  maxConsecZeros("1024"), "Ten"
  maxConsecZeros("1037"), "Six"
  maxConsecZeros("1088"), "Six"
  maxConsecZeros("2017"), "Four"
  maxConsecZeros("2048"), "Eleven"
  maxConsecZeros("3050"), "One"
  maxConsecZeros("4096"), "Twelve"
  maxConsecZeros("6144"), "Eleven"
  maxConsecZeros("6656"), "Nine"
  maxConsecZeros("7188"), "Five"
  maxConsecZeros("8192"), "Thirteen"
  maxConsecZeros("9999"), "Four"
  maxConsecZeros("10000"), "Four"
Pseudocode:
  initialize a hash
    where keys are nums and values are their word form,
    from 0-13
  convert input into a num
  convert num into binary
  get max count of consecutive 0's
  return max counts word form from hash
*/

function maxConsecZeros(n) {
  return hash[Math.max(...(+n).toString(2).split('1').map(z => z.length))];
}

const hash = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
};