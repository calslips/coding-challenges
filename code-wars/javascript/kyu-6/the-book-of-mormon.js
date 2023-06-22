/*
The Mormons are trying to find new followers and in order to do
that they embark on missions.

Each time they go on a mission, each Mormon converts a fixed
number of people (reach) into followers. This continues and
every freshly converted Mormon as well as every original Mormon
go on another mission and convert the same fixed number of
people each. The process continues until they reach a predefined
target number of followers (target).

Converted Mormons are unique so that there's no duplication
amongst them.

Complete the function that calculates how many missions Mormons
need to embark on, in order to reach their target. While each
correct solution will pass, for more fun try to make a recursive
function.

All inputs are valid positive integers.

Examples
starting_number = 10, reach = 3, target = 9 --> 0
# No missions needed because the number of followers already
  exceeds target

starting_number = 40, reach = 2, target = 120 --> 1
# Every mormon converts 2 people, so after 1 mission there are
  40 + 80 = 120 mormons

starting_number = 20_000, reach = 2, target = 7_000_000_000 --> 12
# Mormons dominate the world after only 12 missions!

Parameters: 3 nums
Returns: a num
Examples:
  Mormons(10, 3, 9), 0
  Mormons(40, 2, 120), 1
  Mormons(40, 2, 121), 2
  Mormons(20000, 2, 7000000000), 12
Pseudocode:
  set up a 4th param mission
    default to 0
  base case
    if startingNumber is equal to or greater than target
      return mission num
  recursive case
    return recursive call to fn
      1st param = starting num + reach * starting num
      2nd param same
      3rd param same
      4th param incremented
*/

function Mormons(startingNumber, reach, target, mission = 0) {
  if (startingNumber >= target) return mission;
  return Mormons(startingNumber + startingNumber * reach, reach, target, ++mission);
}