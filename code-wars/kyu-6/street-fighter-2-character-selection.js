/*
Some of you might remember spending afternoons playing Street Fighter 2
in some Arcade back in the 90s or emulating it nowadays with the numerous
emulators for retro consoles.

Can you solve this kata? Suuure-You-Can!

UPDATE: a new kata's harder version is available here.

The Kata

You'll have to simulate the video game's character selection screen
behaviour, more specifically the selection grid. Such screen looks
like this:

Screen:

Selection Grid Layout in text:
| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

Input
the list of game characters in a 2x6 grid;
the initial position of the selection cursor (top-left is (0,0));
a list of moves of the selection cursor (which are up, down, left, right);

Output
the list of characters who have been hovered by the selection cursor
fter all the moves (ordered and with repetition, all the ones after
  a move, whether successful or not, see tests);

Rules

Selection cursor is circular horizontally but not vertically!

As you might remember from the game, the selection cursor rotates
horizontally but not vertically; that means that if I'm in the
leftmost and I try to go left again I'll get to the rightmost
(examples: from Ryu to Vega, from Ken to M.Bison) and vice versa
from rightmost to leftmost.

Instead, if I try to go further up from the upmost or further down
from the downmost, I'll just stay where I am located (examples:
  you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim,
  Sagat and M.Bison in the above image; you can't go upper than
  highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the
  above image).

Test

For this easy version the fighters grid layout and the initial
position will always be the same in all tests, only the list of
moves change.

Notice: changing some of the input data might not help you.

Examples

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['up', 'left', 'right', 'left', 'left']
then I should get:

['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
as the characters I've been hovering with the selection cursor
during my moves. Notice: Ryu is the first just because it "fails"
the first up See test cases for more examples.

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
Result:

['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']


Parameters:
  an array of strings (fighters)
  an array of 2 numbers (coordinates)
  an arary of strings (directions)
Returns:
  an array of strings (fighters cursored over)
Examples:
  let fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
  ];

  moves = ['up', 'left', 'right', 'left', 'left'];
  streetFighterSelection(fighters, [0,0], moves)
    // ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']

  moves = [];
  streetFighterSelection(fighters, [0,0], moves)
    // []

  moves = ["left","left","left","left","left","left","left","left"]
  streetFighterSelection(fighters, [0,0], moves)
    // ['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']

  moves = ["right","right","right","right","right","right","right","right"];
  streetFighterSelection(fighters, [0,0], moves)
    // ['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']

  moves = ["down","down","down","down"];
  streetFighterSelection(fighters, [0,0], moves)
    // ['Ken', 'Ken', 'Ken', 'Ken']

  moves = ["up","up","up","up"];
  streetFighterSelection(fighters, [0,0], moves)
    // ['Ryu', 'Ryu', 'Ryu', 'Ryu']
Pseudocode:
  if moves are empty
    return empty array
  initialize result array assigned to an empty array
  initialize x & y vars assigned to position at 0 & 1 respectively
  iterate over the moves array length,
    if left,
      reassign x to equal x - 1 OR
        if that makes it < zero, reassign it to be row length - 1
    if right,
      reassign x to equal x + 1 OR
        if that makes it equal to row length, reassign it to be 0
    if up,
      reassign y to equal y - 1, but if its less than 0, keep 0
    if down,
      reassign y to equal y + 1, but if its more than col height, keep col height
    push fighter at coords y at coords x to result array
  return result
*/

function streetFighterSelection(fighters, [y, x] = position, moves) {
  return moves.map(m => {
    if (m === 'left') x - 1 < 0 ? x = fighters[y].length - 1 : --x;
    else if (m === 'right') x + 1 === fighters[y].length ? x = 0 : ++x;
    else if (m === 'up') y - 1 < 0 || --y;
    else if (m === 'down') y + 1 === fighters.length || ++y;
    return fighters[y][x];
  });
}