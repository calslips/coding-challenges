/*
You will be given a string (x) featuring a cat 'C', a dog 'D' and a
mouse 'm'. The rest of the string will be made up of '.'.
You need to find out if the cat can catch the mouse from it's current
position. The cat can jump (j) characters.
Also, the cat cannot jump over the dog.

So:
if j = 5:

..C.....m. returns 'Caught!' <-- not more than j characters between

.....C............m...... returns 'Escaped!' <-- as there are more
than j characters between the two, the cat can't jump far enough

if j = 10:

...m.........C...D returns 'Caught!' <--Cat can jump far enough and
jump is not over dog

...m....D....C....... returns 'Protected!' <-- Cat can jump far enough,
but dog is in the way, protecting the mouse

Finally, if all three animals are not present,
return 'boring without all three'

Parameters:
  a string (potentially containing '.', 'C', 'D', 'm')
  a number (amount of '.' the cat can jump)
Returns:
  if 'm' is within reach of 'C' with no 'D' between
    return 'Caught!'
  if 'm' is within reach of 'C' but with 'D' between
    return 'Protected!'
  if 'm' is out of reach of 'C' ('D' status irrelevant)
    return 'Escaped!'
  if not all players ('C', 'D', 'm') are in the input string
    return 'boring without all three'
Examples:
  catMouse('..D.....Cm', 13) // "Caught!"
  catMouse('...m....D....C.......') // "Protected!"
  catMouse('............C.............D..m...', 8) // "Escaped!"
  catMouse('m.C...', 5) // "boring without all three"
Pseudocode:
  if all 3 players are NOT in the input string
    return 'boring without all three'
  if difference of m index and C index is <= input num
    if D index is between m & C index
      return 'Protected!'
    otherwise
      return 'Caught!'
  otherwise
    return 'Escaped!'
*/

function catMouse(x, j) {
  let C = x.indexOf('C'), D = x.indexOf('D'), m = x.indexOf('m');
  if (C < 0 || D < 0 || m < 0) return 'boring without all three';
  return Math.abs(C - m) <= j ? D > C && D < m || D > m && D < C ? 'Protected!' : 'Caught!' : 'Escaped!';
}