/*
In this Kata, we are going to reverse a string while
maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo".
-- However, there is a space at index 3, so the string
becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy".
solve("codewars") = "srawedoc"

Parameters: a str
Returns: a str
  the input reversed,
  but spaces maintained in og order
Examples:
  solve("codewars"), "srawedoc"
  solve("your code"), "edoc ruoy"
  solve("your code rocks"), "skco redo cruoy"
  solve("i love codewars"), "s rawe docevoli"
Pseudocode:
  initialize a result var assigned to an empty str
  initialize a revArr var assigned to
    input str reversed & spaces removed
  iterate over the length of revArr
  initialize counter for revArr index & input str index,
  run through all elements of revArr
  increment both counters after each iteration
    if current char in input str is a space
      concat result with a space
      increment input str index counter
    concat result with current revArr char
  return result
    if input str ends in a space,
    concat result with space
*/

function solve(str) {
  let result = '', revArr= [...str.split(' ').join('')].reverse();
  for (let ri = 0, ii = 0; ri < revArr.length; ri++, ii++) {
    if (str[ii] === ' ') result += ' ', ii++;
    result += revArr[ri];
  }
  return result + (str.endsWith(' ') ? ' ' : '');
}