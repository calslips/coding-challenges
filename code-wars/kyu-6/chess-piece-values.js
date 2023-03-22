/*
Complete the function piecesValue/pieces_value that accepts
two arguments, an 8x8 array (arr),representing a chess board
and a string (s). Depending on the value of the string s
(which can be either "white" or "black") calculate the value
of the pieces on the table for the corresponding player
(white or black).
Empty fields will be marked as a space " " while the fields
with pieces look like this:

"w-king"   //meaning white king
"b-bishop" //a black bishop
"w-pawn"   //white pawn
...and so on.

Preloaded for you there is an object called hash
(values in python):

const hash = Object.freeze({
  queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1
});

Having the estimated value of each piece. This is a rough
estimation and the real piece value depends on other factors
in game as well ,such as the game being a closed or open one,
which can favor either knights or bishops. (If you are
interested more about that here: open vs closed game.) But
for our purposes we will use the mentioned values.

Note: the value of a king cannot be estimated because without
it the game would be over, so DO NOT take into consideration
the value of the king.You will not be tested for invalid input.

Parameters:
  an array of strs
    pieces on the board in player-piece format
  a str
    which player to evaluate
Returns: a num
  the total value of the respective players pieces
  on the board
Examples:
  const r1 = [['b-bishop',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
              [' ','b-king',' ','b-pawn','w-rook',' ',' ',' '],
              [' ',' ',' ',' ','w-pawn',' ',' ',' '],
              [' ',' ',' ',' ',' ','w-bishop',' ',' '],
              ['w-king',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ','b-pawn','b-pawn',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' ']];
  const r2 = [[' ',' ',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ','b-king',' ',' '],
              [' ','b-knight',' ',' ','w-pawn',' ',' ',' '],
              [' ',' ','w-bishop',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ',' '],
              [' ','w-pawn',' ',' ',' ','w-pawn',' ',' '],
              [' ',' ',' ',' ','b-pawn',' ',' ',' '],
              [' ','w-rook',' ',' ',' ','w-king',' ',' ']];
  const r3 = [[' ',' ',' ',' ','b-king',' ',' ',' '],
              [' ','b-bishop',' ',' ','b-pawn','b-pawn',' ',' '],
              [' ',' ',' ',' ','b-knight',' ',' ',' '],
              [' ',' ','w-queen',' ',' ',' ',' ',' '],
              [' ','w-bishop',' ',' ',' ',' ',' ',' '],
              [' ',' ',' ',' ',' ',' ',' ','b-rook'],
              [' ','w-pawn','w-pawn',' ',' ',' ',' ',' '],
              [' ',' ','w-king',' ',' ',' ',' ',' ']];
  piecesValue(r1, 'white'), 18
  piecesValue(r1, 'black'), 15
  piecesValue(r2, 'white'), 11
  piecesValue(r2, 'black'), 4
  piecesValue(r3, 'white'), 14
  piecesValue(r3, 'black'), 13
Pseudocode:
  reduce input array into a num (sum)
    reduce subarray into a num (subsum)
      if current el is a space or el split on '-' value at index 1 is 'king'
        return accumulating subsum
      otherwise
        if el split on '-' value at index 0 equals str inputs 1st char
          access value in hash at el split on '-' at index 1 key
          return above value added to subsum
    add result of subarray reduction to accumulating sum
  return reduced sum
*/

function piecesValue(arr, s) {
  return arr.reduce((n, a) => n + a.reduce((n, v) => n + (v[0] === s[0] ? hash[v.slice(2)] || 0 : 0), 0), 0);
}

function piecesValue(arr, s) {
  return arr.reduce((n, a) => n + a.reduce((n, v) => v === ' ' || v[0] !== s[0] ? n : n + (hash[v.slice(2)] || 0), 0), 0);
}