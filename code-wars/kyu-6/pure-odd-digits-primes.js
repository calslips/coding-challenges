/*
Primes that have only odd digits are pure odd digits primes,
obvious but necessary definition. Examples of pure odd digit
primes are:
  11, 13, 17, 19, 31... If a prime has only one even digit
  does not belong to pure odd digits prime, no matter the
  amount of odd digits that may have.

Create a function, only_oddDigPrimes(), that receive any
positive integer n, and output a list like the one below:

[number pure odd digit primes below n, largest pure odd digit
  prime smaller than n, smallest pure odd digit prime higher
  than n]

Let's see some cases:

only_oddDigPrimes(20) ----> [7, 19, 31]
///7, beacause we have seven pure odd digit primes below 20
and are 3, 5, 7, 11, 13, 17, 19
19, because is the nearest prime of this type to 20
31, is the first pure odd digit that we encounter after 20///

only_oddDigPrimes(40) ----> [9, 37, 53]
In the case that n, the given value, is a pure odd prime,
should be counted with the found primes and search for the
immediately below and the immediately after.

Parameters: a num
Returns: an arr of nums
  1st el is the count of pure odd primes up to & including input
  2nd el is the nearest value to input (less than or equal to)
  3rd el is the next pure odd prime greater than input
    (contains only prime digits)
Examples:
  only_oddDigPrimes(20), [7, 19, 31]
  only_oddDigPrimes(40), [9, 37, 53]
  only_oddDigPrimes(55), [10, 53, 59]
  only_oddDigPrimes(60), [11, 59, 71]
  only_oddDigPrimes(100), [15, 97, 113]
Pseudocode:
  initialize a results var assigned to an empty arr
  create a loop with counter starting at 3
  continue until the last el in results is greater than input
  incrementing counter by 2 after each iteration
    if current counter is prime AND contains only odd digits
      push to results var
  return an array containing
    length of results - 1,
    2nd to last el,
    last el
*/

function onlyOddDigPrimes(n) {
  const results = [];
  for (let i = 3; (results[results.length - 1] || 0) <= n; i += 2) if (isPrime(i) && isPureOdd(i)) results.push(i);
  return [results.length - 1, results[results.length - 2], results[results.length - 1]];
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
}

function isPureOdd(n) {
  const strDigits = [...n.toString()];
  return strDigits.every(e => +e % 2);
}