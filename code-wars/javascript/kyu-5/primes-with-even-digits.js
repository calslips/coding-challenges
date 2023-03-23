/*
Find the closest prime number under a certain integer n that has
the maximum possible amount of even digits.

For n = 1000, the highest prime under 1000 is 887, having two
even digits (8 twice)

Naming f(), the function that gives that prime, the above case
and others will be like the following below.

f(1000) ---> 887 (even digits: 8, 8)
f(1210) ---> 1201 (even digits: 2, 0)
f(10000) ---> 8887
f(500) ---> 487
f(487) ---> 467

Features of the random tests:
Number of tests = 28
1000 <= n <= 5000000

Parameters: a num
Returns: a num
  highest prime below input
  with max possible even digits
Examples:
  f(1000), 887
  f(10000), 8887
  f(500), 487
  f(487), 467
Pseudocode:
  initialize a count var for even digits assigned to 0
  initialize a most evens var assigned to 0
  create a loop to run from input num minus 1 and down
    if count is equal to length of current counter - 1
      return mostEvens
    if current counter is prime AND
    if current counter even digits is greater than count
      reassign count to current counter even digits count
      reassign most evens to current counter
*/

function f(n) {
  let count = 0, mostEvens = 0;
  for (let i = --n; i; i--) {
    if (count >= `${i}`.length - 1) return mostEvens;
    else if (isPrime(i) && (c = countEvenDigits(i)) > count) count = c, mostEvens = i;
  }
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
}

function countEvenDigits(n) {
  return [...`${n}`].filter(d => !(d % 2)).length;
}