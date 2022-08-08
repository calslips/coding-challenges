/*
Winter is coming, you must prepare your ski holidays. The objective of
his kata is to determine the number of pair of gloves you can constitute
from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of
pairs you can constitute, assuming that only gloves of the same color can
form pairs.

Parameters: an array of strings
  (each string is a color)
Returns: a number
  (the number of pairs of colors
  from input array)
Examples:
  numberOfPairs(['red', 'red']) // 1
  numberOfPairs(['red', 'green', 'blue']) // 0
  numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']) // 3
  numberOfPairs(['red', 'green', 'red', 'blue', 'blue']) // 2
  numberOfPairs(['red', 'red', 'red', 'red', 'red', 'red']) // 3
Pseudocode:
  create an object to keep track of colors and their count
  convert object to an array of values (count)
  get the floor values of each array value divided by 2 and sum them
  return the sum
*/

function numberOfPairs(gloves) {
  return Object.values(gloves.reduce((o, k) => (o[k] = ++o[k] || 1, o), {})).reduce((s, v) => s + Math.floor(v / 2), 0);
}