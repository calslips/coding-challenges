/*
Tolkein's publisher wishes to implement an online store for the
"Lord of the Rings" and "The Hobbit" books. Each book costs $10.
However, if 2 titles are purchased, a 5% discount will be received,
i.e. purchasing "Fellowship of the Ring" and "Two Towers" will cost $19.
If 3 different titles are purchased, a 10% discount will be received.
The purchase of all 4 different titles will receive a 20% discount.
An additional single title will be full-price.

The encoding of an order will be in the form of strings in an array.
For example: [“F”, “T”, “R”, “H”, “H”] is the encoding of 2 copies of
"The Hobbit" and a single copy of each of the titles in the
"Lord of the Rings" trilogy.

The expected output is a number.
E.g. 42 is the expected output for the example above.
The output should be the cheapest total cost.
For example - if the book order is ["F", "T", "H", "F", "T", "R"],
valid total costs include (3*10 discounted by 10%) + (3*10 discounted by 10%)
and (4*10 discounted by 20%) + (2*10 discounted by 5%).
The cheapest total cost is 51.

Parameters: an array of strs
Returns: a num
Examples:
  calculateCartTotal(["F"]), 10
  calculateCartTotal(["R"]), 10
  calculateCartTotal(["T"]), 10
  calculateCartTotal(["H"]), 10
  calculateCartTotal(["F", "F"]), 20
Pseudocode:
  create a map of book titles and their quantities within input
  initialize a total var to equal 0
  iterate over the keys of map
    maintain count of discount purchase
    for each title (key)
      decrement value in map
        delete if value reaches 0
      increment count
    if count is 1
      add 10 to total
    if count is 2
      add 20 minus 5% to total
    if count is 3
      add 30 minus 10% to total
    otherwise
      add 40 minus 20% to total
  return total
*/

function calculateCartTotal(cart) {
  let map = cart.reduce((m, k) => (m.set(k, m.get(k) + 1 || 1), m), new Map), total = 0;
  while (map.size) {
    let count = 0;
    map.forEach((v, k, m) => (--v ? m.set(k, v) : m.delete(k)) && count++);
    total += count * 10 * (count === 4 ? .8 : count === 3 ? .9 : count === 2 ? .95 : 1);
  }
  return total;
}