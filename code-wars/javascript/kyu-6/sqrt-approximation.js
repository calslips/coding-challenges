/*
We want to approximate the sqrt function. Usually this function
takes a floating point number and returns another floating point
number, but in this kata we're going to work with integral numbers
instead.

Your task is to write a function that takes an integer n and
returns either

an integer k if n is a square number, such that k * k == n or
a range (k, k+1), such that k * k < n and n < (k+1) * (k+1).

Examples
assert.deepEqual( sqrtApproximation(4), 2 );
assert.deepEqual( sqrtApproximation(5), [2,3] );

Note : pow and sqrt functions are disabled.
Remarks
In dynamic languages, return either a single value or an array/list.
In Haskell, use Either.

Parameters: a num
Returns:
  a num (sqrt of input if an int)
  or an array containing 2 nums
    (if sqrt is a float,
    1st value will be sqrt floored,
    2nd value will be sqrt ceiled)
Examples:
  sqrtApproximation(4), 2
  sqrtApproximation(9), 3
  sqrtApproximation(16), 4
  sqrtApproximation(25), 5
  sqrtApproximation(36), 6
  sqrtApproximation(49), 7
  sqrtApproximation(100), 10
  sqrtApproximation(0), 0
  sqrtApproximation(5), [2, 3]
  sqrtApproximation(82), [9, 10]
  sqrtApproximation(101), [10, 11]
  sqrtApproximation(10001), [100, 101]
Pseudocode:
  initialize square root to 0
  find square root of input num
    create a loop starting from 1,
    to run as long as input is truthy and square root is falsy,
    incrementing by 1
      if counter times counter equals input
        assign square root to counter
      otherwise if current counter times itself is less than input &&
      counter plus 1 times itself is greater than input
        assign square root to array containing counter and counter + 1
  return square root
*/

function sqrtApproximation(number) {
  let sqrt = 0;
  for (let i = 1; number && !sqrt; i++) {
    if (i * i === number) sqrt = i;
    else if (i * i < number && (i + 1) * (i + 1) > number) sqrt = [i, i + 1];
  }
  return sqrt;
}