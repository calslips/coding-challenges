/*
In this Kata, you will be given a string and your task
will be to return a list of ints detailing the count of
uppercase letters, lowercase, numbers and special characters,
as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3].
--the order is:
uppercase letters, lowercase, numbers and special characters.

Parameters: a str
Returns: an arr of nums
  arr contains 4 nums, each represents the
  count of uppercase letters, lowercase letters,
  nums, and special chars found in the input
  str respectively
Examples:
  solve(""), [0,0,0,0]
  solve("aAbBcC"), [3,3,0,0]
  solve("Codewars@codewars123.com"), [1,18,3,2]
  solve("bgA5<1d-tOwUZTS8yQ"), [7,6,3,2]
  solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"), [9,9,6,9]
  solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"), [15,8,6,9]
  solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6]
  solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10]
Pseudocode:
  convert the input str into an array of chars
  initialize a matrix var assigned to an array containing 4 0's
  iterate over the arr of chars
    if current char is an uppercase letter
      increment value in matrix at index 0 by 1
    if current char is a lowercase letter
      increment value in matrix at index 1 by 1
    if current char is a number
      increment value in matrix at index 2 by 1
    otherwise
      increment value in matrix at index 3 by 1
  return matrix
*/

function solve(s) {
  return [...s].reduce((m, c) => {
    if (c.charCodeAt() > 64 && c.charCodeAt() < 91) return m[0] += 1, m;
    else if (c.charCodeAt() > 96 && c.charCodeAt() < 123) return m[1] += 1, m;
    else if (!isNaN(c)) return m[2] += 1, m;
    else return m[3] += 1, m;
  }, [0, 0, 0, 0]);
}