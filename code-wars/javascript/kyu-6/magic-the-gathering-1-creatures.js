/*
Magic The Gathering is a collectible card game that features wizards
battling against each other with spells and creature summons. The game
itself can be quite complicated to learn. In this series of katas,
we'll be solving some of the situations that arise during gameplay.
You won't need any prior knowledge of the game to solve these contrived
problems, as I will provide you with enough information.

Creatures
Each creature has a power and toughness. We will represent this in an
array. [2, 3] means this creature has a power of 2 and a toughness of 3.

When two creatures square off, they each deal damage equal to their power
to each other at the same time. This only happens once. If a creature
takes on damage greater than or equal to their toughness, they die.

Examples:
Creature 1 - [2, 3]
Creature 2 - [3, 3]
Creature 3 - [1, 4]
Creature 4 - [4, 1]

If creature 1 battles creature 2, creature 1 dies, while 2 survives. If
creature 3 battles creature 4, they both die, as 3 deals 1 damage to 4,
but creature 4 only has a toughness of 1.

Write a function battle(player1, player2) that takes in 2 arrays of
creatures. Each players' creatures battle each other in order (player1[0]
  battles the creature in player2[0]) and so on. If one list of creatures
  is longer than the other, those creatures are considered unblocked, and
  do not battle.

Your function should return an object (a hash in Ruby) with the keys
player1 and player2 that contain the power and toughness of the surviving
creatures.

Example:
player1 = [[1, 1], [2, 1], [2, 2], [5, 5]];
player2 = [[1, 2], [1, 2], [3, 3]];
battle(player1, player2) ->
{ 'player1': [[5, 5]],
  'player2': [[1, 2], [3, 3]] }

Parameters: 2 arrays of arrays
  each sub array contains 2 numbers (power and toughness)
Returns: an object
  two keys (player1 & player2) and their remaining array
  of arrays as values
Examples:
  battle([[1,1]], [[1,1]])
    // { 'player1': [], 'player2': [] }
  battle([[2,2]], [[1,1]])
    // { 'player1': [[2,2]], 'player2': [] }
  battle([[1,1]], [[2,2]])
    // { 'player1': [], 'player2': [[2,2]] }
  battle([[1, 1], [2, 1], [2, 2], [5, 5]], [[1, 2], [1, 2], [3, 3]])
    // { 'player1': [[5,5]], 'player2': [[1,2], [3,3]] }
  battle([[1, 2], [1, 2], [3, 3]], [[1, 1], [2, 1], [2, 2], [5, 5]])
    // { 'player1': [[1,2], [3,3]], 'player2': [[5,5]] }
  battle([], [[1,1],[2,3],[10,10]])
    // { 'player1': [], 'player2': [[1,1],[2,3],[10,10]] }
Pseudocode:
  declare player1 and player2 variables, both assigned to empty arrays
  differentiate betweent longer and shorter player arrays
  iterate over longer p array
    subtract current long p arrays 2nd value by short p array at matching index's 1st value OR 0
      if result is greater than 0, push current array to its related player
    subtract short p array at matching index's 2nd value OR 0 by current long p arrays 1st value
      if result is greater than 0, push short p array at matching index to its related player
    (for both, to account for undefined subarrays, have a default fallback value of 0)
  return an object containing player1 & player2
*/

function battle(p1, p2) {
  const pl = p1.length >= p2.length ? p1 : p2, ps = p1.length >= p2.length ? p2 : p1;
  return pl.reduce((o, p, i) => {
    p[1] - (ps[i] ? ps[i][0] : 0) > 0 && o[pl === p1 ? 'player1' : 'player2'].push(p);
    (ps[i] ? ps[i][1] : 0) - p[0] > 0 && o[ps === p2 ? 'player2' : 'player1'].push(ps[i]);
    return o;
  }, {'player1': [], 'player2': []});
}