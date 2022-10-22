/*
It's a Pokemon battle! Your task is to calculate the damage
that a particular move would do using the following formula
(not the actual one from the game):

damage = 50 * (attack / defense) * effectiveness
Where:

attack = your attack power
defense = the opponent's defense
effectiveness = the effectiveness of the attack based on the
matchup (see explanation below)
Effectiveness:

Attacks can be super effective, neutral, or not very effective
depending on the matchup. For example, water would be super
effective against fire, but not very effective against grass.

Super effective: 2x damage
Neutral: 1x damage
Not very effective: 0.5x damage
To prevent this kata from being tedious, you'll only be dealing
with four types: fire, water, grass, and electric. Here is the
effectiveness of each matchup:

fire > grass

fire < water

fire = electric

water < grass

water < electric

grass = electric

For this kata, any type against itself is not very effective. Also,
assume that the relationships between different types are symmetric
(if A is super effective against B, then B is not very effective against A).

The function you must implement takes in:

your type
the opponent's type
your attack power
the opponent's defense

Parameters: 2 strings and 2 numbers
Returns: a number
Examples:
  calculateDamage("fire", "water", 100, 100) // 25
  calculateDamage("grass", "water", 100, 100) // 100
  calculateDamage("electric", "fire", 100, 100) // 50
  calculateDamage("grass", "electric", 57, 19) // 150
  calculateDamage("grass", "water", 40, 40) // 100
  calculateDamage("grass", "fire", 35, 5) // 175
  calculateDamage("fire", "electric", 10, 2) // 250
Pseudocode:
  initialize effectiveness var assigned to 1
  if yourType and opponents is the same
    reassign effectiveness to 0.5
  else if yourType is fire
    if opponent is grass
      reassign effectiveness to 2
    else if opponent is water
      reassign effectiveness to 0.5
  else if yourType is water
    if opponent is fire
      reassign effectiveness to 2
    else if opponent is grass OR electric
      reassign effectiveness to 0.5
  else if yourType is grass
    if opponent is water
      reassign effectiveness to 2
    else if opponent is fire
      reassign effectiveness to 0.5
  else if yourType is electric
    if opponent is water
      reassign effectiveness to 2
  return result of formula with effectiveness plugged in
*/

function calculateDamage(yourType, opponentType, attack, defense) {
  let effectiveness = 1;
  if (yourType === opponentType) effectiveness = 0.5;
  else if (yourType === 'fire') {
    if (opponentType === 'grass') effectiveness = 2;
    else if (opponentType === 'water') effectiveness = 0.5;
  } else if (yourType === 'water') {
    if (opponentType === 'fire') effectiveness = 2;
    else if (opponentType === 'grass' || opponentType === 'electric') effectiveness = 0.5;
  } else if (yourType === 'grass') {
    if (opponentType === 'water') effectiveness = 2;
    else if (opponentType === 'fire') effectiveness = 0.5;
  } else if (yourType === 'electric') if (opponentType === 'water') effectiveness = 2;
  return 50 * (attack / defense) * effectiveness;
}