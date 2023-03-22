/*
In this kata you will be given an array of the dimensions of
rectangles (array with width and length) and circles (radius -
just a number). Your task is to sort the objects by their area
in ascending order and return the sorted array of areas. Round
the values of the areas to a maximum of two decimal places.

Parameters: an array of nums or subarrays of nums
Returns: an array of nums
Examples:
  sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]), [ 4.31, 4.75, 27.2, 37.26 ]
  sortByArea([[2, 5], 6]), [ 10, 113.1 ]
  sortByArea([]), []
Pseudocode:
  map over the input array
    if current el is an array
      return the product of its 1st el times its 2nd el
        rounded to 2 decimal places
    otherwise
      return the result of pi times el squared
        rounded to 2 decimal places
  sort mapped array in ascending order
  return sorted array
*/

function sortByArea(array) {
  return array.map(e => +(isNaN(e) ? e[0] * e[1] : Math.PI * e ** 2).toFixed(2)).sort((a, b) => a - b);
}