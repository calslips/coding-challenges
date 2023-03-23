/*
Write a function that takes a string of braces, and determines
if the order of the braces is valid. It should return true if
the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but
introduces new characters: brackets [], and curly braces {}.

All input strings will be nonempty, and will only consist of
parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are
matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

Parameters: a str
  containing parentheses, sq brackets, curly braces
Returns: a boolean
  whether input str contains valid brace pairs
Examples:
  validBraces("()))", false
  validBraces("()", true
  validBraces("[]", true
  validBraces("{}", true
  validBraces("(){}[]", true
  validBraces("([{}])", true
  validBraces("(}", false
  validBraces("[(])", false
  validBraces("({})[({})]", true
  validBraces("(})", false
  validBraces("(({{[[]]}}))", true
  validBraces("{}({})[]", true
  validBraces(")(}{][", false
  validBraces("())({}}{()][][", false
  validBraces("(((({{", false
  validBraces("}}]]))}])", false
Pseudocode:
  create a map to link close brace keys to open brace values
  initialize stack var assigned to an array
  iterate over the input str
    if the current char exists in map &
    its respective map value equals the last char on stack
      pop last char off the stack
    otherwise
      push current char onto stack
  if stack is empty
    return true
  otherwise
    return false
*/

function validBraces(braces) {
  const pairs = {'(': ')', '[': ']', '{': '}'}, stack = [];
  for (const brace of braces) pairs[stack.at(-1)] === brace ? stack.pop() : stack.push(brace);
  return !stack.length;
}

function validBraces(braces) {
  const pairs = {')': '(', ']': '[', '}': '{'}, stack = [];
  for (const brace of braces) brace in pairs && pairs[brace] === stack.at(-1) ? stack.pop() : stack.push(brace);
  return !stack.length;
}