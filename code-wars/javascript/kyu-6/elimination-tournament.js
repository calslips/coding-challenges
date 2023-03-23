/*
In this Kata you will be given an array
(or another language-appropriate collection) representing contestant ranks.
You must eliminate contestant in series of rounds comparing consecutive
pairs of ranks and store all initial and intermediate results in an array.

During one round, the lowest rank of a pair is eliminated while the highest
proceeds to the next round. This goes on until one contestant only is left.
If the number of contestants is odd, the last one of the current array
becomes the first of the next round.

At the end of the competition, return the results of all the rounds in the
form of array of arrays.

Example:
input = [9, 5, 4, 7, 6, 3, 8, 2];

output = [
  [9, 5, 4, 7, 6, 3, 8, 2],  // first round is initial input
  [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2
  [9, 8],                    // results of 9 vs 7 and 6 vs 8
  [9]                        // results of 9 vs 8
];
Notes:

Array length will alway be >= 2 and <= 100
Elements of the array will always be >=1 and <= 100
Input must not be altered.

Parameters: an array of numbers
Returns: an array of arrays containing numbers
Examples:
  tourney([9, 5, 4, 7, 6, 3, 8, 2])
    // [
         [9, 5, 4, 7, 6, 3, 8, 2],
         [9, 7, 6, 8],
         [9, 8],
         [9]
       ]
  tourney([9, 5, 4, 7, 6, 3, 8])
    // [
         [9, 5, 4, 7, 6, 3, 8],
         [8, 9, 7, 6],
         [9, 7],
         [9]
       ]
Pseudocode:
  initialize a result variable assigned to an empty array
  initialize a round variable assigned to an empty array
  create a loop to iterate over input array as long as its length > 1
    if it is the first round (result has no length)
      push a copy of input array to result
    otherwise
      create a new loop to iterate over length of the input array
      (incremented by 2 after each iteration)
        if current index is equal to the last index
          insert current at the start of the round
        otherwise
          compare current value with next value & push higher to round
    push round to result
    reassign array to equal round
    reassign round to an empty array
  return result
*/

const tourney = array => {
  let result = [], round = [];
  while (array.length > 1) {
    if (!result.length) result.push([...array]);
    else {
      for (let i = 0; i < array.length; i += 2) {
        if (i === array.length - 1) round.unshift(array[i]);
        else array[i] > array[i + 1] ? round.push(array[i]) : round.push(array[i + 1]);
      }
      result.push(round), array = round, round = [];
    }
  }
  return result;
}