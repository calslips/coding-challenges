/*
Complete the function circleArea so that it will return the area
of a circle with the given radius. Round the returned number to
two decimal places (except for Haskell). If the radius is not
positive or not a number, return false.

Parameters: a num (potentially)
Returns:
  a num (rounded to 2 decimal places)
  a boolean (false if unable to calc radius from input)
Examples:
  circleArea(-1485.86), false
  circleArea(0), false
  circleArea(43.2673), 5881.25
  circleArea(68), 14526.72
  circleArea("number"), false
Pseudocode:
  if input is less than 0 OR NOT a num
    return false
  return pi times r squared
*/

const circleArea = function(radius) {
  return radius > 0 && !isNaN(radius) && +(Math.PI * radius ** 2).toFixed(2);
};