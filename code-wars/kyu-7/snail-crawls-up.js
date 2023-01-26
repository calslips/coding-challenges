/*
The snail crawls up the column. During the day it crawls up some
distance. During the night she sleeps, so she slides down for
some distance (less than crawls up during the day).

Your function takes three arguments:
1. The height of the column (meters)
2. The distance that the snail crawls during the day (meters)
3. The distance that the snail slides down during the night (meters)

Calculate number of day when the snail will reach the top of the column.

Parameters: 3 nums
  max height of column
  distance covered in a day
  distance lost in the night
Returns: a num
  the day(s) it takes to cover
  the max distance
Examples:
  snail(3,2,1), 2
  snail(10,3,1), 5
  snail(10,3,2), 8
  snail(100,20,5), 7
  snail(5,10,3), 1
Pseudocode:
  initialize a days count var assigned to 1
  initialize a distance var assigned to day
  create a loop to run as long as distance is less than column
    reassign distance to be itself minus night
    increment days count by 1 && distance by day value
  return days count
*/

function snail(column, day, night) {
  let dayCount = 1;
  for (let distance = day; distance < column; dayCount++, distance += day) distance -= night;
  return dayCount;
}