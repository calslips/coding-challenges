/*
Parameters:
  a 2d array (of arrays containing '_', '@', or 'D')
  a number (of bags)
  a number (of bag capacity)
Returns: a string
Examples:
  crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2) // "Clean"
  crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1) //  "Cr@p"
  crap([['_','_'], ['_','@'], ['D','_']], 2, 2) // "Dog!!"
Pseudocode:
  initialize a count var assigned to 0
  flatten array
  if flat array includes 'D'
    return 'Dog!!'
  otherwise
    increment count var for each '@'
  return result of conditional count <= 2nd arg * 3rd arg
*/

function crap(x, bags, cap) {
  return (x = x.flat()).includes('D') ? 'Dog!!' : x.filter(e => e === '@').length <= bags * cap ? 'Clean' : 'Cr@p';
}