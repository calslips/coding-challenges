/*
Write function which validates an input string.
If the string is a perfect square return true, false otherwise.

What is perfect square?
* We assume that character '.' (dot) is a perfect square (1x1)
* Perfect squares can only contain '.' (dot) and optionally '\n'
  (line feed) characters.
* Perfect squares must have same width and height -> cpt.Obvious
* Squares of random sizes will be tested!

Function input:
perfectSquare = "...\n...\n...";
// This represents the following Perfect Square:
`...
 ...
 ...`

notPerfect = "..,\n..\n...";
// This is not a Perfect Square:
`..,
 ..
 ...`

Parameters: a str
Returns: a boolean
  whether input str is a perfect sq
Examples:
  perfectSquare("..\n.."), true
  perfectSquare("...\n...\n..."), true
  perfectSquare("...\n,..\n..."), false
  perfectSquare(",,,\n,,,\n,,,"), false
Pseudocode:
  split input str on new line char (array of lines)
  if every line (el) length equals array of lines length
  AND each line equals a str of '.'s of the same length
    return true
  otherwise
    return false
*/

function perfectSquare(string) {
  return string.split('\n').every((l, _, a) => l.length === a.length && l === '.'.repeat(l.length));
}