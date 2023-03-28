/*
Create a function add(n)/Add(n) which returns a function that
always adds n to any number

Parameters: a num
Returns: a fn definition that takes a num arg
  and returns the sum of outer num arg + inner num arg
Examples:
  add(1)(3), 4
  add(3)(3), 6
Pseudocode:
  return a fn that takes in a num
    return outer arg plus inner arg
*/

function add(n) {
  return i => n + i;
}