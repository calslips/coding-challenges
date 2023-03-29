/*
Lucas numbers are numbers in a sequence defined like this:
L(0) = 2
L(1) = 1
L(n) = L(n-1) + L(n-2)

Your mission is to complete the function that returns the nth
term of this sequence.
Note: It should work for negative numbers as well; how you do
this is you flip the equation around, so for negative numbers:
L(n) = L(n+2) - L(n+1)

Parameters: a num
Returns: a num
Examples:
  lucasnum(-10), 123
  lucasnum(10), 123
  lucasnum(-1), -1
  lucasnum(5), 11
  lucasnum(-5), -11
  lucasnum(0), 2
  lucasnum(1), 1
Pseudocode:
  initialize a memoized fn
    initialize a map to store args & respective returns
      start with keys 0 & 1 with values 2 & 1 respectively
    return fn that takes in a num
      base case
        if input exists in map
          return it's associated value
      recursive case
        otherwise
          if input is positive
            obtain recursive call to fn with input - 1 as arg
              PLUS recursive call to fn with input - 2 as arg
            store result in map as value of input key
            return result
          otherwise if input is negative
            obtain recursive call to fn with input + 2 as arg
              MINUS recursive call to fn with input + 1 as arg
            store result in map as value of input key
            return result
*/

const memoLucasnum = () => {
  const map = new Map([[0, 2], [1, 1]]),
        f = n => {
          if (!map.has(n)) n < 0 ? map.set(n, f(n + 2) - f(n + 1)) : map.set(n, f(n - 1) + f(n - 2));
          return map.get(n);
        };
  return f;
};
const lucasnum = memoLucasnum();