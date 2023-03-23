/*
Unscramble the eggs.

The string given to your function has had an "egg" inserted
directly after each consonant. You need to return the string
before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"

Parameters: a str
Returns: a str
  (with all "egg"s removed)
Examples:
  unscrambleEggs("ceggodegge heggeregge"), "code here"
  unscrambleEggs("FeggUNegg KeggATeggA"), "FUN KATA"
Pseudocode:
  split input str on str 'egg',
  then rejoin split str on empty str ''
  return modified str
*/

function unscrambleEggs(word) {
  return word.split('egg').join('');
}