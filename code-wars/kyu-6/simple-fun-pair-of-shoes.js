/*
Yesterday you found some shoes in your room. Each shoe is
described by two values:

type indicates if it's a left or a right shoe;
size is the size of the shoe.

Your task is to check whether it is possible to pair the shoes
you found in such a way that each pair consists of a right and
a left shoe of an equal size.

Example
For:
shoes = [[0, 21],
         [1, 23],
         [1, 21],
         [0, 23]]
the output should be true;

For:
shoes = [[0, 21],
         [1, 23],
         [1, 21],
         [1, 23]]
the output should be false.

Input/Output
[input] 2D integer array shoes
Array of shoes. Each shoe is given in the format [type, size],
where type is either 0 or 1 for left and right respectively,
and size is a positive integer.
Constraints: 2 ≤ shoes.length ≤ 50,  1 ≤ shoes[i][1] ≤ 100.

[output] a boolean value
true if it is possible to pair the shoes, false otherwise.

Parameters: a 2d array
  each sub array contains 2 nums
Returns: a boolean
  whether each subarray has a corresponding pair
Examples:
  pairOfShoes([[0,20],[0,21],[1,19],[1,22]]), false
  pairOfShoes([[0, 21], [1, 23], [1, 21], [0, 23]]), true
  pairOfShoes([[0, 23], [1, 23], [1, 23], [0, 23], [0, 23], [0, 23]]), false
  pairOfShoes([[0, 21], [1, 23], [1, 21], [1, 23]]), false
  pairOfShoes([[0, 23], [1, 21], [1, 23], [0, 21], [1, 22], [0, 22]]), true
  pairOfShoes([[0, 23], [1, 21], [1, 23], [0, 21]]), true
  pairOfShoes([[0, 23], [1, 21], [1, 23], [0, 21]]), true
  pairOfShoes([[0, 23]]), false
  pairOfShoes([[0, 23], [1, 23]]), true
  pairOfShoes([[0, 23], [1, 22]]), false
Pseudocode:
  initialize a pairs var assigned to an empty obj
  iterate over the shoes array
    use num at 1st index as a key in obj
    if it does not exist
      initialize it as 0
    if num at 0th index is 0
      subtract 1 from value
    otherwise if num at 0th index is 1
      add 1 to value
  return whether every value in pairs obj is 0
*/

function pairOfShoes(shoes) {
	const pairs = {};
  for (const [type, size] of shoes) {
    if (!(size in pairs)) pairs[size] = 0;
    type ? ++pairs[size] : --pairs[size];
  }
  return Object.values(pairs).every(v => !v);
}