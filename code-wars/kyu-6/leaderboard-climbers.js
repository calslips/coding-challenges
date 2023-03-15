/*
In this kata you will be given a leaderboard of unique names for
example:

['John',
 'Brian',
 'Jim',
 'Dave',
 'Fred']

Then you will be given a list of strings for example:

['Dave +1', 'Fred +4', 'Brian -1']

Then you sort the leaderboard.
The steps for our example would be:

# Dave up 1
['John',
 'Brian',
 'Dave',
 'Jim',
 'Fred']
# Fred up 4
['Fred',
 'John',
 'Brian',
 'Dave',
 'Jim']
# Brian down 1
['Fred',
 'John',
 'Dave',
 'Brian',
 'Jim']

Then once you have done this you need to return the leaderboard.

All inputs will be valid. All strings in the second list will
never ask to move a name up higher or lower than possible eg.
"John +3" could not be added to the end of the second input list
in the example above.
The strings in the second list will always be something in the
leaderboard followed by a space and a + or - sign followed by a
number.

Parameters: 2 arrays of strs
  1st, leaderboard containing names
  2nd, updates to leaderboard containing names
       and count of places to traverse up/down
Returns: array of strs (updated leaderboard)
Examples:
  leaderboardSort(['John', 'Brian', 'Jim', 'Dave', 'Fred'], ['Dave +1', 'Fred +4', 'Brian -1']), ['Fred', 'John', 'Dave', 'Brian', 'Jim']
  leaderboardSort(['Bob', 'Larry', 'Kevin', 'Jack', 'Max'], ['Max +3', 'Kevin -1', 'Kevin +3']), ['Bob', 'Kevin', 'Max', 'Larry', 'Jack']
Pseudocode:
  map over the array of changes
    convert each str element to a tuple
    contaning str name and num of positions to move (reversing the sign)
  iterate over the mapped array of changes
    remove current place in leaaderboard
      (using the old/original index)
    insert current name into leaderboard at updated index
      (old/original index plus current num in tuple)
  return leaderboard
*/

function leaderboardSort(leaderboard, changes) {
  changes
    .map(s => (t = s.split(' ')) && [t[0], t[1] * -1])
    .forEach(([n, m]) => leaderboard.splice((i = leaderboard.indexOf(n)) + m, 0, ...leaderboard.splice(i, 1)));
  return leaderboard;
}