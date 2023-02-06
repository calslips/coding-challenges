/*
Given a string, write a function that returns true if that string
contains valid (or balanced) braces, including () [] {}. Also
include the number of pairs of balanced braces and the number of
leftover braces in the form of a tuple: [true/false, number of
pairs of balanced braces, number of leftover braces]. The number
of leftover braces include open and close braces, so count them
seperately and not as pairs.

By balanced, I mean that each brace is closed in the reverse order
in which it was opened (e.g. the first brace opened should be the
  last one closed and the last one opened should be the first one
  closed).

For example, in the string "(string[5])", the first brace opened is
( and the second one opened is [, which means the [ should be closed
  first and the ( closed last. Since this is the case, the function
    should return true because it is balanced and because there are
    two balanced braces and no unbalanced braces, it should also
    return 2 and 0 in this format: [true, 2, 0].

There may be characters between the braces. The string may also be
empty, in which case return [true, 0, 0] because it's technically
balanced.

Example:
isBalanced("(string[5])") => [true, 2, 0]

isBalanced("(string[)5]") => [false, 0, 4]

isBalanced("") => [true, 0, 0]

isBalanced("(([()]))") => [true, 4, 0]

isBalanced("({)}") => [false, 0, 4]

Constraints:
25 <= string length <= 250
Input: string
Output: Array [if balanced (bool), number of balanced braces,
  number of leftover braces]
Edge Cases: string could be empty

Parameters: a str
Returns: an array containing
  a boolean
    whether input contains valid braces
  a num
    count of balanced brace pairs
  a num
    count of unbalanced brace pairs
Examples:
  isBalanced("((()))"), [true, 3, 0]
  isBalanced("(string[5])"), [true, 2, 0]
  isBalanced(""), [true, 0, 0]
  isBalanced("(([()]))"), [true, 4, 0]
  isBalanced("()[]{}"), [true, 3, 0]
  isBalanced("([{}])((){}[{}])"), [true, 8, 0]
  isBalanced("((())"), [false, 2, 1]
  isBalanced("(string[)5]"), [false, 0, 4]
  isBalanced("(string[)5])"), [false, 0, 5]
  isBalanced("("), [false, 0, 1]
  isBalanced("((()]))"), [false, 1, 5]
  isBalanced("()[{]{}}"), [false, 2, 4]
  isBalanced("([{}])()(){}[{}])"), [false, 8, 1]
Pseudocode:
  initialize a stack var assigned to an empty array
  initialize a braces var assigned to a str containing all braces
  initialize a pairs count assignd to an obj that maps brace pairs
  initialize a valid pairs count var assigned to 0
  iterate over the input str
    if current char exists within braces
      if last stack el maps to current brace as valid pair
        pop the last el off the stack
        increment valid pairs count by 1
      otherwise
        push current brace to stack
  return an array containing
    whether stack is empty
    valid pairs count
    stack length
*/

function isBalanced(string) {
  let stack = [], braces = '()[]{}', pairs = {'(' : ')', '[' : ']', '{' : '}'}, validCount = 0;
  for (const char of string) if (braces.includes(char)) pairs[stack.at(-1)] === char ? stack.pop() && validCount++ : stack.push(char);
  return [!stack.length, validCount, stack.length];
}