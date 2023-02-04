/*
Write a function that takes a string of parentheses, and
determines if the order of the parentheses is valid. The
function should return true if the string is valid, and
false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= input.length <= 100

Parameters: a str
  containing parentheses
Returns: a boolean
  whether the input parentheses have matching pairs
Examples:
  validParentheses( "(" ), false
  validParentheses( ")" ), false
  validParentheses( "" ), true
  validParentheses( "()" ), true
  validParentheses( "())" ), false
Pseudocode:
  initialize a stack var assigned to an empty array
  iterate over the length of the input str
    if the last value on the stack is an open parenthesis
    AND the current is a close parenthesis
      pop the last value off the stack
    otherwise
      push the current value onto the stack
  if the stack has a length
    return false
  otherwise
    return true
*/

function validParentheses(parens) {
  const stack = [];
  for (let i = 0; i < parens.length; i++) stack.at(-1) === '(' && parens[i] === ')' ? stack.pop() : stack.push(parens[i]);
  return !stack.length;
}

function validParentheses(parens) {
  const stack = [];
  for (let i = 0; i < parens.length; i++) {
    if (stack.at(-1) === '(' && parens[i] === ')') stack.pop();
    else stack.push(parens[i]);
  }
  return !stack.length;
}