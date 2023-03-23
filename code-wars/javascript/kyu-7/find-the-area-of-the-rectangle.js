/*
Find the area of a rectangle when provided with one diagonal and
one side of the rectangle. If the input diagonal is less than or
equal to the length of the side, return "Not a rectangle".
If the resultant area has decimals round it to two places.

Parameters: 2 nums
  diagonal length & a side length
Returns:
  a num
    area of rectangle, rounded to 2 decimals
  a str
    if diag is less than or equal to side
      not a rectangle
Examples:
  area(5, 4), 12
  area(10, 6), 48
  area(13, 5), 60
  area(12, 5), 54.54
  area(5, 5), 'Not a rectangle'
Pseudocode:
  if diag is less than or equal to side
    return 'Not a rectangle'
  return side multiplied by sqrt of diag squared minus side squared
    round result to 2 decimal places
*/

function area(d, l) {
  return d > l ? +(l * Math.sqrt(d * d - l * l)).toFixed(2) : 'Not a rectangle';
}