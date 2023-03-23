/*
We have two consecutive integers k1 and k2, k2 = k1 + 1
We need to calculate the lowest strictly positive integer n,
such that: the values nk1 and nk2 have the same digits but in
different order.

E.g.# 1:
k1 = 100
k2 = 101
n = 8919
#Because 8919 * 100 = 891900
and      8919 * 101 = 900819

E.g.# 2:
k1 = 325
k2 = 326
n = 477
#Because 477 * 325 = 155025
and      477 * 326 = 155502

Your task is to prepare a function that will receive the value
of k and outputs the value of n.

The examples given above will be:
find_lowest_int(100) === 8919
find_lowest_int(325) ===  477

Features of the random tests
10 < k < 10.000.000.000.000.000 (For Python, Ruby and Haskell)
10 < k < 1.000.000.000  (For Javascript and D 1e9)

Parameters: a num
Returns: a num
Examples:
  findLowestInt(325), 477
  findLowestInt(599), 2394
  findLowestInt(855), 999
  findLowestInt(1), 125874
  findLowestInt(100), 8919
  findLowestInt(1000), 89919
  findLowestInt(10000), 899919
Pseudocode:
  create a loop to run from 1, incrementing by 1 each iteration
    initialize a k1Digits var assigned to an obj
      to contain the digits and their count of k1 * current counter
    initialize a k2Digits var assigned to an obj
      to contain the digits and their count of k2 (k1 + 1) * current counter
    if both objs are the same size
      iterate over the keys of k1Digits
        if every key in k1 has an equal value for keys in k2Digits
          return current counter
        otherwise
          continue
*/

function findLowestInt(k) {
  for (let i = 1; i; i++) {
    const k1Map = [...`${k * i}`].reduce((m, d) => (m.set(d, m.get(d) + 1 || 1), m), new Map());
    const k2Map = [...`${(k + 1) * i}`].reduce((m, d) => (m.set(d, m.get(d) + 1 || 1), m), new Map());
    if (k1Map.size === k2Map.size && [...k1Map.keys()].every(key => k1Map.get(key) === k2Map.get(key))) return i;
  }
}