/*
Three candidates take part in a TV show.
In order to decide who will take part in the final game and
probably become rich, they have to roll the Wheel of Fortune!
The Wheel of Fortune is divided into 20 sections, each with a
number from 5 to 100 (only mulitples of 5).
Each candidate can roll the wheel once or twice and sum up the
score of each roll. The winner one that is closest to 100
(while still being lower or equal to 100). In case of a tie,
the candidate that rolled the wheel first wins.
You receive the information about each candidate as an array of
objects: each object should have a name and a scores array with
the candidate roll values.
Your solution should return the name of the winner or false if
there is no winner (all scored more than 100).

Please note that inputs may be invalid:
in this case, the function should return false.

Potential errors derived from the specifications are:
More or less than three candidates take part in the game.
A candidate did not roll the wheel or rolled it more than twice.
Scores are not valid.
Invalid user entry (no name or no score).

Parameters: an array of objects
  name prop is a string
  scores prop is an array of nums
Returns: a str or boolean
  str is the name of the winner
  false when no winner is determined
Examples:
  const c1 = { name: "Bob", scores: [10, 65] };
  const c2 = { name: "Bill", scores: [90, 5] };
  const c3 = { name: "Charlie", scores: [40, 55] };
  winner([c1, c2, c3]), "Bill"
Pseudocode:
  if candidates is any length besides 3
    return false
  iniitalize a winner var assigned to an object containing
    a name prop as an empty str
    a score prop as 0
  iterate over the candidates
    if candidate name or score is missing
      return false
    if score length is less than 1 or greater than 2
      return false
    if scores are invalid (not multiple of 5 and not between 5-100)
      return false
    otherwise
      if sum of candidate scores are greater than winner score AND
      less than or equal to 100
        reassign winner name to candidate name
        reassign winner score to candidate score sum
  return winner name if exists, false otherwise
*/

function winner(candidates) {
  if (candidates.length !== 3) return false;
  const winner = {name: false, score: 0};
  for (const c of candidates) {
    if (!c.name || !c.scores?.length || c.scores.length > 2 || c.scores.some(n => n % 5 || n < 5 || n > 100)) return false;
    if ((s = c.scores.reduce((s, n) => s + n, 0)) > winner.score && s <= 100) winner.name = c.name, winner.score = s;
  }
  return winner.name;
}