/*
We need a function prime_bef_aft() that gives the largest prime
below a certain given value n,
befPrime or bef_prime (depending on the language),
and the smallest prime larger than this value,
aftPrime/aft_prime (depending on the language).

The result should be output in a list like the following:
primeBefAft == [befPrime, aftPrime]

If n is a prime number it will give two primes, n will not be
included in the result.

Let's see some cases:

primeBefAft(100) == [97, 101]
primeBefAft(97) == [89, 101]
primeBefAft(101) == [97, 103]

Range for the random tests: 1000 <= n <= 200000
The extreme and special case n = 2 will not be considered for
the tests.

Parameters: a num
Returns: an array containing 2 nums
  prime that comes before input &
  prime that comes after input
Examples:
  primeBefAft(100), [97, 101]
  primeBefAft(97), [89, 101]
  primeBefAft(101), [97, 103]
  primeBefAft(120), [113, 127]
  primeBefAft(130), [127, 131]
Pseudocode:
  initialize primes var assigned to empty array
  create a loop to decrement from input
    if current is prime
      push current to primes
      break out of loop
  create a loop to increment from input
    if current is prime
      push current to primes
      break out of loop
  return primes
*/

function primeBefAft(num) {
  return Array.from({length: 2}, (e, i) => {for (let j = i ? num + 1 : num - 1; ; i ? j++ : j--) if (isPrime(j)) return j});
}

function primeBefAft(num) {
  const primes = [];
  for (let i = num - 1; i > 1; i--) {
    if (isPrime(i)) {
      primes.push(i);
      break;
    }
  }
  for (let j = num + 1; ; j++) {
    if (isPrime(j)) {
      primes.push(j);
      break;
    }
  }
  return primes;
}

function isPrime(n) {
  for (let i = 2; i <= n ** .5; i++) if (!(n % i)) return false;
  return n > 1;
}