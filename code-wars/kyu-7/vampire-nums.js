/*
Our loose definition of Vampire Numbers can be described as follows:

6 * 21 = 126
# 6 and 21 would be valid 'fangs' for a vampire number as the
# digits 6, 1, and 2 are present in both the product and multiplicands

10 * 11 = 110
# 110 is not a vampire number since there are three 1's in the
# multiplicands, but only two 1's in the product

Create a function that can receive two 'fangs' and determine if the
product of the two is a valid vampire number.

Parameters: 2 nums
Returns: a boolean
  if all digits from inputs are present in their product
Examples:
  vampire_test(21, 6), true
  vampire_test(204, 615), true
  vampire_test(30, -51), true
  vampire_test(-246, -510), false
  vampire_test(2947050, 8469153), true
  vampire_test(2947051, 8469153), false
Pseudocode:
  initialize a cache obj
  convert input nums to strs and add digits as keys to cache, value as count
  get product of inputs, convert to str, iterate over str
    if current digit does not exist in cache or its value is 0
      return false
    otherwise
      decrement the value found at digit key
  if every value in cache is 0
    return true
  otherwise
    return false
*/

const vampire_test = function(a, b) {
  const cache = [...`${a}${b}`].reduce((o, k) => (o[k] = ++o[k] || 1, o), {});
  for (const d of `${a * b}`) {
    if (!cache[d]) return false;
    cache[d]--;
  }
  return Object.values(cache).every(v => !v);
};