/*
There is a certain multiplayer game where players are assessed
at the end of the game for merit. Players are ranked according
to an internal scoring system that players don't see.

You've discovered the formula for the scoring system!

Create a function called scoring() that takes an array of Player
objects and returns an array of player names, in order of
descending score
(highest score is index 0, 2nd highest is index 1, etc.).

Each player's score is calculated as follows:

Each normal kill is worth 100 points
Each assist is worth 50 points
Each point of damage done is worth 0.5 points
Each point of healing done is worth 1 point
The longest kill streak is worth 2^N, where N is the number of
  kills of the streak
Environmental kills are worth 500 points
  (These are counted separately from normal kills)
For each of the above statistic, a Player object contains a
  respective "key:value" pairing. All values except the 'name'
  are integers.

Note:
Assume the input array will ALWAYS have a properly constructed
  Player object (no missing keys or values)
Names will not contain unusual characters nor repeat
  (names are unique)
Players with the same score should be sorted by the order they
  appear in the array
For simplicity, for a kill streak of 0 the kill streak
  calculation will yield 1 (or 20) points

Parameters: an array of objs
Returns: an array of strs
  input array sorted by total points desc,
  obj replaced with player name
Examples:
  const player1 = {
    name: "JuanPablo",
    normKill: 5,
    assist: 12,
    damage: 3200,
    healing: 0,
    streak: 4,
    envKill: 1
  };
  (score: 3216)

  const player2 = {
    name: "ProfX",
    normKill: 2,
    assist: 14,
    damage: 600,
    healing: 1500,
    streak: 0,
    envKill: 0
  };
  (score: 2701)

  scoring([player1, player2]), ['JuanPablo', 'Profx'];
Pseudocode:
  sort input array based on criteria for total points
  convert sorted input to an array of names
  return array of names
*/

function scoring(array) {
  return [...array]
    .sort((a, b) => ([a, b] = [a, b].map(p => p.normKill * 100 + p.assist * 50 + p.damage / 2 + p.healing + 2 ** p.streak + p.envKill * 500)) && b - a)
    .map(p => p.name);
}

function scoring(array) {
  return [...array]
    .sort((a, b) => {
      [a, b] = [a, b].map(p => p.normKill * 100 + p.assist * 50 + p.damage / 2 + p.healing + 2 ** p.streak + p.envKill * 500);
      return b - a;
    })
    .map(p => p.name);
}

function scoring(array) {
  return [...array]
    .sort((a, b) => {
      a = a.normKill * 100 + a.assist * 50 + a.damage / 2 + a.healing + 2 ** a.streak + a.envKill * 500;
      b = b.normKill * 100 + b.assist * 50 + b.damage / 2 + b.healing + 2 ** b.streak + b.envKill * 500;
      return b - a;
    })
    .map(p => p.name);
}