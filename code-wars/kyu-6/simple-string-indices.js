/*
In this Kata, you will be given a string with brackets and an
index of an opening bracket and your task will be to return the
index of the matching closing bracket. Both the input and
returned index are 0-based except in Fortran where it is 1-based.
An opening brace will always have a closing brace. Return -1 if
there is no answer.
Input will consist of letters, numbers and special characters,
but no spaces. The only brackets will be ( and ).

Parameters:
  a str
  a num
    index of an open parenthesis within str
Returns: a num
  index of matching close parenthesis
Examples:
  solve("((1)23(45))(aB)", 0), 10
  solve("((1)23(45))(aB)", 1), 3
  solve("((1)23(45))(aB)", 2), -1
  solve("((1)23(45))(aB)", 6), 9
  solve("((1)23(45))(aB)", 11), 14
  solve("(g(At)IO(f)(tM(qk)YF(n)Nr(E)))", 11), 28
  solve("(g(At)IO(f)(tM(qk)YF(n)Nr(E)))", 0), 29
  solve("(>_(va)`?(h)C(as)(x(hD)P|(fg)))", 19), 22
Pseudocode:
  if char at input index is NOT an open parenthesis
    return -1
  initialize a parens count var assigned to 1
  create a loop to run as long as parens count is NOT 0
    if char at index arg incremented by 1 is a open parens
      add 1 to parens count
    otherwise if char at index arg incremented by 1 is a close parens
      subtract 1 from parens count
  return updated index arg
*/

function solve(s, i) {
  if (s[i] !== '(') return -1;
  let p = 1;
  while (p) s[++i] === '(' && p++ || s[i] === ')' && p--;
  return i;
}

function solve(s, i) {
  if (s[i] !== '(') return -1;
  let p = 1;
  while (p) {
    if (s[++i] === '(') p++;
    else if (s[i] === ')') p--;
  }
  return i;
}