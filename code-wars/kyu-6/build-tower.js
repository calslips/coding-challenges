/**
 * Build a pyramid-shaped tower given a positive integer number of floors.
 * A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ",
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]
 */

function towerBuilder(nFloors) {
  const tower = [];
  for (let i = 0, ast = 1; i < nFloors; i++, ast += 2) {
    tower.push('*'.repeat(ast).padStart(nFloors + i).padEnd(nFloors * 2 - 1));
  }
  return tower;
}