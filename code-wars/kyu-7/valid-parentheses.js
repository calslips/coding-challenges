/*
Write a function that takes a string of parentheses, and
determines if the order of the parentheses is valid. The
function should return true if the string is valid, and false if
it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= length of input <= 100

All inputs will be strings,
consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid),
and will be tested.
For languages with mutable strings,
the inputs should not be mutated.

Parameters: a str made up of parens
Returns: a boolean
  whether the parens in input are valid
  (open paired correctly with close)
Examples:
  validParentheses"(), true
  validParentheses("()"), true
  validParentheses("((()))"), true
  validParentheses("()()()"), true
  validParentheses("(()())()"), true
  validParentheses("()(())((()))(())()"), true
  validParentheses(")("), false
  validParentheses("()()("), false
  validParentheses("((())"), false
  validParentheses("())(()"), false
  validParentheses(")()"), false
  validParentheses(")"), false
Pseudocode:
  initialize a paren count var assigned to 0
  iterate over the input str of parens
  have a condition to stop loop if paren count is ever < 0
    if current char is an open parens
      increment paren count by 1
    otherwise
      decrement paren count by 1
  return result of condition paren count is 0
*/

function validParentheses(parenStr) {
  let c = 0;
  for (let i = 0; i < parenStr.length && c >= 0; i++) parenStr[i] === '(' ? c++ : c--;
  return !c;
}

function validParentheses(parenStr) {
  let c = 0;
  for (const p of parenStr) {
    if (c < 0) break;
    p === '(' ? c++ : c--;
  }
  return !c;
}