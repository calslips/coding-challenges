/*
In this kata you will be given a sequence of the dimensions of
rectangles ( sequence with width and length ) and
circles ( radius - just a number ).
Your task is to return a new sequence of dimensions,
sorted ascending by area.

Parameters: an array of nums / subarrays of nums
Returns: an array of nums / subarrays of nums
  (input array sorted asc by their area value,
  not the actual els themselves)
Examples:
  sortByArea([ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]), [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ]
  sortByArea([ [2, 5], 6 ]), [ [2, 5], 6 ]
  sortByArea([]), []
Pseudocode:
  return array sorted asc
    within sorting fn
      if a arg is an array
        a area equals 1st el times 2nd el
      if arg is a num
        a area equals pi times num squared
      (run b arg through the same conditionals to obtain its area)
      return the difference between a area and b area
*/

function sortByArea(array) {
  return [...array].sort((a, b) => (r = [a, b].map(v => isNaN(v) ? v[0] * v[1] : Math.PI * v * v))[0] - r[1]);
}