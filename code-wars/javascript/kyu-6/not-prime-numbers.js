/*
You are given two positive integers a and b (a < b <= 20000).
Complete the function which returns a list of all those numbers
in the interval [a, b) whose digits are made up of prime numbers
  (2, 3, 5, 7) but which are not primes themselves.

Parameters: 2 nums
Returns: an array of nums
Examples:
  notPrimes(2, 222),
    [22, 25, 27, 32, 33, 35, 52, 55, 57, 72, 75, 77]
  notPrimes(2700, 3000),
    [2722, 2723, 2725, 2727, 2732, 2733, 2735, 2737, 2752, 2755, 2757, 2772, 2773, 2775]
  notPrimes(500, 999),
    [522, 525, 527, 532, 533, 535, 537, 552, 553, 555, 572, 573, 575, 722, 723, 725, 732, 735, 737, 752, 753, 755, 772, 775, 777]
  notPrimes(999, 2500),
    [2222, 2223, 2225, 2227, 2232, 2233, 2235, 2252, 2253, 2255, 2257, 2272, 2275, 2277, 2322, 2323, 2325, 2327, 2332, 2335, 2337, 2352, 2353, 2355, 2372, 2373, 2375]
Pseudocode:
  initialize an array to contain all nums from a to b
  reduce above into an array of nums
    if current num is NOT prime BUT all of its digits ARE
      push to accumulating array
    otherwise
      continue
  return reduced array
*/

function notPrimes(a, b) {
  return Array(b - a)
    .fill()
    .map((_, i) => a + i)
    .reduce((r, n) => ([...`${n}`].every(isPrime) && !isPrime(n) && r.push(n), r), []);
}
function isPrime(n) {
  for (let i = 2; i <= n ** .5; i++) if (!(n % i)) return false;
  return n > 1;
}

function notPrimes(a, b) {
  const nums = [];
  for (let i = a; i < b; i++) nums.push(i);
  return nums.reduce((r, n) => ([...`${n}`].every(d => d == 2 || d == 3 || d == 5 || d == 7) && !isPrime(n) && r.push(n), r), []);
}