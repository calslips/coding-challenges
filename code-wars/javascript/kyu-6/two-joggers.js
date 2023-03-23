/*
Your job is to complete the function nbrOfLaps(x, y) that,
given the length of the laps for Bob and Charles, finds
the number of laps that each jogger has to complete before
they meet each other again, at the same time, at the start.

The function takes two arguments:

The length of Bob's lap (larger than 0)
The length of Charles' lap (larger than 0)

The function should return an array (Tuple<int, int> in C#)
containing exactly two numbers:

The first number is the number of laps that Bob has to run
The second number is the number of laps that Charles has to run

Parameters: two nums
Returns: an array of nums (tuple)
  the respective number of laps each
  runner needs to run before they
  cross paths at the start again
Examples:
  nbrOfLaps(5, 3), [3,5]
  nbrOfLaps(4, 6), [3,2]
  nbrOfLaps(5, 5), [1,1]
Pseudocode:
  find the lowest common multiple of x and y
  initialize laps var assigned to an empty arr
  initialize lcm var assigned to the greater of the 2 inputs
  create a loop starting at counter 1, increment by 1
    if current lcm multiplied by counter is evenly divisible by both inputs
      divide lcm by x and push quotient to laps
      divide lcm by y and push quotient to laps
  return laps, a tuple containing the respective lcm's
*/

var nbrOfLaps = function (x, y) {
  const laps = [];
  for (let i = 1, m = Math.max(x, y); ; i++) {
    const lcm = m * i;
    if (!(lcm % x || lcm % y)) {
      laps.push(lcm / x), laps.push(lcm / y);
      return laps;
    }
  }
};