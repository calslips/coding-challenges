/*
Consider the number 1176 and its square (1176 * 1176) = 1382976.

Notice that:
the first two digits of 1176 form a prime.
the first two digits of the square 1382976 also form a prime.
the last two digits of 1176 and 1382976 are the same.
Given two numbers representing a range (a, b), how many numbers
satisfy this property within that range? (a <= n < b)

Example
solve(2, 1200) = 1, because only 1176 satisfies this property
within the range 2 <= n < 1200. See test cases for more examples.
The upper bound for the range will not exceed 1,000,000.

Parameters: 2 nums
Returns: a num
  the amount of nums within the input range
  that satisfy the fn condition
Examples:
  solve(2,1200), 1
  solve(2,100000), 247
  solve(2,1000000), 2549
  solve(100000,1000000), 2302
Pseudocode:
  initialize a count var assigned to 0
  iterate over the inputs from a up b (exclusive)
    isolate the 1st 2 digits (at most) and the last 2 digits (at most)
    square the num and isolate the same 1st 2 digits and last 2 digits
    if the 1st 2 digits of both form a prime AND
    the last 2 digits of both are equal
      increment count
  return count
*/

function solve(a, b) {
  let count = 0;
  for (let i = a; i < b; i++) {
    const sq = i * i, iF = `${i}`.slice(0, 2), iL = `${i}`.slice(-2), sqF = `${sq}`.slice(0, 2), sqL = `${sq}`.slice(-2);
    if (iL === sqL && isPrime(+iF) && isPrime(+sqF)) count++;
  }
  return count;
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
}