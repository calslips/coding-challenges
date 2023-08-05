/*
In this kata you need to write a function that will receive two
strings (n1 and n2), each representing an integer as a binary
number. A third parameter will be provided (o) as a string
representing one of the following operators:
add, subtract, multiply.

Your task is to write the calculate function so that it will
perform the arithmetic and the result returned should be a
string representing the binary result.

Examples:

1 + 1 === 10
10 + 10 === 100

Negative binary numbers are usually preceded by several 1's.
For this kata, negative numbers can be represented with the
negative symbol at the beginning of the string.

Examples of negatives:

1 - 10 === -1
10 - 100 === -10

Parameters: 3 strs
Returns: a str
Examples:
  calculate('1', '1', 'add'), '10'
  calculate('10', '10', 'add'), '100'
  calculate('1', '10', 'subtract'), '-1'
  calculate('10', '100', 'subtract'), '-10'
Pseudocode:
  define add, subtract, and muliply helper fns
    each will convert the input binary strs to ints
      perform the respective operation on the nums
      and return the result converted to binary

  main fn
    if o is add
      return result of add fn called with 1st 2 args
    if o is subtract
      return result of subtract fn called with 1st 2 args
    if o is multiply
      return result of multiply fn called with 1st 2 args
*/

function calculate(n1, n2, o) {
  return (o === 'add' ? add : o === 'subtract' ? subtract : multiply)(n1, n2);
}

function add(n1, n2) {
  return (parseInt(n1, 2) + parseInt(n2, 2)).toString(2);
}

function subtract(n1, n2) {
  return (parseInt(n1, 2) - parseInt(n2, 2)).toString(2);
}

function multiply(n1, n2) {
  return (parseInt(n1, 2) * parseInt(n2, 2)).toString(2);
}