/*
Here you have to do some mathematical operations on a "dirty string".
This kata checks some basics, it's not too difficult.

So what to do?

Input: String which consists of two positive numbers (doubles) and
exactly one operator like +, -, * or / always between these numbers.
The string is dirty, which means that there are different characters
inside too, not only numbers and the operator. You have to combine all
digits left and right, perhaps with "." inside (doubles), and to
calculate the result which has to be rounded to an integer and
converted to a string at the end.

Easy example:
Input: "gdfgdf234dg54gf*23oP42"
Output: "54929268" (because 23454*2342=54929268)

Parameters: a string
  containing all kinds of chars
Returns: a string
  containing the rounded integer result
  of the operation found in original input
Examples:
  calculateString(";$%§fsdfsd235??df/sdfgf5gh.000kk0000") // "47"
  calculateString("sdfsd23454sdf*2342") // "54929268"
  calculateString("fsdfsd235???34.4554s4234df-sdfgf2g3h4j442") // "-210908"
  calculateString("fsdfsd234.4554s4234df+sf234442") // "234676"
  calculateString("a1a2b3c.c0c/a1a0b.cc00c") // '12'
Pseudocode:
  split string on operator (+, -, *, /)
  initialize operand1 var to be 0 index of split
    convert to array and reduce to keep only nums or '.'
    convert to number
  initialize operand2 var to be 1 index of split
    convert to array and reduce to keep only nums or '.'
    convert to number
  access char at index of 1st half of split length
  if char is +
    add operands, round and return sum converted to string
  if char is -
    subtract operands, round and return difference converted to string
  if char is *
    multiply operands, round and return product converted to string
  if char is /
    divide operands, round and return quotient converted to string
*/

function calculateString(st) {
  const split = st.split(/[+\-*\/]/),
        operand1 = Number([...split[0]].reduce((n, c) => !isNaN(parseInt(c)) || c === '.' ? n + c : n, '')),
        operand2 = Number([...split[1]].reduce((n, c) => !isNaN(parseInt(c)) || c === '.' ? n + c : n, '')),
        operator = st[split[0].length];
  if (operator === '+') return Math.round(operand1 + operand2).toString();
  else if (operator === '-') return Math.round(operand1 - operand2).toString();
  else if (operator === '*') return Math.round(operand1 * operand2).toString();
  else if (operator === '/') return Math.round(operand1 / operand2).toString();
}