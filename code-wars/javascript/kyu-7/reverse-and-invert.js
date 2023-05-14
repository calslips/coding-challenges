/*
Reverse and invert all integer values in a given list.

reverse_invert([1,12,'a',3.4,87,99.9,-42,50,5.6])
  = [-1,-21,-78,24,-5]

Remove all types other than integer.

Parameters: an array of various types
Returns: an array of integers
Examples:
  reverseInvert([1,2,3,4,5]), [-1,-2,-3,-4,-5]
  reverseInvert([-10]), [1]
  reverseInvert([-9,-18,99]), [9,81,-99]
  reverseInvert([1,12,'a',3.4,87,99.9,-42,50,5.6]),[-1,-21,-78,24,-5]
  reverseInvert([]), []
Pseudocode:
  reduce input array into an array of ints
    if current is a num and the remainder of itself divided by 1 is 0
      convert current num to str
      convert num str to an array of chars
      reverse the order of chars
      join array into a str
      convert str to num
      multiply num by -1
      concat accumulator array with new num
  return reduced array
*/

function reverseInvert(array) {
  return array.reduce((r, v) => (!isNaN(v) && !(v % 1) && r.push([...`${(s = Math.sign(v) < 0) ? v * -1 : v}`].reverse().join('') * (s ? 1 : -1)), r), []);
}