/*
Complete the method that will determine the minimum number of coins needed
to make change for a given amount in American currency.

Coins used will be half-dollars, quarters, dimes, nickels, and pennies,
worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the
symbols H, Q, D, N and P (symbols in Ruby, strings in in other languages)

The argument passed in will be an integer representing the value in cents.
The return value should be a hash/dictionary/object with the symbols as keys,
and the numbers of coins as values. Coins that are not used should not be
included in the hash. If the argument passed in is 0, then the method should
return an empty hash.

Parameters: a number
Returns: a dictionary containing the amount of coins
  needed of each denomination to equal the input.
  (if a value is zero, remove property)
Examples:
  makeChange(0) // {}
  makeChange(1)  // {"P":1}
  makeChange(43) // {"Q":1, "D":1, "N":1, "P":3}
  makeChange(91) // {"H":1, "Q":1, "D":1, "N":1, "P":1}
Pseudocode:
  initialize dict to contain coin count for each denomination,
    initial value of 0
  for each coin denomination (high to low)
  check how many times the respective coin can fit in the input number
    if 1x or more
      add H to dict,
      with its value being the floored number of times it can fit
      pass remainder amount (if any) to next coin denomination
    if none,
      do not add H to dict
  repeat the above steps 5 times
    (for each denomination; H, Q, D, N, P)
  return dict
*/

const makeChange = (amount) => {
  return [['H', 50], ['Q', 25], ['D', 10], ['N', 5], ['P', 1]]
    .reduce((o, [p, v]) => (q = Math.floor(amount / v)) > 0 ? (amount -= v * q, o[p] = q) && o : o, {});
};