/*
Function receive a two-dimensional square array of random integers.
On the main diagonal, all the negative integers must be changed to
0, while the others must be changed to 1 (Note: 0 is considered
  non-negative, here).

(You can mutate the input if you want, but it is a better practice
  to not mutate the input)

Parameters: a 2d array
  subarrays contain nums
Returns: a 2d array
  neg nums on main diagonal changed to 0
  nums 0+ on main diagonal changed to 1
Examples:
  const array = [
    [-1,  4, -5, -9,  3 ],
    [ 6, -4, -7,  4, -5 ],
    [ 3,  5,  0, -9, -1 ],
    [ 1,  5, -7, -8, -9 ],
    [-3,  2,  1, -5,  6 ]
  ];
  matrix(array), [
    [ 0,  4, -5, -9,  3 ],
    [ 6,  0, -7,  4, -5 ],
    [ 3,  5,  1, -9, -1 ],
    [ 1,  5, -7,  0, -9 ],
    [-3,  2,  1, -5,  1 ]
  ]
Pseudocode:
  iterate over input array
    iterate over nums of subarrays
      if outer index equals inner index
        if current num is negative
          replace it with the value of 0
        otherwise
          replace it with the value of 1
        break out of current inner loop
  return modified array
*/

function matrix(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (i === j) {
        array[i][j] < 0 ? array[i][j] = 0 : array[i][j] = 1;
        break;
      }
    }
  }
  return array;
}