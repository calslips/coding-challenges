/*
Given a two-dimensional array representation of a glass of mixed
liquids, sort the array such that the liquids appear in the glass
based on their density. (Lower density floats to the top) The
width of the glass will not change from top to bottom.

======================
|   Density Chart    |
======================
| Honey   | H | 1.36 |
| Water   | W | 1.00 |
| Alcohol | A | 0.87 |
| Oil     | O | 0.80 |
----------------------

[                            [
 ['H', 'H', 'W', 'O'],        ['O','O','O','O']
 ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
 ['H', 'H', 'O', 'O']         ['H','H','H','H']
 ]                           ]

The glass representation may be larger or smaller. If a liquid
doesn't fill a row, it floats to the top and to the left.

Parameters: 2d array containing single char strs
Returns: 2d array containing single char strs
  ordered from lowest density to highest density
Examples:
  separateLiquids([['A','A','O','H'],['A', 'H', 'W', 'O'],['W','W','A','W'],['H','H','O','O']]), [['O','O','O','O'],['A', 'A', 'A', 'A'],['W','W','W','W'],['H','H','H','H']]
  separateLiquids([['A','H','W','O']]), [['O','A','W','H']]
  separateLiquids([['A'],['H'],['W'],['O']]), [['O'],['A'],['W'],['H']]
  separateLiquids([]), []
Pseudocode:
  if the input array is empty
    return an empty array
  create a hash containing the density chart
  obtain the length of the sub arrays
  flatten the input array
  sort the flattened array by densities
  separate the elements into subarrays
    (length = original subarray length)
  return newly ordered 2d array
*/

function separateLiquids(glass) {
  if (!glass.length) return glass;
  const length = glass[0].length,
        density = {'H': 1.36, 'W': 1.00, 'A': 0.87, 'O': 0.80},
        flat = glass.reduce((f, s) => (f.push(...s), f), []),
        results = [];
  flat.sort((a, b) => density[a] - density[b]);
  for (let i = 0; i < flat.length; i += length) results.push(flat.slice(i, i + length));
  return results;
}