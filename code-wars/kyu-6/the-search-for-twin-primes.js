/*
A twin prime is a prime number that is either 2 less or 2 more
than another prime number—for example, either member of the twin
prime pair (41, 43). In other words, a twin prime is a prime
that has a prime gap of two. Sometimes the term twin prime is
used for a pair of twin primes; an alternative name for this is
prime twin or prime pair.

Your mission, should you choose to accept it, is to write a
function that counts the number of sets of twin primes from 1 to n.

If n is wrapped by twin primes (n-1 == prime && n+1 == prime)
then that should also count even though n+1 is outside the range.

Ex n = 10
Twin Primes are (3,5) (5,7) so your function should return 2!

Parameters: a num
Returns: a num
  count of twin primes under input num + 1
Examples:
  twinPrime(-25), 0
  twinPrime(0), 0
  twinPrime(1), 0
  twinPrime(2), 0
  twinPrime(10), 2
  twinPrime(11), 2
  twinPrime(12), 3
  twinPrime(15), 3
  twinPrime(25), 4
Pseudocode:
  initialize a primes var assigned to an empty array
  create a loop to run from from 3 to n + 1, increment by 2
    if current num is prime
      push current num to primes arr
  reduce primes array, initialize accumulator at 0
    if current num + 2 equals next value
      increment accumulator
  return reduced value
*/

function twinPrime(n) {
  const primes = [];
  for (let i = 3; i <= n + 1; i += 2) if (isPrime(i)) primes.push(i);
  return primes.reduce((c, p, i, a) => p + 2 === a[i + 1] ? ++c : c, 0);
}

function isPrime(n) {
  for (let i = 2; i <= n ** .5; i++) if (!(n % i)) return false;
  return n > 1;
}