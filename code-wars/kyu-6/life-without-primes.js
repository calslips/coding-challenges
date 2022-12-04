/*
Consider an array that has no prime numbers, and none of
its elements has any prime digit. It would start with:
[1,4,6,8,9,10,14,16,18,40,44..].

12 and 15 are not in the list because 2 and 5 are primes.

You will be given an integer n and your task will be
return the number at that index in the array. For example:
solve(0) = 1
solve(2) = 6

Parameters: a num
  an index of the no-primes arr
Returns: a num
  the value found at the input index
Examples:
  solve(10), 44
  solve(50), 169
  solve(100), 644
  solve(150), 896
  solve(200), 1060
  solve(300), 1668
  solve(400), 4084
  solve(500), 4681
Pseudocode:
  initialize noPrimes var assigned to an arr containing num 1
  create a loop
  initialize counter as 4
  run as long as noPrimes arr length is less than input num
    check if current counter is prime
    check if current counter includes any of the single digit primes
    if neither conditional above is met,
      push current counter to noPrimes arr
  return noPrimes value at input index
*/

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return true;
}

function solve(n) {
  const noPrimes = [1], primes = [...'2357'];
  for (let i = 4; noPrimes.length <= n; i++) if (!isPrime(i) && !primes.some(p => `${i}`.includes(p))) noPrimes.push(i);
  return noPrimes[n];
}