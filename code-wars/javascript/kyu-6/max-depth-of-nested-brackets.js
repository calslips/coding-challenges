/*
Given a balanced string with brackets like: "AA(XX((YY))(U))" find the
substrings that are enclosed in the greatest depth.

Example:
String:  A   A   (   X   X   (   (   Y   Y   )   )   (   U   )   )
Level:        1        2  3       3  2  2    2  1

Therefore, answer:
  { "YY" } since the substring "YY" is locked at the deepest level.
If several substring are at the deepest level,
return them all in a list in order of appearance.

The string includes only uppercase letters, parenthesis '(' and ')'.
If the input is empty or doesn't contain brackets,
an array containing only the original string must be returned.

Parameters: a str
Returns: an array of strs
Examples:
  stringsInMaxDepth("AA(XX((YY))(U))"), ["YY"]
  stringsInMaxDepth("((AAX(AB)(UP)F(Z))(HH))"), ['AB', 'UP', 'Z']
  stringsInMaxDepth("AAA"), ["AAA"]
  stringsInMaxDepth(""), [""]
Pseudocode:
  initialize a deepStrings var assigned to an empty array
  if input length is 0
    push input to deepStrings
    return deepStrings
  iterate over the length of the input str
  keep track of index, depth, and max (all start at 0)
  increment index, if current char is an open parens inc depth, if close dec depth
    find first indices of opening and closing parens from current index
    if both are less than 0
      push input to deepStrings and return it
    if current index is less than either parens index AND depth >= max
      if depth is greater than max
        reassign max to equal depth
        clear deepStrings
      slice str from current index to open/close paren (whichever is less)
      push sliced str to deepStrings
    if current char is a letter
      reassign index to be open/close paren index (lower val) - 1
  return deepStrings
*/

function stringsInMaxDepth(s) {
  if (!s.length || (firstBracket = s.indexOf('(')) < 0) return [s];
  const deepStrings = [], lastBracket = s.lastIndexOf(')');
  for (let i = firstBracket, depth = 0, max = 0; i < lastBracket; i++) {
    const nextBracket = Math.min(...[s.indexOf('(', i + 1), s.indexOf(')', i + 1)].filter(n => n > i));
    if (s[i] === '(') depth++;
    if (s[i] === ')') depth--;
    if (depth > max) max = depth, deepStrings.length = 0;
    if (depth === max) deepStrings.push(s.slice(i + 1, nextBracket));
    i = nextBracket - 1;
  }
  return deepStrings;
}

function stringsInMaxDepth(s) {
  if (!(s.length && s.includes('('))) return [s];
  const deepStrings = [], lastBracket = s.lastIndexOf(')');
  for (let i = s.indexOf('('), depth = 0, max = 0; i < lastBracket; i++) {
    const [open, close] = [s.indexOf('(', i), s.indexOf(')', i)];
    if (open === i && depth++) {
      if (close === open + 1) {
        if (depth > max) max = depth, deepStrings.length = 0;
        if (depth === max) deepStrings.push('');
      }
      continue;
    }
    if (close === i && depth--) continue;
    const nextBracket = Math.min(...[open, close].filter(n => n >= 0));
    if (depth > max) max = depth, deepStrings.length = 0;
    if (depth === max) deepStrings.push(s.slice(i, nextBracket));
    i = nextBracket - 1;
  }
  return deepStrings;
}