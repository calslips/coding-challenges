/*
In this Kata, you will be given a string and two indexes
(a and b). Your task is to reverse the portion of that
string between those two indices inclusive.

solve("codewars",1,5) = "cawedors"
  -- elements at index 1 to 5 inclusive are "odewa".
  So we reverse them.
solve("cODEWArs", 1,5) = "cAWEDOrs"
  -- to help visualize.

Input will be lowercase and uppercase letters only.

The first index a will always be lower that than the
string length; the second index b can be greater than the
string length.

Parameters:
  a str
  a num (start index)
  a num (end index)
Returns:
  str with the characters within start index to end index (inclusive), reversed
Examples:
  solve("codingIsFun", 2, 100), "conuFsIgnid"
  solve("FunctionalProgramming", 2, 15), "FuargorPlanoitcnmming"
  solve("abcdefghijklmnopqrstuvwxyz", 0, 20), "utsrqponmlkjihgfedcbavwxyz"
  solve("abcdefghijklmnopqrstuvwxyz", 5, 20), "abcdeutsrqponmlkjihgfvwxyz"
Pseudocode:
  initialize a before var assigned to portion of str before start index
  initialize an after var assigned to portion of str after end index
  initialze a reverse var assigned to portion of str within start & end indices
  reverse order of reverse var chars
    convert to an arr of chars
    call reverse method on it
    join arr of chars into a str (on empty str)
  return concatenation of before, reverse and after
*/

function solve(st, a, b) {
  return st.slice(0, a) + [...st.slice(a, b + 1)].reverse().join('') + st.slice(b + 1);
}