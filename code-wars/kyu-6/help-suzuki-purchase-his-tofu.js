/*
Suzuki has sent a lay steward to market who will purchase some items not
produced in the monastary gardens for the monks. The stewart has with him
a large box full of change from donations earlier in the day mixed in with
some personal items. You will be given a string of items representing the box.

Sort through the items in the box finding the coins and putting aside
anything else.

You will be given a data structure similar to the one below.

box = '
    mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon
    monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth
    mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon
    mon mon mon mon
  '

Return the following in your solution.
[
  count of mon coins in box,
  count of monme coins in box,
  sum of all coins value in box,
  minimum number of coins needed for Tofu
]

100 ≤ cost ≤ 1000
cost = 124
returns
[45, 5, 345, 6]

The coins have the following values:
monme = 60
mon = 1

Determine the minimum number of coins to pay for tofu. You must pay with
exact change and if you do not have the correct change return
“leaving the market”.

If the cost of tofu is higher than your total amount of money also return
“leaving the market”

Parameters: a number and a string
  (number is tofu cost)
  (string contains space-separated words)
Returns:
  an array of numbers
    1st value is count of mon coins
    2nd value is count of monme coins
    3rd value is sum of all coins value
    4th value is min number of coins needed for tofu
  OR
  a string; 'leaving the market'
    if you do not have the exact change to pay for tofu
    if the cost is higher than your total
Examples:
  var box = "mon monme"
  cost = 5
  buyTofu(cost, box)
    // 'leaving the market'
  var box = '
      mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon
      monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon
      cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon
      mon mon mon mon mon mon mon
    '
  cost = 124
  buyTofu(cost, box)
    // [45, 5, 345, 6]
  var box = 'mon mon mon'
  cost = 674
  buyTofu(cost, box)
    // 'leaving the market'
  var box = 'monme mon mon monme'
  cost = 1
  buyTofu(cost, box)
    // [2, 2, 122, 1]
Pseudocode:
  convert string into an array of words
  reduce the string array into the result array
    1st elem to be count of mon (1) coins
    2nd elem to be count of monme (60) coins
    3rd elem to be sum of all coins value
    4th elem to be min number of coins needed for tofu
      set to 0
  define variable monmeNeeded to be cost / 60, integer only
    check if value is less than result[1]
      if so, add value to result[3]
      if not, return 'leaving the market'
  define variable monNeeded to be cost % 60
    check if value is less than result[0]
      if so, add value to result[3]
      if not, return 'leaving the market'
*/

function buyTofu(cost, box) {
  const r = box.split(' ').reduce((a, w) => w === 'mon' ? (++a[0], ++a[2], a) : w === 'monme' ? (++a[1], a[2] += 60, a) : a, [0, 0, 0, 0]);
  (mM = Math.trunc(cost / 60)) < r[1] ? (r[3] += mM) && (cost -= 60 * mM) : (r[3] += r[1]) && (cost -= 60 * r[1]);
  return cost <= r[0] ? (r[3] += cost, r) : 'leaving the market';
}

// function buyTofu(cost, box) {
//   return (r = box.split(' ').reduce((a, w) => w === 'mon' ? (++a[0], ++a[2], a) : w === 'monme' ? (++a[1], a[2] += 60, a) : a, [0, 0, 0, 0])), (mM = Math.trunc(cost / 60)) < r[1] ? (r[3] += mM) && (cost -= 60 * mM) : (r[3] += r[1]) && (cost -= 60 * r[1]), (cost <= r[0] ? (r[3] += cost, r) : 'leaving the market');
// }