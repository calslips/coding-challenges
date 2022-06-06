/*
Write a function sum that accepts an unlimited number of integer arguments,
and adds all of them together.

The function should reject any arguments that are not integers,
and sum the remaining integers.

sum(1, 2, 3)   // -> 6
sum(1, "2", 3) // -> 4

Parameters: accepts any amount of parameters of any type
Returns: the sum of all args that are integers
Examples:
  sum(1,11,111) // 123
  sum(4,true,4,"A",4,"99") // 12
    (should reject non integers)
Pseudocode:
  initialize sum variable assigned to 0 (zero)
  collect all args into an array
  iterate over the array
    if element is an integer
      add value to sum
    otherwise
      continue with next iteration
  return sum
*/

function sum(...a) {
  return a.reduce((s, e) => Number.isInteger(e) ? s + e : s, 0);
}