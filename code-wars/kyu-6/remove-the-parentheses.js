/*
In this kata you are given a string for example:
"example(unwanted thing)example"

Your task is to remove everything inside the parentheses as well
as the parentheses themselves.

The example above would return:
"exampleexample"

Notes
Other than parentheses only letters and spaces can occur in the
  string. Don't worry about other brackets like "[]" and "{}" as
  these will never appear.
There can be multiple parentheses.
The parentheses can be nested.

Parmaeters: a str
Returns: a str
  parts of str within parentheses removed (inclusive)
Examples:
  removeParentheses("example(unwanted thing)example"), "exampleexample"
  removeParentheses("example (unwanted thing) example"), "example  example"
  removeParentheses("a (bc d)e"), "a e"
  removeParentheses("a(b(c))"), "a"
  removeParentheses("hello example (words(more words) here) something"), "hello example  something"
  removeParentheses("(first group) (second group) (third group)"), "  "
Pseudocode:
  initialize a stack var assigned to an empty array
    (to contain the index of the opening parenthesis)
  iterate over the input str
    if current is an opening parenthesis
      push current index to the stack
    otherwise if current is a closing parenthesis
      reassign s to be slice from 0 to pop last value off stack concat'd with slice of current index + 1 to end
      reassign current index to equal the last value on stack - 1
    return modified str

// replaced splicing with slicing (splice = O(n) vs str slice = O(1))
//       splice array of chars, delete from pop last value off stack, count current index - pop value + 1
//       reassign current index to equal the last value on stack - 1
//   return array of chars joined into a str
*/

// slice
function removeParentheses(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(i);
    else if (s[i] === ')') s = s.slice(0, (last = stack.pop())) + s.slice(i + 1), i = last - 1;
  }
  return s;
}

// splice
function removeParentheses(s) {
  const stack = [], result = [...s];
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '(') stack.push(i);
    else if (result[i] === ')') result.splice((last = stack.pop()), i - last + 1), i = last - 1;
  }
  return result.join('');
}

// other
function removeParentheses(s) {
  let count = 0, result = '';
  for (const char of s) {
    if (char === "(") count++;
    if (count === 0) result += char;
    if (char === ")") count--;
  }
  return result;
}