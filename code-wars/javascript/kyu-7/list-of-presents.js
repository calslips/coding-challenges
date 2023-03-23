/*
Leo's girlfriend asked him to buy a gift list during his next trip,
now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the
function is Leo's budget; the second one is an array containing
the price of each gift. You should return an integer representing
the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0,
  and the array will never be empty. _

Parameters:
  a num
  an array of nums
Returns: a num
  the max count of nums from input array
  that can fit within input num
Examples:
  howManyGifts(20, [13, 2, 4, 6, 1]), 4
  howManyGifts(0, [1]), 0
Pseudocode:
  initialize a count var assigned to 0
  sort array ascending
  iterate over sorted array
    if current value is less than or equal to num input
      increment count
      reassign num input to equal itself minus current value
    otherwise
      break out of loop
  return count
*/

function howManyGifts(maxBudget, gifts) {
  let count = 0;
  for (const gift of [...gifts].sort((a, b) => a - b)) {
    if (gift > maxBudget) break;
    maxBudget -= gift, count++;
  }
  return count;
}

function howManyGifts(maxBudget, gifts) {
  return [...gifts].sort((a, b) => a - b).reduce((c, n) => n > maxBudget ? c : (maxBudget -= n, ++c), 0);
}