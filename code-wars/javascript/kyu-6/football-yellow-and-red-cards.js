/*
Most football fans love it for the goals and excitement. Well,
this Kata doesn't. You are to handle the referee's little
notebook and count the players who were sent off for fouls and
misbehavior.

The rules: Two teams, named "A" and "B" have 11 players each;
players on each team are numbered from 1 to 11. Any player may
be sent off the field by being given a red card. A player can
also receive a yellow warning card, which is fine, but if he
receives another yellow card, he is sent off immediately (no
  need for a red card in that case). If one of the teams has
  less than 7 players remaining, the game is stopped immediately
  by the referee, and the team with less than 7 players loses.

A card is a string with the team's letter ('A' or 'B'), player's
number, and card's color ('Y' or 'R') - all concatenated and
capitalized. e.g the card 'B7Y' means player #7 from team B
received a yellow card.

The task: Given a list of cards (could be empty), return the
number of remaining players on each team at the end of the game
(as a tuple of 2 integers, team "A" first). If the game was
terminated by the referee for insufficient number of players,
you are to stop the game immediately, and ignore any further
possible cards.

Note for the random tests: If a player that has already been
sent off receives another card - ignore it.

Parameters: an array of strs
Returns: a tuple of nums
Examples:
  menStillStanding([]), [11,11]
  menStillStanding(["A4Y", "A4Y"]), [10,11]
  menStillStanding(["A4Y", "A4R"]), [10,11]
  menStillStanding(["A4Y", "A5R", "B5R", "A4Y", "B6Y"]), [9,10]
  menStillStanding(["A4R", "A4R", "A4R"]), [10,11]
  menStillStanding(["A4R", "A6R", "A8R", "A10R", "A11R"]), [6,11]
Pseudocode:
  if input has no length
    return tuple containing 2 11's
  for each team
    obtain entries from an array of length 11 filled with 1's
    convert array of entries into an obj
  place both teams into a teams obj
    under keys 'A' and 'B'
  iterate over the cards array
    if either team has less than 7 players
      break out of loop
    convert card str into an array of chars and destructure into
      team, player num, card type
    if current card type is red
      remove player from team
    otherwise if card type is yellow
      if player within team has a value of 0
        remove player from team
      otherwise
        decrement value
  return an array containing the key lengths of both teams A, B
*/

function menStillStanding(cards) {
  const teams = ['A', 'B'].reduce((o, t) => (o[t] = Object.fromEntries(Object.entries(Array(11).fill(1))), o), {});
  for (const card of cards) {
    const team = card[0], player = card.slice(1, -1) - 1, color = card.at(-1);
    if (color === 'R') delete teams[team][player];
    else teams[team][player] ? teams[team][player]-- : delete teams[team][player];
    if (Object.keys(teams.A).length < 7 || Object.keys(teams.B).length < 7) break;
  }
  return [Object.keys(teams.A).length, Object.keys(teams.B).length];
}