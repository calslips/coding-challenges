/*
In this Kata, you will be given two numbers, a and b, and
your task is to determine if the first number a is divisible
by all the prime factors of the second number b.

For example:
solve(15,12) = False
because 15 is not divisible by all the prime factors of 12
(which include 2).

Parameters: 2 nums
Returns: a boolean
  whether the 1st num is divisible by
  all prime factors of the 2nd num
Examples:
  solve(2, 256), true
  solve(2, 253), false
  solve(9, 243), true
  solve(15, 12), false
  solve(21, 2893401), true
  solve(21, 2893406), false
  solve(54, 2834352), true
  solve(54, 2834359), false
  solve(1000013, 7187761), true
  solve(1000013, 7187762), false
Pseudocode:
  find all the factors of 2nd num (from 2 up)
  find all primes within factors
  check if 1st num is divisible by ALL prime factors
  return boolean result of above condition
*/

function getFactors(n) {
  const factors = [];
  for (let i = 2; i <= n; i++) if (!(n % i)) factors.push(i);
  return factors;
}

function getPrimes(arr) {
  return arr.filter(n => {
    for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
    return true;
  });
}

function solve(a, b) {
  const factors = getFactors(b), primes = getPrimes(factors);
  return primes.every(p => !(a % p));
}