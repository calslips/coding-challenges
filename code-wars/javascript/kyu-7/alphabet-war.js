/**
 * There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side
letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters
and return who wins the fight. When the left side wins return Left side wins!,
when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
 */

function alphabetWar(fight) {
  const left = {w: 4, p: 3, b: 2, s: 1, points: 0};
  const right = {m: 4, q: 3, d: 2, z: 1, points: 0};
  for (let letter of fight) {
    if (left[letter]) left.points += left[letter];
    if (right[letter]) right.points += right[letter];
  }
  return left.points > right.points ? 'Left side wins!' : left.points < right.points ? 'Right side wins!' : 'Let\'s fight again!';
}