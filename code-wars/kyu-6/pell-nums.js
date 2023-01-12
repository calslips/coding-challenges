/*
The Pell sequence is the sequence of integers defined by the initial values
P(0) = 0, P(1) = 1

and the recurrence relation
P(n) = 2 * P(n-1) + P(n-2)

The first few values of P(n) are
0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 13860, 33461, 80782, 195025, 470832, ...

Task
Your task is to write a method that returns nth Pell number

Parameters: a num
Returns: a BigInt
Examples:
  pell(0), 0n
  pell(1), 1n
  pell(2), 2n
  pell(3), 5n
  pell(4), 12n
  pell(100), 66992092050551637663438906713182313772n
Pseudocode:
  create a memo fn
    initialize a hash to contain solutions
      include 0: 0n and 1:1n
    inner fn
      basecase
        if current arg exists in hash (we have solution)
          return associated value
      recursive case
        hash at current arg equals
          2 (bigint) times
          recursive call to fn with n-1 plus
          recursive call to fn with n-2
        return hash at current arg
    return inner fn
  assign solution fn to equal call to memo fn
    will be assigned value of inner fn
    with access to memo hash
*/

const memoPell = () => {
  const cache = [0n, 1n];
  const pell = n => n in cache ? cache[n] : (cache[n] = 2n * pell(n - 1) + pell(n - 2), cache[n]);
  return pell;
};
const pell = memoPell();

const memoPell = () => {
  const cache = [0n, 1n];
  const pell = n => {
    if (n in cache) return cache[n];
    cache[n] = 2n * pell(n - 1) + pell(n - 2);
    return cache[n];
  };
  return pell;
};
const pell = memoPell();

const memoPell = () => {
  const hash = {
    0: 0n,
    1: 1n,
  };
  const pell = n => {
    if (n in hash) return hash[n];
    hash[n] = 2n * pell(n - 1) + pell(n - 2);
    return hash[n];
  };
  return pell;
};
const pell = memoPell();