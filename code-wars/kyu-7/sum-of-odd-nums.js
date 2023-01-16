/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle
(starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

Parameters: a num
  row of odds to add up
Returns: a num
  sum of all odds within the same row
Examples:
  rowSumOddNumbers(1), 1
  rowSumOddNumbers(42), 74088
Pseudocode:
  initialize an odds var assigned to an empty array
  create a loop to run from 0 to n
  have an odd var initially set to -1
  increment counter by 1
    initialize a row array with the length of counter + 1
      for each el, add value of odd incremented by 2
  access the odds at index input num minus 1
  sum all the values within the row
  return row sum
*/

function rowSumOddNumbers(n) {
	const odds = [];
  for (let i = 0, odd = -1; i < n; i++) odds[i] = Array.from({length: i + 1}, e => odd += 2);
  return odds[--n].reduce((s, n) => s + n, 0);
}