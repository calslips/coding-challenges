/*
Have you heard about the myth that if you fold a paper enough times,
you can reach the moon with it? Sure you have, but exactly how many?
Maybe it's time to write a program to figure it out.

You know that a piece of paper has a thickness of 0.0001m. Given distance
in units of meters, calculate how many times you have to fold the paper to
make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each fold
doubles its total thickness.)

Note: Of course you can't do half a fold. You should know what this means ;P

Also, if somebody is giving you a negative distance, it's clearly bogus and
you should yell at them by returning null (or whatever equivalent in your
  language). In Shell please return None. In C and COBOL please return -1.

Parameters: number value of distance to cover by folding
Returns: the number of times it would take to fold a piece of paper to reach the input distance
Examples:
  foldTo(384000000) // 42
  foldTo(1) // 14
  foldTo(-2342) // null
Pseudocode:
  check if input distance is less than 0
    if it is, return null
  initialize counter to 0
  initialize for loop
    set thickness to 0.0001
    set conditional to run as long as thickness < distance
    increment counter by 1 and double thickness after each iteration
  return counter
*/

function foldTo(distance) {
  if (distance < 0) return null;
  let folds = 0;
  for (let width = 0.0001; width < distance; folds++, width *= 2);
  return folds;
}