/*
A twin prime is a prime number that differs from another prime
number by 2. Write a function named is_twin_prime which takes
an int parameter and returns true if it is a twin prime, else
false.

Parameters: a number
Returns: a boolean
  whether the input is a prime that
  differs from at least one other prime by 2
Examples:
  isTwinPrime(5) // true
  isTwinPrime(7) // true
  isTwinPrime(9) // false
  isTwinPrime(25) // false
  isTwinPrime(953) // false
Pseudocode:
  if input num is prime
    if input num - 2 is prime
      return true
    or if input num + 2 is prime
      return true
    otherwise
      return false
  otherwise
    return false
*/

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
}

function isTwinPrime(n) {
  return isPrime(n) && (isPrime(n - 2) || isPrime(n + 2));
}