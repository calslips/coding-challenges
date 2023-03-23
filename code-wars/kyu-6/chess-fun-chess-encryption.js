/*
The prisoners from previous challenges love playing chess so they
make extra plan C in communcation , it goes as follows.
They distribute the 26 letters on the standard 8 x 8 chess board.
Then they assign every letter to its location on the board.
So character v would correspond to a1 and u would be b1, etc..

NOTE: during the encryption words are separated by space

Example
For: msg = "hi", the result should be: "e5e4"

For: msg = "play again", the result should be: "g1f2d3c2 d3e6d3e4h2"

Input/Output
[input] string msg
message input.

[output] a string
encrypted message.

Parameters: a str, decrypted
Returns: a str, encrypted
Examples:
  chessEncryption("abc"), "d3d4d5"
  chessEncryption("go away"), "e6h1 d3a2d3c2"
  chessEncryption("hi"), "e5e4"
  chessEncryption("play again"), "g1f2d3c2 d3e6d3e4h2"
Pseudocode:
  initialize a hash to contain alphabet letters as keys &
    their associated location on the chess board as values
  initialize a result var assigned to an empty str
  iterate over the input str
    if current char exists in hash as a key
      concat result with the value in hash at char key
    otherwise
      concat result with char as is
  return result
*/

function chessEncryption(msg) {
  const hash = {a:'d3',b:'d4',c:'d5',d:'d6',e:'d7',f:'e7',g:'e6',h:'e5',i:'e4',j:'e3',k:'e2',l:'f2',m:'g2',
                n:'h2',o:'h1',p:'g1',q:'f1',r:'e1',s:'d1',t:'c1',u:'b1',v:'a1',w:'a2',x:'b2',y:'c2',z:'d2'};
  return [...msg].reduce((e, c) => e + (hash[c] || c), '');
}