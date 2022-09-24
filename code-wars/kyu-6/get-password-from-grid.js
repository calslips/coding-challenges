/*
In this kata you are expected to recover a scattered password in a
(m x n) grid (you'll be given directions of all password pieces in
the array)

The array will contain pieces of the password to be recovered,
you'll get directions on how to get all the the pieces, your initial
position in the array will be the character "x".

Heres what the array looks like
[
  ["p", "x", "m"],
  ["a", "$", "$"],
  ["k", "i", "t"]
]

The given directions would consist of [left, right, up, down] and
[leftT, rightT, upT, downT], the former would be used to move around
the grid while the latter would be used when you have a password to
that direction of you.( E.g if you are in a position and the move to
  make is leftT it means theres a password to the left of you, so
  take the value and move there)

So in the 2d array example above, you will be given the directions
["lefT", "downT", "rightT", "rightT"], making for the word "pa$$".

Remember you initial position is the character "x".

So you write the function getPassword(grid, directions) that uses the
directions to get a password in the grid.

Another example.
grid = [
  ["a", "x", "c"],
  ["g", "l", "t"],
  ["o", "v", "e"]
];
directions = ["downT", "down", "leftT", "rightT", "rightT", "upT"]
getPassword(grid, directions) // => "lovet"

Once again, Your initial position is the character "x", so from the
position of "x" you follow the directions given and get all pieces in
the grid.

Parameters:
  a grid
    (an array of arrays containing single char strings,
    'x' char marks the starting point)
  an array
    (containing direction strings)
Returns: a string
Examples:
  let t1 = [
    ["p", "x", "m"],
    ["a", "$", "$"],
    ["k", "i", "t"]
  ],
  t1d = ["leftT", "downT", "rightT", "rightT"];
  getPassword(t1, t1d) // "pa$$"

  let t2 = [
    ["x", "l", "m"],
    ["o", "f", "c"],
    ["k", "i", "t"]
  ],
  t2d = ["rightT", "down", "leftT", "right", "rightT", "down", "left", "leftT"];
  getPassword(t2, t2d) // "lock"
Pseudocode:
  (? account for circular traversal through arrays? No)
  initialize a result var, assigned to an empty string
  find the 'x' in the grid (its position is the starting point)
    place its coordinates in respective x and y variables
  iterate over the directions array
    if the direction is left, subtract 1 from x var
    if the direction is right, add 1 to x var
    if the direction is up, subtract 1 from y var
    if the direction is down, add 1 to y var
    if any of the directions end in T, concat it with result
  return result string
*/

function getPassword(grid, directions) {
  let result = '', y = grid.findIndex(a => a.includes('x')), x = grid[y].indexOf('x');
  for (const dir of directions) {
    dir.includes('left') ? x-- : dir.includes('right') ? x++ : dir.includes('up') ? y-- : y++;
    if (dir.endsWith('T')) result += grid[y][x];
  }
  return result;
}