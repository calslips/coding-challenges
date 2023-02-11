/*
You are given a string of n lines,
each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
  vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
  hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
or printed:
vertical mirror   |horizontal mirror
abcd --> dcba     |abcd --> mnop
efgh     hgfe     |efgh     ijkl
ijkl     lkji     |ijkl     efgh
mnop     ponm     |mnop     abcd

Task:
Write these two functions and high-order function oper(fct, s)
where fct is the function of one variable f to apply to the
string s (fct will be one of vertMirror, horMirror)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

Note:
The form of the parameter fct in oper changes according to the
language. You can see each form according to the language in
"Sample Tests".

Parameters: a str
Returns: a str
  the chars within each line are reversed
Examples:
  vertMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"), "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
  vertMirror("IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"), "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP"
Pseudocode:
  split input str on new line char
  map over each line
    convert each line into an array of chars
    reverse char order
    join chars on empty str
    return reversed line
  return lines array joined on new line char
*/

function vertMirror(strng) {
  return strng.split('\n').map(l => [...l].reverse().join('')).join('\n');
}

/*
Parameters: a str
Returns: a str
  the order of the lines are reversed
Examples:
  horMirror("lVHt\nJVhv\nCSbg\nyeCt"), "yeCt\nCSbg\nJVhv\nlVHt"
  horMirror("njMK\ndbrZ\nLPKo\ncEYz"), "cEYz\nLPKo\ndbrZ\nnjMK"
Pseudocode:
  split input string on new line char
  reverse order of lines
  return array of lines joined on new line char
*/

function horMirror(strng) {
  return strng.split('\n').reverse().join('\n');
}

/*
Parameters:
  a fn
  a str
Returns: a str
Examples:
  oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"), "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
  oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"), "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP"
  oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"), "yeCt\nCSbg\nJVhv\nlVHt"
  oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"), "cEYz\nLPKo\ndbrZ\nnjMK"
Pseudocode:
  return result of calling input fn with str input as arg
*/

function oper(fct, s) {
  return fct(s);
}