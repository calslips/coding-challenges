/*
Pete and his mate Phil are out in the countryside shooting
clay pigeons with a shotgun - amazing fun.

They decide to have a competition. 3 rounds, 2 shots each.
Winner is the one with the most hits.

Some of the clays have something attached to create lots of
smoke when hit, guarenteed by the packaging to generate
'real excitement!' (genuinely this happened). None of the
explosive things actually worked, but for this kata lets say
they did.

For each round you will receive the following format:

[{P1:'XX', P2:'XO'}, true]

That is an array containing an object and a boolean.
Pl represents Pete, P2 represents Phil. X represents a hit
and O represents a miss. If the boolean is true, any hit is
worth 2. If it is false, any hit is worth 1.

Find out who won. If it's Pete, return 'Pete Wins!'.
If it is Phil, return 'Phil Wins!'.
If the scores are equal, return 'Draw!'.

Note that as there are three rounds,
the actual input (x) will look something like this:

[[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]]

Parameters: an array of arrays
  sub arrays contain
    an object
      2 properties, each containing strings with 'X' or 'O'
    a boolean
      making each 'X' for that round worth 2 pts if true
      or 1 if false
Returns: a string
  'Pete Wins!' if P1 has more points
  'Phil wins!' if P2 has more points
  'Draw!' if P1 & P2 points are equal
Examples:
  shoot([[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]])
    // 'Pete Wins!'
  shoot([[{P1:'XX', P2:'XO'}, false], [{P1:'OX', P2:'XX'}, false], [{P1:'OO', P2:'XX'}, true]])
    // 'Phil Wins!'
  shoot([[{P1:'XX', P2:'XX'}, true], [{P1:'XX', P2:'OX'}, false], [{P1:'OO', P2:'OX'}, true]])
    // 'Phil Wins!'
Pseudocode:
  initialize a p1 variable equal to 0
  initialize a p2 variable equal to 0
  iterate over the input array
    get an array of values from the object at index 0
    for values at 0 index, add to p1,
      for values at 1 index, add to p2
    if values at 0/1 index include 'XX', add 2 to p1/p2 (*2 if boolean true)
    otherwise if values at 0/1 index includes 'X' add 1 to p1/p2 (*2 if boolean true)
    otherwise, continue
  return 'Pete Wins!' if p1 is greater than p2
    'Phil wins!' if p2 is greater than p1
    'Draw!' if p1 & p2 are equal
*/

function shoot(x) {
  let pete = 0, phil = 0;
  for (let i = 0; i < x.length; i++) {
    const [P1, P2] = Object.values(x[i][0]).map(P => P.includes('XX') ? 2 * (x[i][1] ? 2 : 1) : P.includes('X') ? (x[i][1] ? 2 : 1) : 0);
    pete += P1, phil += P2;
  }
  return pete > phil ? 'Pete Wins!' : phil > pete ? 'Phil Wins!' : 'Draw!';
}

// function shoot(x) {
//   let pete = 0, phil = 0;
//   for (let i = 0; i < x.length; i++) {
//     const [P1, P2] = Object.values(x[i][0]);
//     P1.includes('XX') ? pete += (2 * (x[i][1] ? 2 : 1)) : P1.includes('X') ? pete += (1 * (x[i][1] ? 2 : 1)) : 0;
//     P2.includes('XX') ? phil += (2 * (x[i][1] ? 2 : 1)) : P2.includes('X') ? phil += (1 * (x[i][1] ? 2 : 1)) : 0;
//   }
//   return pete > phil ? 'Pete Wins!' : phil > pete ? 'Phil Wins!' : 'Draw!';
// }