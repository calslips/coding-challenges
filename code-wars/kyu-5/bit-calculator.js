/*
In this kata your task is to create bit calculator.
Function arguments are two bit representation of numbers
("101","1","10"...), and you must return their sum in decimal
representation.

Test.expect(calculate("10","10") == 4);
Test.expect(calculate("10","0") == 2);
Test.expect(calculate("101","10") == 7);

parseInt and some Math functions are disabled.
Those Math functions are enabled: pow,round,random

Parameters: 2 strs
  representing bin nums
Returns: a num
  input bins converted to num & summed
Examples:
  calculate("1","1"), 2
  calculate("10","10"), 4
  calculate("10","0"), 2
  calculate("10","1"), 3
Pseudocode:
  convert both input bins to nums
  sum them
  return sum
*/

function calculate(num1,num2) {
  return [num1, num2].map(b => [...b].reduce((d, c) => d * 2 + +c, 0)).reduce((s, n) => s + n);
}