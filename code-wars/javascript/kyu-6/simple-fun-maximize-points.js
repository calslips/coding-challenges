/**
 * Two teams are playing a game of tennis. The team sizes are
 * the same and each player from the first team plays against
 * the corresponding player from the second team.

Each player has a certain power level. If a player has a higher
power level than her opponent, she is guaranteed to win and her
team would get 1 point for that win while the opponents get a 0.

You are the coach of the first team and you know the power levels
of all the players before the game starts. You want to rearrange
the players in your team to earn the highest possible total score.

Input/Output
[input] integer array team1
  The power levels of the players in the first team. Teams have
  less than 100 players and each power level is less than 100.
[input] integer array team2
  Array of the same length as team1, the power levels of the
  players of the second team.
[output] an integer
  The maximum number of points the first team can get.

Example
For team1 = [3,2,4] and team2 = [1,2,3], the output should be 3.

If you don't rearrange the players in the first team,
it will get 2 points, since 3 > 1, 2 = 2 and 4 > 3.

However, if you rearrange the order of the players to [2, 3, 4],
the first team will get 3 points.

 * @param {number[]} team1
 * @param {number[]} team2
 * @returns {number}
 *
 * Examples:
 *    maximizePoints([3, 2, 4], [1, 2, 3]), 3
 *    maximizePoints([1], [99]), 0
 *    maximizePoints([99], [1]), 1
 *    maximizePoints([25, 7, 26, 48], [1, 36, 5, 33]), 3
 *    maximizePoints([7, 19, 23, 18, 38, 37, 38, 40], [21, 12, 1, 0, 13, 38, 25, 49]), 7
 * Pseudocode:
 *    initialize a wins var assigned to 0
 *    sort both input teams asc
 *    create a loop to iterate over the length of team1
 *    maintain separate pointers for both teams
 *    increment both pointers each iteration
 *      if value at team1 pointer1 is greater than value at team2 pointer2
 *        increment win
 *      otherwise
 *        decrement pointer2
 *        (to continue comparing values from team1 to the same team 2 value
 *        until there is a higher value or loop ends)
 *    return wins count
 */

function maximizePoints(team1, team2) {
  let wins = 0;
  [team1, team2].forEach(team => team.sort((a, b) => a - b));
  for (let p1 = 0, p2 = 0; p1 < team1.length; p1++, p2++) team1[p1] > team2[p2] ? wins++ : p2--;
  return wins;
}