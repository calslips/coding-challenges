/*
You've just recently been hired to calculate scores for a Dart Board game!

Scoring specifications:

0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5
If all radii are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radii (can be integers and/or floats),
and returns a total score using the above specification.

An empty array should return 0.

Parameters: an array of integers/floats
  (each number represents a radius)
Returns:
  a single number value
Examples:
  scoreThrows([1, 5, 11]) // 15
  scoreThrows([15, 20, 30, 31, 32, 44, 100]) //  0
  scoreThrows([1, 2, 3, 4]) // 140
  scoreThrows([]) // 0
  scoreThrows([1, 2, 3, 4, 5, 6, 7, 8, 9]) // 65
  scoreThrows([0, 5, 10, 10.5, 4.5]) // 30
Pseudocode:
  initialize a points variable assigned to 0
  iterate over the numbers of the array
    if number is less than 5
      add 10 to points
    if number is between 5 and 10 inclusive
      add 5 to points
    if number is greater than 10
      continue to next iteration
  check if every number in input element is less than 5
    if so
      add 100 to points
    otherwise
      continue
  return points
*/

function scoreThrows(radii) {
  return radii.length ? radii.reduce((p, r) => r < 5 ? p + 10 : r > 10 ? p : p + 5, 0) + (radii.every(r => r < 5) && 100) : 0;
}