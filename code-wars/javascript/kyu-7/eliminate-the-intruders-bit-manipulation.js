/*
You are given a string representing a number in binary. Your
task is to delete all the unset bits in this string and return
the corresponding number (after keeping only the '1's).

Parameters: a str (binary)
Returns: a num
Examples:
  eliminateUnsetBits("11010101010101"), 255
  eliminateUnsetBits("111"), 7
  eliminateUnsetBits("1000000"), 1
  eliminateUnsetBits("000"), 0
Pseudocode:
  convert input str into an array of bits
  filter out the 0's
  join the 1 bits back into a str
  convert binary str into a num
  return num OR 0 (if str was empty)
*/

function eliminateUnsetBits(number) {
  return parseInt([...number].filter(Number).join(''), 2) || 0;
}